import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class SubjectService {

    /** @description Subject que controla o botão de voltar */
    subject_Rota_Voltar = new BehaviorSubject<string>("");

    /** @description Subject que controla o Appbar */
    subject_Exibindo_Bar = new BehaviorSubject(false);

    /** @description Subject que controla o Loading */
    subject_Exibindo_Loading = new BehaviorSubject(false);

    /** @description Subject que controla o número de pendencias */
    subject_Quantidade_Pendencia = new BehaviorSubject(0);
}