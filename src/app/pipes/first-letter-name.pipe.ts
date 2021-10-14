import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs/operators';

@Pipe({
  name: 'firstLetterName'
})
export class FirstLetterNamePipe implements PipeTransform {

  transform(value: any[], args: string ): any {
    if (args){
      let arrayfilter = value.filter(a => this.capitalize(a.nm_Colaborador) == args)
      return arrayfilter

    }else{
      return value
    }
    
  }

  capitalize(value: string) {
    return value.substr(0, 1).toUpperCase()
  }
}
