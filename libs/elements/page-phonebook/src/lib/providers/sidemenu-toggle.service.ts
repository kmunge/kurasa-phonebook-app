import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidemenuToggleService {
  private _expand = new BehaviorSubject<boolean>(false);  // Default to 'false' (closed)
  private _menuStatus$: Observable<boolean> = this._expand.asObservable();

  // Toggle the expansion state
  toggleExpand(value: boolean): void {
    this._expand.next(value);
  }

  // Get the current menu status as an observable
  getMenuStatus(): Observable<boolean> {
    return this._menuStatus$;
  }

  // Return the current value of the menu's expansion state
  isExpanded(): boolean {
    return this._expand.value;
  }
}