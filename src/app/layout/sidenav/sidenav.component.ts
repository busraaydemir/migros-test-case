import { Component, Input, OnDestroy } from '@angular/core';

import icRadioButtonChecked from '@iconify/icons-ic/twotone-radio-button-checked';
import icRadioButtonUnchecked from '@iconify/icons-ic/twotone-radio-button-unchecked';
import icHomepage from '@iconify/icons-ic/outline-home';
import icBasket from '@iconify/icons-mdi/basket-outline';

import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { GetBasket, getProductionCount } from 'src/app/core/store/basket';
import { LayoutService } from '../services/layout.service';
import { SidenavItem } from './sidenav-item.interface';

@UntilDestroy()
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnDestroy {

  @Input() collapsed: boolean = false;
  collapsedOpen$ = this.layoutService.sidenavCollapsedOpen$;

  items: SidenavItem[] = [];

  icRadioButtonChecked = icRadioButtonChecked;
  icRadioButtonUnchecked = icRadioButtonUnchecked;
  icHomepage = icHomepage;
  icBasket = icBasket;

  constructor(
    private layoutService: LayoutService,
    private store: Store
  ) {
    this.store.dispatch(new GetBasket());
    this.store.select(getProductionCount).pipe(untilDestroyed(this)).subscribe(count => {
      this.items = [
        {
          label: 'Ürün Listesi',
          route: '/',
          icon: icHomepage
        },
        {
          label: 'Sepetim',
          route: '/my-basket',
          icon: icBasket,
          badge: {
            value: count ? count.toString() : '',
            background: 'red',
            color: 'white'
          }
        }
      ];
    });
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

  ngOnDestroy(): void { }
}
