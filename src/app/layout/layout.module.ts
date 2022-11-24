import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { IconModule } from '@visurel/iconify-angular';
import { RouterModule } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';


@NgModule({
    declarations: [
        MainLayoutComponent,
        SidenavComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        MatSidenavModule,
        MatIconModule,
        IconModule,
        RouterModule,
        MatRippleModule
    ]

})
export class LayoutModule { }
