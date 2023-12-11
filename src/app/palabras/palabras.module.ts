import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PalabraPageComponent } from './pages/palabra-page/palabra-page.component';
import { PalabrasRoutingModule } from './palabras-routing.module';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

@NgModule({
  declarations: [
    PalabraPageComponent,
    ListPageComponent,
    LayoutPageComponent,
    NewPageComponent,
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PalabrasRoutingModule
  ],
  exports: [

  ]
})
export class PalabrasModule { }
