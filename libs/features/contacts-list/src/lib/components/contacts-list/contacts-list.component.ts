import { Component, OnInit } from '@angular/core';
import { Contact } from 'add-contacts';
import { ContactsService } from 'add-contacts';

@Component({
  selector: 'lib-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrl: './contacts-list.component.css',
})
export class ContactsListComponent implements OnInit {

  contacts: Contact[] = [];
    filteredContacts: Contact[] = [];
    isSearchVisible = false;
    searchTerm = '';
    isGridView = true;
    errorMessage: string | null = null;
    expandedContactId: string | null = null;
    editingContactId: string | null = null;
    popupMessage: string | null = null;
    isDeleteConfirmationVisible = false;
    contactToDeleteId: string | null = null;
  
    constructor(private contactsService: ContactsService) {}
  
    ngOnInit() {
      this.contactsService.getContacts().subscribe({
        next: (data) => {
          this.contacts = data;
          this.filteredContacts = data;
        },
        error: (err) => {
          this.errorMessage = 'Failed to fetch contacts. Please try again later.';
          console.error('Error fetching contacts:', err);
        },
      });
    }
  
    toggleView() {
      this.isGridView = !this.isGridView;
    }
  
    toggleContactDetails(contactId: string): void {
      if (this.expandedContactId === contactId) {
        this.expandedContactId = null; // Collapse the expanded details
      } else {
        this.expandedContactId = contactId; // Expand the clicked contact
      }
    }
    
    toggleSearch() {
      this.isSearchVisible = !this.isSearchVisible;
  
      if (!this.isSearchVisible) {
        this.searchTerm = ''; // Clear search when closing input
        this.filteredContacts = this.contacts;
      }
    }
  
    filterContacts() {
      this.filteredContacts = this.contacts.filter((contact) =>
        `${contact.firstName} ${contact.lastName} ${contact.email} ${contact.phoneNumber}`
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase())
      );
    }  
  
    editContact(contactId: string) {
      this.editingContactId = contactId;
    }
  
    cancelEdit() {
      this.editingContactId = null;
      // Optionally, reload the contacts if changes were not saved
    }
  
    updateContact(contactId: string) {
      const contact = this.contacts.find((c) => c.id === contactId);
      if (contact) {
        this.contactsService.updateContact(contact).subscribe({
          next: () => {
            this.editingContactId = null;
            this.popupMessage = 'Contact updated successfully';
            setTimeout(() => (this.popupMessage = null), 3000); // Hide after 3 seconds
          },
          error: (err) => {
            console.error('Error updating contact:', err);
            this.popupMessage = 'Failed to update contact';
            setTimeout(() => (this.popupMessage = null), 3000); // Hide after 3 seconds
          },
        });
      }
    }
  
  // Trigger delete confirmation popup
  deleteContact(contactId: string) {
    this.contactToDeleteId = contactId;
    this.isDeleteConfirmationVisible = true;
  }
  
  // Confirm deletion
  confirmDelete() {
    const contact = this.contacts.find((c) => c.id === this.contactToDeleteId);
    if (contact) {
      contact.isDeleted = true;
      this.contactsService.updateContact(contact).subscribe({
        next: () => {
          this.filteredContacts = this.filteredContacts.filter((c) => c.id !== this.contactToDeleteId);
          this.popupMessage = 'Contact deleted successfully';
          setTimeout(() => (this.popupMessage = null), 3000);
          this.isDeleteConfirmationVisible = false; // Close the confirmation popup
        },
        error: (err) => {
          console.error('Error deleting contact:', err);
          this.popupMessage = 'Failed to delete contact';
          setTimeout(() => (this.popupMessage = null), 3000);
          this.isDeleteConfirmationVisible = false; // Close the confirmation popup
        },
      });
    }
  }
  
  // Cancel deletion
  cancelDelete() {
    this.isDeleteConfirmationVisible = false; // Close the confirmation popup
    this.contactToDeleteId = null;
  }  
}
