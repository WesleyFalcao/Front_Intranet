import { Component, Directive, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ISnackbar, SnackbarComponent } from './components/snackbar/snackbar.component';
import { SubjectService } from './services/subject.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  /** @description Instância Snackbar */
  @ViewChild(SnackbarComponent) snackbar: SnackbarComponent

  /** @description Variável que controla o Loading */
  b_Exibindo_Loading: boolean;

  /** @description Variável que controla o Timeline */
  b_Exibir_Timeline: boolean = false;

  /** @description Variável que controla o Titulo */
  b_Exibir_Titulo: boolean = false;

  /** @description Subject para destruir os subscribers */
  subject_unsub = new Subject()

  constructor(
    private subjectService: SubjectService,
    private router: Router,
  ) { }

  ngOnInit() {
    setTimeout(() => {
      
      this.subjectService.subject_Exibindo_Loading.pipe(takeUntil(this.subject_unsub)).subscribe((bool: boolean) => {
        this.b_Exibindo_Loading = bool
      })

      this.subjectService.subject_Exibindo_Snackbar.pipe(takeUntil(this.subject_unsub)).subscribe((snackbar: ISnackbar) => {
        this.snackbar?.timer(snackbar.message)
    })
    },);
  }
  
  ngOnDestroy() {
    this.subject_unsub.next(true)
    this.subject_unsub.complete()
  }

}
