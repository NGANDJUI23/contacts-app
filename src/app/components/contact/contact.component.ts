import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  @Input() nom!: string;
  @Input() numero!: string;
  @Input() adresse!: string;
  @Input() etat: string = "true";
}
