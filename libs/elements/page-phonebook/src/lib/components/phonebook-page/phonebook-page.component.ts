import { Component, OnInit, OnDestroy, Input , ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { SidemenuToggleService } from '../../providers/sidemenu-toggle.service';
import { SubSink } from 'subsink';
import { Observable, BehaviorSubject } from 'rxjs';
import { PhonebookPages } from '../../models/phonebook-pages.enum';
import { ElementRef } from '@angular/core';
import { PhonebookSidemenuComponent } from "../phonebook-sidemenu/phonebook-sidemenu.component";

@Component({
  selector: 'lib-app-page',
  templateUrl: './phonebook-page.component.html',
  styleUrl: './phonebook-page.component.css',
})
export class PhonebookPageComponent implements OnInit, OnDestroy {
  @Input() loading = false;
  @Input() backButton = false;
  @Input() noside = false;
  toggleSideNav$: BehaviorSubject<boolean> = new BehaviorSubject(false);


  @ViewChild('page') page!: ElementRef;

  opened = true;
  mode: 'over' | 'side' = 'over';
  title = "Contacts";
  isMenuOpen = false; 

  pages = PhonebookPages;
  isSelected$: Observable<PhonebookPages> = new Observable<PhonebookPages>();
  subSink = new SubSink();

  constructor(
              private sideMenu: SidemenuToggleService ,
              private sidenavService: SidemenuToggleService,
               private router: Router) {
    // this.opened = true;
  }

  ngOnInit(): void {
    this.initMenuStatus();
    this.initializePage();
    this.initInitialPage();
    this.sidenavService.toggleExpand(this.isMenuOpen);  // Toggle the menu
  }

  initMenuStatus(): void {
    // Sync the state with the service
    this.sideMenu.getMenuStatus().subscribe((status) => {
      this.toggleSideNav$.next(status);
    });
  }

  initializePage(){
    // this.isSelected$ = this.mobileRepPages.getActivePage();
  }

  navigateTo(page: PhonebookPages): void {
    this.router.navigate([page]);

    switch (page) {
      case PhonebookPages.CONTACT_LIST:
        this.title = 'Contact List';
        break;
      case PhonebookPages.ADD_CONTACT:
        this.title = 'Add Contact';
        break;
      default:
        this.title = 'Contacts';
        break;
    }
    // this.mobileRepPages.showPage(page);
  }

  initInitialPage(){
    this.router.navigate([PhonebookPages.CONTACT_LIST]);
  }

  onMenuToggle(isOpen: boolean): void {
    this.toggleSideNav$.next(isOpen); // Update the drawer state
    this.sideMenu.toggleExpand(isOpen); // Notify the service
  }


  closeDrawer(): void {
    if (this.mode === 'over') {
      this.toggleSideNav$.next(false); // Close the drawer
      this.sideMenu.toggleExpand(false); // Notify the service
    }
  }

  switchMode(): void {
    this.mode = this.mode === 'over' ? 'side' : 'over';
    this.toggleSideNav$.next(false); // Close the drawer when switching modes
    this.sideMenu.toggleExpand(false); // Notify the service
  }

  handleKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.closeDrawer();
    }
  }
  
  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }
}
