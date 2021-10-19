import { fn } from '@angular/compiler/src/output/output_ast';
import { Component, ElementRef, EventEmitter, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { interval, timer } from 'rxjs';
import { ScrollDirective } from 'src/app/directives/scroll/scroll.directive';
import { RamaisService } from './ramais.service';
import { Subject, Subscription } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import { FormControl } from '@angular/forms';
import { RamaisParams } from 'src/app/models/ramais/ramais.params';


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
    { nm_titulo: "Nome", nm_Classe: "pr-20 lg:w-4/12"},
    { nm_titulo: "Setor", nm_Classe: "pr-28 lg:w-3/12 xl:pl-10"},
    { nm_titulo: "Ramal(s)", nm_Classe: "pr-6 lg:w-2/12 xl:pr-16"},
    { nm_titulo: "Email", nm_Classe: "pr-6 lg:w-3/12"}
  ]

  @ViewChildren(ScrollDirective)
  scroll: QueryList<ScrollDirective>;


  @ViewChildren('variavelLocal') objArrayItemLista: QueryList<ElementRef>
  @ViewChild('variavelpailista') objVariavelpailista: ElementRef
  @ViewChildren('letras') objArrayLetras: QueryList<ElementRef>

  b_Mostrar_Modal: boolean = false
  b_Text_Row_Lg: boolean = false
  nm_Inicial_Selecionada: string = "A"
  Inicial: string
  nr_Ultimo_Item: number = 0
  nm_Search: string


  page: number = 1
  pageLength: number = 9
  searchString: string = ""


  modelChanged = new FormControl()
 

  constructor(private ramaisService: RamaisService) { }

  async ngOnInit() {

      this.modelChanged.valueChanges.pipe(debounceTime(500), distinctUntilChanged()).subscribe(async (input) => {
      this.page = 1
      this.searchString = input
      await this.Buscar_Ramais()
      console.log(this.searchString)
    })

    await this.Buscar_Ramais()


    if (window.innerWidth > 1280) {

      this.objArrayRamais.forEach(a => a.open = true)
      this.b_Mostrar_Modal = true
      // this.b_Text_Row_Lg = true
    } else {
      this.objArrayRamais.forEach(a => a.open = false)
    }

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

  Scrolar_aside(scroll: number) {

    const nr_Pixel = scroll + this.objArrayItemLista.first.nativeElement.offsetTop

    let nr_Index = 0

    this.objArrayItemLista.find((i, index) => {
      if (i.nativeElement.offsetTop >= nr_Pixel) {
        nr_Index = index
        return true
      }
      return false
    })

    this.nm_Inicial_Selecionada = this.objArrayRamais[nr_Index].inicial

    // let nrIndex_2 = this.objArrayIniciais.findIndex(i => i.inicial == this.objInicialSelecionada)

    // if (nrIndex_2 >= 6) {

    //   const objLetra = this.objArrayLetras.find((item_list, index_item) => nrIndex_2 == index_item)?.nativeElement

    //   objLetra.scrollIntoView()

    // } else if (this.nr_Ultimo_Item > nrIndex_2){

    //   const objLetra = this.objArrayLetras.find((item_list, index_item) => nrIndex_2 == index_item)?.nativeElement

    //   objLetra.scrollIntoView()
    // }

    // this.nr_Ultimo_Item = nrIndex_2
  }

  redefine() {
    if (window.innerWidth > 1280) {

      this.objArrayRamais.forEach(a => a.open = true)
      this.b_Mostrar_Modal = true
      // this.b_Text_Row_Lg = true
    } else {
      this.objArrayRamais.forEach(a => a.open = false)
    }
  }

  async Buscar_Ramais(b_Letra: boolean = true) {
    const objParams: RamaisParams = {page: this.page, pageLenght: this.pageLength, searchString: b_Letra ? this.searchString + "%" : "%" + this.searchString + "%"}
    this.objArrayRamais = await this.ramaisService.Get_Ramais(objParams)
    this.redefine()
    console.log(this.nm_Search, this.objArrayRamais);
  }

  async proxima() {
    this.page++;
    await this.Buscar_Ramais()
  }

  async anterior() {
    this.page--;
    await this.Buscar_Ramais()
  }

  async Contatosuteis(b_Letra: boolean = true){
    const objParams: RamaisParams = {page: this.page, pageLenght: this.pageLength, searchString: b_Letra ? this.searchString + "%" : "%" + this.searchString + "%"}
    this.objArrayRamais = await this.ramaisService.Get_RamaisUteis(objParams)
  }

  async FilialHospitalUnimed(b_Letra: boolean = true){
    const objParams: RamaisParams = {page: this.page, pageLenght: this.pageLength, searchString: b_Letra ? this.searchString + "%" : "%" + this.searchString + "%"}
    this.objArrayRamais = await this.ramaisService.Get_Ramais(objParams)
  }

  async FilialOperadora(b_Letra: boolean = true){
    const objParams: RamaisParams = {page: this.page, pageLenght: this.pageLength, searchString: b_Letra ? this.searchString + "%" : "%" + this.searchString + "%"}
    this.objArrayRamais = await this.ramaisService.Get_Ramais(objParams)
  }

  // FindIndex(f: Function) {
  //   let index = 0

  //   for (let aux of this) {
  //     if (f(aux, index)) {
  //       return index
  //     }

  //     index++
  //   }

  //   return -1
  // }

  async Clickar_Inicial_Acima(objInicial: any, nr_Index: number) {

    this.nm_Inicial_Selecionada = objInicial.inicial

    // this.nr_Ultimo_Item = nr_Index

    // const nr_Index_Nome = this.objArrayRamais.findIndex(i => i.inicial == objInicial.inicial)

    // const obgItem_Filho = this.objArrayItemLista.find((item_list, index_item) => nr_Index_Nome == index_item)?.nativeElement

    // obgItem_Filho.scrollIntoView()

    this.searchString = this.nm_Inicial_Selecionada

    await this.Buscar_Ramais(true)


    // var bodyRect = this.variavelpailista.nativeElement.getBoundingClientRect(),
    // elemRect = item_filho.getBoundingClientRect(),
    // offset   = elemRect.top - bodyRect.top;
    // this.scroll.first.scrolar(offset)
  }

  //index_2 está pegando o index da incial que estou agora 

  //if index for divisível por 4 ou index se a distancia enrte os index for >6, scrollar, se for ==2 não scrollar

  //this.scroll.last.scrolar(scroll)

  //inicial selecionada é maior g? ent começa a scrolar

  //qual a estrategia pra chegar no pixel da letra m pelo index
}

  // let div = document.querySelector('div');
  // var pos = $(div).position().top;
  // var alturaTela = window.innerHeight
  // $(document).scroll(function () {
  //     var posicaoScroll = $(document).scrollTop();
  //     this.ativar = pos < posicaoScroll + (alturaTela/2);


  // });


// Nomes - nm_Beneficiario
// Boolean - b_Mostrar_Modal
// Numero - nr_CNPJ
// Objeto - objAgluamCoisa
// Lista/array - objArrayAlgumaCoisa / objLstAlgumaCoisa
// Funcao - Selecionar_Beneficiario()
// Descricao - ds_Produto
// css - div-letra




