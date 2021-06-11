import {Injectable} from '@angular/core';
import {Iword} from '../iword';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  public list: Iword[] = [
    {
      id: 1,
      word: 'hello',
      mean: 'xin chao'
    },
    {
      id: 2,
      word: 'goodbye',
      mean: 'tam biet'
    },
    {
      id: 3,
      word: 'mussic',
      mean: 'am nhac'
    },
    {
      id: 4,
      word: 'Soccer',
      mean: 'bong da'
    }
  ];

  constructor() {
  }

  getDetailById(id: number) {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].id === id) {
        console.log(this.list[i]);
        return this.list[i];
      }
    }
    return null;
  }
}
