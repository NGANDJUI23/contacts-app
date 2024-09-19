import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { contact_list } from '../../models/data';
import { Contact } from '../../interfaces/contact';

@Component({
  selector: 'app-details-contact',
  standalone: true,
  imports: [],
  templateUrl: './details-contact.component.html',
  styleUrl: './details-contact.component.scss'
})
export class DetailsContactComponent implements OnInit {
  contact?: Contact; // Utilisez "?" pour indiquer que contact peut être indéfini

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
}
