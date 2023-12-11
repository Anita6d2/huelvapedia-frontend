import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PalabraPageComponent } from './pages/palabra-page/palabra-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';

const routes: Routes = [

  {
    path:'',
    component: LayoutPageComponent,
    children:[
      { path: 'add', component: NewPageComponent},
      { path: 'list', component: ListPageComponent },
      { path: 'search', component: SearchPageComponent},
      { path: 'edit/:id', component: NewPageComponent},
      { path: ':id', component: PalabraPageComponent},
      { path: '**', redirectTo: 'list' },
    ]
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],

})
export class PalabrasRoutingModule { }
