import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { BasketComponent } from './basket.component';
import { CommonModule } from '@angular/common';
import { BasketRoutingModule } from './basket-routing.module';

@NgModule({
    declarations: [
        BasketComponent
    ],
    imports: [
        CommonModule,
        BasketRoutingModule,
        MatSidenavModule,
        MatIconModule,
        IconModule
    ]
})
export class BasketModule { }
