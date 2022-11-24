import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@NgModule({
    declarations: [
        ProductsComponent
    ],
    imports: [
        CommonModule,
        ProductRoutingModule,
        HttpClientModule,
        MatButtonModule,
        MatProgressSpinnerModule
    ]
})
export class ProductsModule { }
