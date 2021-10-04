import { Directive, Output, ElementRef, HostListener, EventEmitter } from "@angular/core";

@Directive({
    selector: '[scroll]'
})
export class ScrollDirective {
    @Output() setScroll = new EventEmitter();

    private scroll: number = 0;
    private time_scroll = new Date()
    private ativar_scroll = true

    constructor(private el: ElementRef) { }

    @HostListener('scroll', ['$event'])
    scrollIt(event: any) {

        this.scroll = event.srcElement.scrollTop

        // console.log((new Date().getTime() - this.time_scroll.getTime()))

        if ((new Date().getTime() - this.time_scroll.getTime()) > 300 && this.ativar_scroll) {
            this.setScroll.emit(this.scroll)
            this.time_scroll = new Date()
        }
    }

    // reset() { this.el.nativeElement.scrollTop = 0 }

    scrolar(scrollTop: number) {
        this.ativar_scroll = false
        this.el.nativeElement.scrollTop = scrollTop
        setTimeout(() => this.ativar_scroll = true, 100)
    }


    //ANOTAÇÕES: 

    // A função getTime() transforma a data em Milessegundos

    // linha 20 dentro do IF, está fazendo uma subtração e comparando se é maior que 300 milessegundos 

    //newDate() pega a data de agora nesse contexto atual



}