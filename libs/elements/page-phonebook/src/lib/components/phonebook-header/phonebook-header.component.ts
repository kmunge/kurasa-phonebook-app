import { Component, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'lib-phonebook-header',
  templateUrl: './phonebook-header.component.html',
  styleUrl: './phonebook-header.component.css',
})
export class PhonebookHeaderComponent implements OnChanges {

  @Input() title!: string;
  @Output() menuToggle = new EventEmitter<boolean>();

  image = 'assets/svgs/hamburger-menu.svg';


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['title']) {
      console.log('Title changed:', changes['title'].currentValue);
    }
    console.log('Image path:', this.image); 
  }

  toggleMenu() {
    this.menuToggle.emit(true);  // Emits true to open the menu
  }

  handleKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      this.toggleMenu();
    }
  }
}
