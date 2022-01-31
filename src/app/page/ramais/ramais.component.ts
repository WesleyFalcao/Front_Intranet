import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, ElementRef, HostListener, NgZone, OnInit, QueryList, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, pairwise, throttleTime } from "rxjs/operators";
import { SearchBarComponent } from 'src/app/components/search-bar/searchbar.component';
import { RamaisParams } from 'src/app/models/ramais/ramais.params';
import { SubjectService } from 'src/app/services/subject.service';
import { RamaisService } from './ramais.service';

@Component({
  selector: 'app-ramais',
  templateUrl: './ramais.component.html',
  styleUrls: ['./ramais.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class RamaisComponent implements OnInit {

  objArrayIniciais = [

    { inicial: "A" }, { inicial: "B" }, { inicial: "C" }, { inicial: "D" }, { inicial: "E" }, { inicial: "F" }, { inicial: "G" }, { inicial: "H" }, { inicial: "I" },
    { inicial: "J" }, { inicial: "K" }, { inicial: "L" }, { inicial: "M" }, { inicial: "N" }, { inicial: "O" }, { inicial: "P" }, { inicial: "Q" }, { inicial: "R" },
    { inicial: "S" }, { inicial: "T" }, { inicial: "U" }, { inicial: "V" }, { inicial: "W" }, { inicial: "X" }, { inicial: "Y" }, { inicial: "Z" },

  ]

  objArrayRamais = []

  objArrayTitulos = [

    { nm_titulo: "Nome", nm_Classe: "lg:w-4/12 text-center" },
    { nm_titulo: "Setor", nm_Classe: "lg:w-3/12 text-center" },
    { nm_titulo: "Contato(s)", nm_Classe: "lg:w-2/12 text-center" },
    { nm_titulo: "E-mail", nm_Classe: "lg:w-3/12 text-center" }
  ]

  @ViewChild(CdkVirtualScrollViewport, { static: true }) scroller: CdkVirtualScrollViewport;
  @ViewChildren('variavelLocal') objArrayItemLista: QueryList<ElementRef>
  @ViewChild('listaRamais') listaRamais: ElementRef
  @ViewChildren('letras') objArrayLetras: QueryList<ElementRef>
  @ViewChild(SearchBarComponent, { static: true }) search_element: SearchBarComponent

  b_Mostrar_Modal: boolean = false
  b_Text_Row_Lg: boolean = false
  nm_Inicial_Selecionada: string = ""
  Inicial: string
  nr_Ultimo_Item: number = 0
  nm_Search: string = ""
  cd_Origem: number = 3
  nm_Inicial: String
  dt_Ultima_Pesquisa = new Date()
  b_Computador: boolean = false
  nm_Text_Orange: string = "text-laranja"
  nr_Page: number = 1
  nr_Page_Length: number = 80
  modelChanged = new FormControl()
  nr_Posicao: number
  b_Exibir_Rolagem_Verde_Menu: boolean = false
  nr_width: number
  b_Sobreposicao: boolean = false

  constructor(private ramaisService: RamaisService, private subjectService: SubjectService, private ngZone: NgZone) { }

  @HostListener('window:resize')
  onResize() {
    
    this.nr_width = window.innerWidth;
    if (this.nr_width >= 1024) {
      this.objArrayRamais.forEach(a => a.open = true)
      this.b_Computador = !this.b_Computador
      this.b_Exibir_Rolagem_Verde_Menu = true
      this.search_element.searchElement.nativeElement.focus()
    }
    else {
      this.b_Sobreposicao = true
      this.b_Mostrar_Modal = false
      this.objArrayRamais.forEach(a => a.open = false)
    }
  }

  async ngOnInit() {

    this.Exibir_Computador()
    this.Buscar_Ramais()
    this.modelChanged.valueChanges.pipe(debounceTime(500), distinctUntilChanged()).subscribe(async (input) => {
      this.nr_Page = 1
      this.nm_Search = input
      if (this.nm_Search != null && this.nm_Search.length > 1) {
        this.nm_Inicial_Selecionada = null;
        this.objArrayRamais = []
      }
      await this.Buscar_Ramais()
    })

    this.scroller.elementScrolled().pipe(
      map(() => this.scroller.measureScrollOffset('bottom')),
      filter((epic) => (new Date().getTime() - this.dt_Ultima_Pesquisa.getTime()) > 300),
      pairwise(),
      filter(([y1, y2]) => (y2 < y1 && y2 < 140)),
      throttleTime(200)
    ).subscribe(() => {
      this.ngZone.run(async () => {
        this.dt_Ultima_Pesquisa = new Date()
        this.nr_Page++
        await this.Buscar_Ramais();
      });
    })
  }

  Exibir_Computador() {
    if (window.innerWidth >= 1024) {
      this.b_Computador = true
      this.objArrayRamais.forEach(a => a.open = true)
      this.nr_Posicao = 3
      this.b_Exibir_Rolagem_Verde_Menu = true
      setTimeout(() => {
        this.search_element.searchElement.nativeElement.focus()
      }, 0);
      this.Trazer_Todos()
    }
  }


  Mostrar_Modal() {
    this.b_Mostrar_Modal = true
  }

  async Buscar_Ramais() {

    const objParams: RamaisParams = { nr_Page: this.nr_Page = 1, nr_Page_Length: this.nr_Page_Length, nm_Search: this.nm_Search, cd_Origem: this.cd_Origem, nm_Inicial_Selecionada: this.nm_Inicial_Selecionada }
    this.objArrayRamais = [...this.objArrayRamais, ...await this.ramaisService.Get_Ramais(objParams)]
    this.onResize()
  }

  async Get_Filtro_Page_Ramais(cd_Origem: number) {
    this.objArrayRamais = []
    this.nr_Page = 1
    this.cd_Origem = cd_Origem
    await this.Buscar_Ramais() 
  }

  async Trazer_Todos() {

    this.b_Exibir_Rolagem_Verde_Menu = true
    this.objArrayRamais = []
    this.nr_Page = 1
    this.cd_Origem = 3
    if (!this.b_Computador) {
      this.b_Mostrar_Modal = false
      this.objArrayRamais.forEach(a => a.open = false)
    } else {
      this.search_element.searchElement.nativeElement.focus()
      this.objArrayRamais.forEach(a => a.open = true)
    }
    this.modelChanged.setValue(this.nm_Inicial_Selecionada)
    await this.Buscar_Ramais()
  }

  Expandir_Card(obj: any) {
    if (window.innerWidth < 1280) {
      obj.open = !obj.open
    }
  }
}


