import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  isActive: boolean = false;
  isSubMenuActive: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    if (!this.isSubMenuActive) return; // Si el submenú no está activo, no hacemos nada
    const target = event.target as HTMLElement;
    const submenu = document.querySelector('.header__asubmenu');
    if (!submenu?.contains(target)) {
      this.isSubMenuActive = false;
    }
  }
  setActive() {
    if (this.isSubMenuActive) {
      this.isSubMenuActive = false;
      return;
    }
    this.isActive = !this.isActive;
  }
  toggleSubMenu() {
    this.isSubMenuActive = !this.isSubMenuActive;
  }
}
