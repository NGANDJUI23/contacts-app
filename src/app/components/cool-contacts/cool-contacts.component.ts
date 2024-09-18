import { Component, inject } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { ContactService } from '../../../services_contact/contact.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-cool-contacts',
  standalone: true,
  imports: [ContactComponent, FormsModule],
  templateUrl: './cool-contacts.component.html',
  styleUrl: './cool-contacts.component.scss'
})
export class CoolContactsComponent {
  service_contact = inject(ContactService);
  list = this.service_contact.contact_salaire_superieur_2000$();
  constructor() { }
  filteredContact = [...this.list];
  filterText: string = '';

  async filter_1() {
    this.filteredContact = this.list.filter(contact =>
      contact["eyeColor"].toLowerCase().includes(this.filterText.toLowerCase())
    );
  }
  async filter_2() {
    this.filteredContact = this.list.filter(contact =>
      contact["favoriteFruit"].toLowerCase().includes(this.filterText.toLowerCase())
    );
  }
}
