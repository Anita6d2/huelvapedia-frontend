import { Component, computed, effect, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStatus } from './auth/interfaces';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  private authService = inject(AuthService);
  private router = inject(Router);

  public finishedAuthCheck = computed<boolean>(() => {
    if(this.authService.authStatus() === AuthStatus.cheking){
      return false;
    }

    return true;
  });

  public authStatusChangedEffect = effect(() => {

    switch(this.authService.authStatus()){

      case AuthStatus.cheking:
        return;
      case AuthStatus.authenticated:
        this.router.navigateByUrl('/dashboard');
        return;
      case AuthStatus.notAuthenticated:
        this.router.navigateByUrl('/auth/login');
    }

  });
}
