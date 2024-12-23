import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { HttpClient } from '@angular/common/http';
import { Contact } from 'libs/models/contact.model';
import { from, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private collectionName = 'contacts';
  constructor(private firestore: AngularFirestore, private http: HttpClient) {}

  addContact(contact: Contact): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore
      .collection(this.collectionName)
      .doc(id)
      .set({ ...contact, id, isDeleted: false, isFavorite: false });
  }

  getContacts(): Observable<Contact[]> {
    return this.firestore
      .collection<Contact>(this.collectionName, ref =>
        ref
          .where('isDeleted', '==', false) // Fetch only non-deleted contacts
          .orderBy('firstName', 'asc') // Sort alphabetically by firstName
      )
      .valueChanges();
  }  

  getContactById(id: string) {
    return this.firestore
      .collection<Contact>(this.collectionName)
      .doc(id)
      .valueChanges();
  }

  updateContact(contact: Contact): Observable<void> {
    return from(
      this.firestore
        .collection(this.collectionName)
        .doc(contact.id)
        .update({ ...contact })
    );
  }
  
  
}

