import { Injectable } from '@angular/core';
import { contact_list } from '../app/models/data';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  list_contact = contact_list;
  constructor() { }
  contact_pomme_fruit_favoris() {
    return this.list_contact.filter(contact => contact.favoriteFruit === 'apple');
  }
  contact_filtrer_critere(criter: string) {
    return this.list_contact.filter(contact => contact.name.toLowerCase().includes(criter.toLowerCase()));
  }

  contact_salaire_superieur_2000$() {
    return this.list_contact.filter(contact => parseFloat(contact.balance.replace(',', '.')) > 2000);
  }
}
