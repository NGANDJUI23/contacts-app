import { Component, inject, Input } from '@angular/core';
import { ContactService } from '../../../services_contact/contact.service';
@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  @Input() nom !: string;
  @Input() age !: string;
  constructor(){}
  service_contact = inject(ContactService);
  list = this.service_contact.contact_pomme_fruit_favoris();
}
