import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs/operators';

@Pipe({
  name: 'firstLetterName'
})
export class FirstLetterNamePipe implements PipeTransform {

  transform(value: string ): any {
    if (value){
      return value.substring(0,1)

    }else{
      return value
    }
  }
  capitalize(value: string) {
    return value.substr(0, 1).toUpperCase()
  }
}
