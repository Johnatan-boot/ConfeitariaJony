import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Login', url: '/folder/inbox', icon: 'log-in' },
    { title: 'Home', url: '/folder/outbox', icon: 'home' },
    { title: 'Perfil', url: '/folder/favorites', icon: 'people-circle' },
    { title: 'Cadastro', url: '/folder/archived', icon: 'add-circle' },
    { title: 'Products', url: '/folder/trash', icon: 'gift' },
    { title: 'cart', url: '/folder/spam', icon: 'cart' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
