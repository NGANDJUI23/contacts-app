import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ContactviewComponent } from '../contactview/contactview.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactviewComponent
  }
];
