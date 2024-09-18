import { Component } from '@angular/core';
import { NavbarComponent } from '../app/components/navbar/navbar.component';
import { CoolContactsComponent } from '../app/components/cool-contacts/cool-contacts.component';
import { BannerComponent } from '../app/components/banner/banner.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, CoolContactsComponent, BannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
