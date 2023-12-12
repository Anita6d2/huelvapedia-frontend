import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';
import { isNotAuthenticatedGuard } from './auth/guards/is-not-authenticated.guard';
import { isAuthenticatedGuard } from './auth/guards/is-authenticated.guard';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { LegalWarningPageComponent } from './shared/pages/legal-warning-page/legal-warning.component';
import { PrivacyPageComponent } from './shared/pages/privacy-page/privacy-page.component';
import { CookiesPageComponent } from './shared/pages/cookies-page/cookies-page.component';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';

const routes: Routes = [
  {
    path: '', //Homepage path
    component: HomePageComponent,
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent
  },
  {
    path: 'legal',
    component: LegalWarningPageComponent
  },
  {
    path: 'privacy',
    component: PrivacyPageComponent
  },
  {
    path: 'cookies',
    component: CookiesPageComponent
  },
  {
    path: 'admin',
    //canActivate: [isNotAuthenticatedGuard],
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule),
  },{
    path: 'palabras',
    loadChildren: () => import('./palabras/palabras.module').then(m => m.PalabrasModule),
  },
  {
    path: 'dashboard',
    canActivate: [isAuthenticatedGuard],
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardModule),
  },
  {
    path: '404',
    component: Error404PageComponent
  },
  {
    path: '**', //cualquier otra ruta será redireccionada a homepage
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
