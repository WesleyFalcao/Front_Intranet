import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ScrollDirective } from 'src/app/directives/scroll/scroll.directive';
import { RamaisService } from './listagem.service';


@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss'],
})
export class ListagemComponent implements OnInit {


  objArrayIniciais = [

    { inicial: "A" }, { inicial: "B" }, { inicial: "C" }, { inicial: "D" }, { inicial: "E" }, { inicial: "F" }, { inicial: "G" }, { inicial: "H" }, { inicial: "I" },
    { inicial: "J" }, { inicial: "K" }, { inicial: "L" }, { inicial: "M" }, { inicial: "N" }, { inicial: "O" }, { inicial: "P" }, { inicial: "Q" }, { inicial: "R" },
    { inicial: "S" }, { inicial: "T" }, { inicial: "U" }, { inicial: "V" }, { inicial: "W" }, { inicial: "X" }, { inicial: "Y" }, { inicial: "Z" },

  ]

  objArrayRamais = []

  objArrayTitulos = [
    { nm_titulo: "Nome", nm_Classe: "pr-20 lg:w-4/12 overflow-hidden overflow-ellipsis" },
    { nm_titulo: "Setor", nm_Classe: "pr-28 lg:w-3/12 xl:pr-40 overflow-hidden overflow-ellipsis" },
    { nm_titulo: "Ramal(s)", nm_Classe: "pr-6 lg:w-2/12 xl:pr-24 overflow-hidden overflow-ellipsis" },
    { nm_titulo: "Email", nm_Classe: "pr-6 lg:w-3/12 overflow-hidden overflow-ellipsis" }
  ]

  @ViewChildren(ScrollDirective)
  scroll: QueryList<ScrollDirective>;


  @ViewChildren('variavelLocal') objArrayItemLista: QueryList<ElementRef>
  @ViewChild('variavelpailista') objVariavelpailista: ElementRef
  @ViewChildren('letras') objArrayLetras: QueryList<ElementRef>

  b_Mostrar_Modal: boolean = false
  b_Text_Row_Lg: boolean = false
  objInicialSelecionada: string = "A"
  Inicial: string
  nr_Ultimo_Item: number = 0
  nm_Search: string

  // @ViewChild Variavel_Ligacao : HTMLElement

  constructor(  
  private ramaisService : RamaisService) {   
  } 

  async ngOnInit(){

    await this.Buscar_Ramais()

    if (window.innerWidth > 1280) {
      
      this.objArrayRamais.forEach(a => a.open = true)
      this.b_Mostrar_Modal = true
      // this.b_Text_Row_Lg = true
    }
      
  }

  expandir(documento: any) {
    if (window.innerWidth < 1280) {
      documento.open = !documento.open

      // this.scroll.first.reset()
    }
  }

  Mostrar_Modal() {
    this.b_Mostrar_Modal = true
  }

  Scrolar_aside(scroll: number) {

    
    const nr_Pixel =  scroll + this.objArrayItemLista.first.nativeElement.offsetTop

    let nr_Index = 0

    this.objArrayItemLista.find((i,index) => {
      if (i.nativeElement.offsetTop >= nr_Pixel)
      {
        nr_Index = index
        return true
      }
      return false
    }) 

    this.objInicialSelecionada = this.objArrayRamais[nr_Index].inicial

    

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

  async Buscar_Ramais() {
    console.log(this.nm_Search)
    this.objArrayRamais = await this.ramaisService.Get_Ramais()
    
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

  Clickar_Aside(objInicial: any, nr_Index: number) {

    this.objInicialSelecionada = objInicial.inicial

    this.nr_Ultimo_Item = nr_Index

    const nr_Index_Nome = this.objArrayRamais.findIndex(i => i.inicial == objInicial.inicial)

    const obgItem_Filho = this.objArrayItemLista.find((item_list, index_item) => nr_Index_Nome == index_item)?.nativeElement

    obgItem_Filho.scrollIntoView()

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





