import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HttpUtilService } from './http-util.service';


@Injectable()
export class AdminGuard implements CanActivate {

  constructor(
    private httpUtilService: HttpUtilService,
    private router: Router) {}

  canActivate(): boolean {
    if (this.httpUtilService.obterPerfil() === 'ROLE_ADMIN') {
      return true;
    }

    this.router.navigate(['/usuarios']);
    return false;
  }

}





