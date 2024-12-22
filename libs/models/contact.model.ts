export interface Contact {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    imageUrl?: string;
    address: string;
    isFavorite: boolean;
    group?: 'Family' | 'Friends' | 'Work';
    isDeleted: boolean;
  }
  