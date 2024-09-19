import { provideRouter, Routes, withComponentInputBinding } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ContactviewComponent } from './contactview/contactview.component';
import { DetailsContactComponent } from './components/details-contact/details-contact.component';


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
  },
  {
    path: 'contact/detail-contact/:id',
    component: DetailsContactComponent
  }
];


