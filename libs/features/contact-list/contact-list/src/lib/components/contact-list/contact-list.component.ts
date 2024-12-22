import { Component , OnInit } from '@angular/core';
import { Contact } from 'libs/models/contact.model';
import { ContactsService } from 'libs/state/services/contact.service';

@Component({
  selector: 'lib-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css',
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];
  isGridView = true;
  errorMessage: string[] | null = null;

  constructor(private contactsService: ContactsService) {}

  ngOnInit() {
    this.contactsService.getContacts().subscribe({
      next: (data) => {
        console.log('Fetched contacts:', data); // Debug log
        this.contacts = data;
      },
      error: (err) => {
        console.error('Error fetching contacts:', err);
        this.errorMessage = ['Failed to load contacts. Please try again later.'];
      },
    });
  }  

  toggleView() {
    this.isGridView = !this.isGridView;
  }
}
