import { fn } from '@angular/compiler/src/output/output_ast';
import { Component, ElementRef, EventEmitter, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { interval, timer } from 'rxjs';
import { ScrollDirective } from 'src/app/directives/scroll/scroll.directive';
import { RamaisService } from './ramais.service';
import { Subject, Subscription } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import { FormControl } from '@angular/forms';
import { RamaisParams } from 'src/app/models/ramais/ramais.params';
import { SubjectService } from 'src/app/services/subject.service';


@Component({
  selector: 'app-ramais',
  templateUrl: './ramais.component.html',
  styleUrls: ['./ramais.component.scss'],
})

export class RamaisComponent implements OnInit {


  objArrayIniciais = [

    { inicial: "A" }, { inicial: "B" }, { inicial: "C" }, { inicial: "D" }, { inicial: "E" }, { inicial: "F" }, { inicial: "G" }, { inicial: "H" }, { inicial: "I" },
    { inicial: "J" }, { inicial: "K" }, { inicial: "L" }, { inicial: "M" }, { inicial: "N" }, { inicial: "O" }, { inicial: "P" }, { inicial: "Q" }, { inicial: "R" },
    { inicial: "S" }, { inicial: "T" }, { inicial: "U" }, { inicial: "V" }, { inicial: "W" }, { inicial: "X" }, { inicial: "Y" }, { inicial: "Z" },

  ]

  objArrayRamais = []

  objArrayTitulos = [

    { nm_titulo: "Nome", nm_Classe: "pr-20 lg:w-4/12" },
    { nm_titulo: "Setor", nm_Classe: "pr-28 lg:w-3/12 xl:pl-10" },
    { nm_titulo: "Ramal(s)", nm_Classe: "pr-6 lg:w-2/12 xl:pr-16" },
    { nm_titulo: "Email", nm_Classe: "pr-6 lg:w-3/12" }
  ]

  // @ViewChildren(ScrollDirective)
  // scroll: QueryList<ScrollDirective>;


  @ViewChildren('variavelLocal') objArrayItemLista: QueryList<ElementRef>
  @ViewChild('listaRamais') listaRamais: ElementRef
  @ViewChildren('letras') objArrayLetras: QueryList<ElementRef>


  b_Mostrar_Modal: boolean = false
  b_Text_Row_Lg: boolean = false
  nm_Inicial_Selecionada: string = "A"
  Inicial: string
  nr_Ultimo_Item: number = 0
  nm_Search: string = ""
  cd_Origem: number = 3
  nm_Inicial: String

  nr_Page: number = 1
  nr_Page_Length: number = window.innerWidth < 1280 ? 25 : 7


  modelChanged = new FormControl()


  constructor(private ramaisService: RamaisService, private subjectService: SubjectService) { }

  async ngOnInit() {
    this.Buscar_Ramais()
    this.modelChanged.valueChanges.pipe(debounceTime(500), distinctUntilChanged()).subscribe(async (input) => {
      this.nr_Page = 1
      this.nm_Search = input
      if (this.nm_Search != null && this.nm_Search.length > 1) {
        this.nm_Inicial_Selecionada = null;
      }
      await this.Buscar_Ramais()
    })
  }

  expandir(documento: any): void {
    if (window.innerWidth < 1280) {
      documento.open = !documento.open
      // this.scroll.first.reset()
    }
  }

  Mostrar_Modal() {
    this.b_Mostrar_Modal = true
  }

  Redefinir() {
    if (window.innerWidth > 1280) {

      this.objArrayRamais.forEach(a => a.open = true)
      this.b_Mostrar_Modal = true
      // this.b_Text_Row_Lg = true
    } else {
      this.objArrayRamais.forEach(a => a.open = false)
    }
  }

  async Buscar_Ramais() {
    const objParams: RamaisParams = { nr_Page: this.nr_Page, nr_Page_Length: this.nr_Page_Length, nm_Search: this.nm_Search, cd_Origem: this.cd_Origem, nm_Inicial_Selecionada: this.nm_Inicial_Selecionada }
    this.objArrayRamais = await this.ramaisService.Get_Ramais(objParams)
    this.Redefinir()
  }

  async proxima() {

    this.Rollar_Topo()
    let objProximo = this.objArrayRamais
    await this.Buscar_Ramais()
    if (this.objArrayRamais.length == 0) {
      this.objArrayRamais = objProximo
      this.subjectService.subject_Exibindo_Snackbar.next({ message: 'Todas as informações já foram trazidas' })
    } else {
      this.nr_Page++;
    }
  }

  Rollar_Topo() {
    this.listaRamais.nativeElement.scrollTo(0, 0)
  }

  async anterior() {
    this.nr_Page--;
    await this.Buscar_Ramais()
  }

  async Get_Filtro_Page_Ramais(cd_Origem: number, b_Letra: boolean = true) {
    this.nr_Page = 1
    this.cd_Origem = cd_Origem
    this.Buscar_Ramais()
    if (window.innerWidth < 1280) {
      this.b_Mostrar_Modal = false
    }
    this.Rollar_Topo()

  }

  async Limpar_Filtros() {

    this.nr_Page = 1
    this.cd_Origem = 3
    if (window.innerWidth < 1280) {
      this.b_Mostrar_Modal = false
    }
    this.nm_Inicial_Selecionada = ""
    this.modelChanged.setValue(this.nm_Inicial_Selecionada)
    await this.Buscar_Ramais()
  }

  async Clickar_Inicial_Acima(objInicial: any, nr_Index: number) {

    this.nm_Inicial_Selecionada = objInicial.inicial
    this.modelChanged.setValue("")
    this.Buscar_Ramais()

  }
}




