import { Component, Input } from '@angular/core';

import icRadioButtonChecked from '@iconify/icons-ic/twotone-radio-button-checked';
import icRadioButtonUnchecked from '@iconify/icons-ic/twotone-radio-button-unchecked';
import { LayoutService } from '../services/layout.service';
import { SidenavItem } from './sidenav-item.interface';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  @Input() collapsed: boolean = false;

  collapsedOpen$ = this.layoutService.sidenavCollapsedOpen$;

  items: SidenavItem[] = [
    {
      label: 'Ürün Listesi',
      route: '/products'
    },
    {
      label: 'Sepetim',
      route: '/my-basket',
      badge: {
        value: '20',
        background: 'red',
        color: 'white'
      }
    }
  ];

  icRadioButtonChecked = icRadioButtonChecked;
  icRadioButtonUnchecked = icRadioButtonUnchecked;

  constructor(
    private layoutService: LayoutService
  ) {

  }

  onMouseEnter() {
    this.layoutService.collapseOpenSidenav();
  }

  onMouseLeave() {
    this.layoutService.collapseCloseSidenav();
  }

  toggleCollapse() {
    if (this.collapsed) {
      this.layoutService.expandSidenav();
      return;
    }

    this.layoutService.collapseSidenav();
  }
}
