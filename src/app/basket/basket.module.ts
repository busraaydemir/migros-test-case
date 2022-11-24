import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { BasketComponent } from './basket.component';
import { CommonModule } from '@angular/common';
import { BasketRoutingModule } from './basket-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
    declarations: [
        BasketComponent
    ],
    imports: [
        CommonModule,
        BasketRoutingModule,
        MatSidenavModule,
        MatIconModule,
        MatButtonModule,
        IconModule,
        MatProgressSpinnerModule
    ]
})
export class BasketModule { }
