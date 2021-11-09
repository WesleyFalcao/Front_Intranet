import {
    HttpErrorResponse, HttpEvent, HttpHandler,
    HttpInterceptor, HttpRequest, HttpResponse
} from "@angular/common/http";
import { Injectable } from "@angular/core";
// Para capturar as rotas
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { catchError, filter, tap } from "rxjs/operators";
import { AvisoCriticaComponent } from "src/app/components/aviso-critica/aviso-critica.component";
import { ModalContainerComponent } from "src/app/components/modal-service/modal-container/modal-container.component";
import { ModalService } from "src/app/components/modal-service/modal.service";
import { SubjectService } from "src/app/services/subject.service";
import { DataService } from "../../services/data.service";


@Injectable()
export class InterceptorService implements HttpInterceptor {

    nr_Tamanho_Model: number = 350;

    constructor(
        private route: Router,
        private dataService: DataService,
        private modalService: ModalService,
        private subjectService: SubjectService
    ) { }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((e: HttpErrorResponse) => {
                this.modalService.closeAll()

                this.route.navigate(["/error"]);
                this.subjectService.subject_Exibindo_Loading.next(false)

                return throwError(e)
            }),
            filter(e => e.type !== 0),
            tap(
                (event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse) {
                        const errors = event.body.errors

                        if (errors) {
                            this.subjectService.subject_Exibindo_Loading.next(false)

                            this.modalService.closeAll()

                            let errorCode = errors[0].extensions.statusCode;

                            if (errorCode == 200) {
                                errors.find(err => {
                                    errorCode = err.extensions.statusCode;

                                    return errorCode != 200
                                });
                            }

                            //NAO AUTENTICADO OU TOKEN ESTA EXPIRADO
                            if (errorCode == 401) {

                                // Limpa dados da sessão
                                this.dataService.Limpar_Session();

                                this.subjectService.subject_Exibindo_Snackbar.next({ message: "Sessão Expirada, favor logar novamente" })

                                // Redireciona
                                this.route.navigate(["/"]).then(() => {
                                    setTimeout(() => this.subjectService.subject_Exibindo_Bar.next(false))
                                })

                            }
                            //BAD REQUEST - ALGUM ERRO DE PARAMETRO
                            else if (errorCode == 400) {
                                this.route.navigate(["/error"]);
                            }
                            //RECURSO NEGADO - O RECURSO NAO ESTA DISPONIVEL PARA ESTE PERFIL
                            else if (errorCode == 403) {
                                console.error(
                                    "O acesso a alguns recursos foi rejeitado",
                                    errors
                                );
                            }
                            //OUTROS ERROS NÃO MAPEADOS
                            else {
                                // Redireciona
                                this.route.navigate(["/error"]);
                            }

                            throw "Erro na Requisição"
                        } else if (event.body.data) {
                            const data = event.body.data
                            let criticas = []
                            let b_Status = true
                            let status_Code

                            Object.keys(data).forEach(query => {
                                if (!data[query].status) {
                                    data[query].motivos_Critica?.forEach(motivos_Critica => {
                                        if (motivos_Critica.propriedade == "" || motivos_Critica.propriedade == null) {
                                            criticas.push(motivos_Critica.criticas[0])
                                        }
                                    });

                                    b_Status = false
                                }
                                status_Code = data[query].statusCode
                            })

                            if (!b_Status && criticas.length > 0) {
                                this.subjectService.subject_Exibindo_Loading.next(false)

                                this.modalService.closeAll()


                                if (window.innerWidth >= 768) {
                                    this.nr_Tamanho_Model = 750;
                                } else {
                                    this.nr_Tamanho_Model = 350;
                                }

                                if (status_Code == 405) {
                                    this.subjectService.subject_Exibindo_Snackbar.next({ message: criticas[0] })
                                } else {

                                    this.modalService.open(
                                        AvisoCriticaComponent,
                                        criticas
                                    )
                                }

                                throw "Erro de Lógica na API"
                            } else if (!b_Status) {
                                throw event.body.data
                            }
                        }
                    }
                },
                (err: any) => {
                    //console.log(err);
                    // Se ocorreu um erro de autenticação
                    // if (err.status == 401 && this.data.Get_Session() == "") {
                    if (err.status == 401) {
                        console.warn("Você está deslogado");
                        // TODO: faz o relogin
                        // ...

                        // Chamar API
                        // this.api.Logar().then(response => {
                        //     // Gravo os dados da session
                        //     this.data.Set_Session(response);
                        // });
                    }

                    // Todos erros caem aqui
                    if (err instanceof HttpErrorResponse) {
                        console.table(err);
                        // // Redireciona
                        // this.route.navigate(["/error"]);

                        // // Dá um throw para parar o sistema
                        // throw "Erro crítico encontrado.";
                    }
                }
            )
        );
    }
}
