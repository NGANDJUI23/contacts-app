import { Component, inject } from '@angular/core';

import { Router } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from '../components/contact/contact.component';
import { ContactService } from '../../services_contact/contact.service';
@Component({
  selector: 'app-contactview',
  standalone: true,
  imports: [NavbarComponent, FormsModule, ContactComponent],
  templateUrl: './contactview.component.html',
  styleUrl: './contactview.component.scss'
})
export class ContactviewComponent {
  service_contact = inject(ContactService);
  list = this.service_contact.list_contact;
  constructor(private router: Router) { }

  navigateToDetails(id: string) {
    this.router.navigate(['/contact/detail-contact', id]);
  }
}
