import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'libs/models/contact.model';
import { ContactsService } from 'libs/state/services/contact.service';

@Component({
  selector: 'lib-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css'],
})
export class ContactDetailsComponent implements OnInit {
  contact: Contact | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactsService: ContactsService
  ) {}

  ngOnInit() {
    const contactId = this.route.snapshot.paramMap.get('id');
    if (contactId) {
      this.contactsService.getContactById(contactId).subscribe({
        next: (data) => (this.contact = data ?? null),
        error: (err) => console.error('Error fetching contact details:', err),
      });
    }
  }

  goBack() {
    window.history.back();
  }  
}
