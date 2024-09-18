import { Component, inject } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { ContactService } from '../../../services_contact/contact.service';
@Component({
  selector: 'app-cool-contacts',
  standalone: true,
  imports: [ContactComponent],
  templateUrl: './cool-contacts.component.html',
  styleUrl: './cool-contacts.component.scss'
})
export class CoolContactsComponent {
  service_contact = inject(ContactService)
  constructor() { }
}
