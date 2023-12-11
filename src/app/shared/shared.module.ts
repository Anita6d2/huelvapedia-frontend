import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LegalWarningPageComponent } from './pages/legal-warning-page/legal-warning.component';
import { PrivacyPageComponent } from './pages/privacy-page/privacy-page.component';
import { CookiesPageComponent } from './pages/cookies-page/cookies-page.component';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SearchBoxComponent,
    HomePageComponent,
    LegalWarningPageComponent,
    PrivacyPageComponent,
    CookiesPageComponent,
    Error404PageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    SearchBoxComponent,
    Error404PageComponent
  ]
})
export class SharedModule { }
