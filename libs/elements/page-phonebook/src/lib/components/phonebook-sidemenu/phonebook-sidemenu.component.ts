import { Component, OnInit, Output, HostListener } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { PhonebookPages } from '../../models/phonebook-pages.enum';
import { Observable } from 'rxjs';
import { SidemenuToggleService } from '../../providers/sidemenu-toggle.service';

@Component({
  selector: 'lib-phonebook-sidemenu',
  templateUrl: './phonebook-sidemenu.component.html',
  styleUrl: './phonebook-sidemenu.component.css',
})
export class PhonebookSidemenuComponent implements OnInit {
  @Output() navigatePage = new EventEmitter<PhonebookPages>();
  @Output() menuToggle = new EventEmitter<boolean>();
  isMenuOpen$!: Observable<boolean>;

  pages = PhonebookPages;

  constructor(
    private sideNav: SidemenuToggleService,
) { }

  ngOnInit(): void {
    this.isMenuOpen$ = this.sideNav.getMenuStatus();
  }

  close(): void {
    this.sideNav.toggleExpand(false);  // Closes the menu
    this.menuToggle.emit(false);
  }

  navigateTo(page: PhonebookPages): void {
    this.navigatePage.emit(page);
    this.close();
  }

  toggleMenu(): void {
    const isOpen = this.sideNav.isExpanded();
    this.sideNav.toggleExpand(!isOpen);  // Toggle between open/closed
  }

  // Prevent side menu activation when interacting with input fields
  @HostListener('document:focusin', ['$event'])
  onFocus(event: FocusEvent) {
    const target = event.target as HTMLElement;
    // Check if the focused element is an input, textarea, or select
    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT') {
      // If focusing an input element, do not toggle the side menu
      this.sideNav.toggleExpand(false);
    }
  }
}

