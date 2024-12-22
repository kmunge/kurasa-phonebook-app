import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from 'libs/state/services/contact.service';
import { Contact } from 'libs/models/contact.model';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.css'],
})
export class AddContactsComponent {
  contactForm: FormGroup;
  isLoading = false; // Track loading state
  successMessage: string | null = null; // Success message
  selectedImage: File | null = null; // Track the uploaded image file
  imageError: string | null = null; // Track image validation errors

  constructor(
    private fb: FormBuilder,
    private contactsService: ContactsService
  ) {
    this.contactForm = this.createContactForm();
  }

  private createContactForm(): FormGroup {
    return this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.minLength(10)]],
      imageUrl: [''], // Optional field for storing the image URL
      address: ['', Validators.required],
      group: ['Family'],
    });
  }

  handleImageUpload(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files[0]) {
      const file = fileInput.files[0];

      // Validate image type
      if (!file.type.startsWith('image/')) {
        this.imageError = 'Please upload a valid image file.';
        this.selectedImage = null; // Reset image preview
        return;
      }

      // Validate file size (e.g., 5MB limit)
      const maxSize = 5 * 1024 * 1024; // 5MB in bytes
      if (file.size > maxSize) {
        this.imageError = 'File size exceeds the 5MB limit.';
        this.selectedImage = null; // Reset image preview
        return;
      }

      // If validation passes, set the selected image
      this.imageError = null;
      this.selectedImage = file;
    }
  }

  addContact() {
    if (this.contactForm.valid) {
      const newContact: Contact = this.buildContactFromForm();
      this.isLoading = true; // Set loading state
      if (this.selectedImage) {
        this.uploadImage(this.selectedImage, newContact);
      } else {
        this.saveContact(newContact);
      }
    }
  }

  private buildContactFromForm(): Contact {
    return {
      ...this.contactForm.value,
      id: '', // Firestore will overwrite this
      isFavorite: false,
      isDeleted: false,
    };
  }

  private uploadImage(file: File, contact: Contact) {
    // Simulating image upload (replace with your actual upload logic)
    const reader = new FileReader();
    reader.onload = () => {
      contact.imageUrl = reader.result as string; // Store the image as a Base64 URL
      this.saveContact(contact);
    };
    reader.readAsDataURL(file);
  }

  private saveContact(contact: Contact) {
    this.contactsService
      .addContact(contact)
      .then(() => {
        this.contactForm.reset(); // Reset form fields
        this.selectedImage = null; // Reset image file
        this.imageError = null; // Clear image error
        this.showSuccessMessage('Contact added successfully!');
      })
      .catch((err) => console.error('Error adding contact:', err))
      .finally(() => (this.isLoading = false)); // Reset loading state
  }

  private showSuccessMessage(message: string) {
    this.successMessage = message;
    setTimeout(() => {
      this.successMessage = null;
    }, 3000); // Hide message after 3 seconds
  }

  ngOnDestroy() {
    if (this.selectedImage) {
      URL.revokeObjectURL(this.selectedImage as any);
    }
  }
}