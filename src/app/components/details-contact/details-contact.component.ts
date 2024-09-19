import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { contact_list } from '../../models/data';
import { Contact } from '../../interfaces/contact';
import { Friend } from '../../interfaces/friend';

@Component({
  selector: 'app-details-contact',
  standalone: true,
  imports: [],
  templateUrl: './details-contact.component.html',
  styleUrl: './details-contact.component.scss'
})
export class DetailsContactComponent implements OnInit {
  contact?: Contact; // Utilisez "?" pour indiquer que contact peut être indéfini
  friend?: Friend; //
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getContactDetails(id);
  }

  getContactDetails(id: string | null) {

    if (id) {
      const foundContact = contact_list.find(contact => contact.index.toString() == id);
      if (foundContact) {
        this.contact = foundContact;
      } else {
        alert('Contact non trouvé');
      }
    }

  }
  function_return_tableau_key_valeur_contact() {
    if (this.contact) {
      return Object.entries(this.contact).map(([key, value]) => ({ key, value }));
    } else {
      return [];
    }
  }
  function_return_tableau_key_valeur_contact_friend() {
    if (this.contact) {
      return Object.entries(this.contact.friends).map(([key, value]) => ({ key, value }));
    } else {
      return [];
    }
  }

}
