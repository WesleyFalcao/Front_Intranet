import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelcase'
})
export class CamelCasePipe implements PipeTransform {

  //value é o valor a ser passado e o args são os argumentos, que posso passar quantos quiser
  transform(value:string, ...args: any): any {
    if (value == null)
    {
      return ""
    }
    let values = value?.split(' ') 
    let result = ' ';
  
    for( let v of values ){
      result += this.capitalize(v) + ' ';
    }

    return result;
  }

  capitalize(value: string){
    return value?.substr(0,1).toUpperCase() +
    value?.substr(1).toLowerCase();
  }

  
}
