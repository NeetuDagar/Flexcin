import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'filter',
  // pure:false
})
@Injectable({
  providedIn: 'root',
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchTerm:any): any {
    if(value.length===0){
      return value;
    }
    return value.filter(function(search){
      return search.name.toLowerCase().indexOf(searchTerm.toLowerCase())> -1
    })
  }

}
