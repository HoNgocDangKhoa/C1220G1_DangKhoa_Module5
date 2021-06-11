import {Component, OnInit} from '@angular/core';
import {Iword} from '../iword';
import {DictionaryService} from '../service/dictionary.service';

@Component({
  selector: 'app-dictionay-page',
  templateUrl: './dictionay-page.component.html',
  styleUrls: ['./dictionay-page.component.css']
})
export class DictionayPageComponent implements OnInit {
  list: Iword[] = [];

  constructor(private dictionaryService: DictionaryService) {
  }

  ngOnInit(): void {
    this.list = this.dictionaryService.list;
  }


}
