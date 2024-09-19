import { Component, inject } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { ContactService } from '../../../services_contact/contact.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-cool-contacts',
  standalone: true,
  imports: [ContactComponent, FormsModule, RouterLink],
  templateUrl: './cool-contacts.component.html',
  styleUrl: './cool-contacts.component.scss'
})
export class CoolContactsComponent {
  service_contact = inject(ContactService);
  list = this.service_contact.contact_salaire_superieur_2000$();
  constructor(private router: Router) { }
  filteredContact = [...this.list];
  filterText: string = '';

  filter_1() {
    this.filteredContact = this.list.filter(contact =>
      contact["eyeColor"].toLowerCase().includes(this.filterText.toLowerCase())
    );
  }
  filter_2() {
    this.filteredContact = this.list.filter(contact =>
      contact["favoriteFruit"].toLowerCase().includes(this.filterText.toLowerCase())
    );
  }
  navigateToDetails(id: string) {
    this.router.navigate(['/details-contact', id]);
  }

  trackById(index: number, contact: any): string {
    return contact._id; // Utilisez _id pour suivre les éléments
  }

}
