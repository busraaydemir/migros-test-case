import { Component, OnInit, ViewChild } from '@angular/core';

import { MatSidenav, MatSidenavContainer } from '@angular/material/sidenav';
import { LayoutService } from '../services/layout.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  sidenavCollapsed$ = this.layoutService.sidenavCollapsed$;

  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav | undefined;
  @ViewChild(MatSidenavContainer, { static: true }) sidenavContainer: MatSidenavContainer | undefined;

  constructor(
    private layoutService: LayoutService
  ) { }

  ngOnInit(): void {
    this.layoutService.sidenavOpen$.pipe(
      // untilDestroyed(this)
    ).subscribe(open => open ? this.sidenav?.open() : this.sidenav?.close());
  }

}
