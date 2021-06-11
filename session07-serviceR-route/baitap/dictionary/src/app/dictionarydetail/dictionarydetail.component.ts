import {Component, OnInit} from '@angular/core';
import {DictionaryService} from '../service/dictionary.service';
import {Iword} from '../iword';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-dictionarydetail',
  templateUrl: './dictionarydetail.component.html',
  styleUrls: ['./dictionarydetail.component.css']
})
export class DictionarydetailComponent implements OnInit {
  public detailWord: Iword;

  constructor(private  dictionaryService: DictionaryService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params.id;
    this.detailWord = this.dictionaryService.getDetailById(Number(id))
  }

}
