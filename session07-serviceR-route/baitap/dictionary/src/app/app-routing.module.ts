import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DictionayPageComponent} from './dictionay-page/dictionay-page.component';
import {DictionarydetailComponent} from './dictionarydetail/dictionarydetail.component';



const routes: Routes = [
  {
    path: 'dictionary',
    component: DictionayPageComponent
  },
  {
    path: 'dictionary/detail/:id',
    component: DictionarydetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
