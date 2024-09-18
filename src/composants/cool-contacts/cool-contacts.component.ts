import { Component } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-cool-contacts',
  standalone: true,
  imports: [ContactComponent],
  templateUrl: './cool-contacts.component.html',
  styleUrl: './cool-contacts.component.scss'
})
export class CoolContactsComponent {
  
}
