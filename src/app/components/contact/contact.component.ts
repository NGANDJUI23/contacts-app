import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  @Input() nom!: string;
  @Input() numero!: string;
  @Input() adresse!: string;
  @Input() etat: string = "true";
  @Input() page!: string;
  @Input() id!: string;
  @Output() viewDetails = new EventEmitter<string>();

  onDetails() {
    this.viewDetails.emit(this.id);
  }
  constructor() { }
  }
