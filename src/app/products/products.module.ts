import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
    declarations: [
        ProductsComponent
    ],
    imports: [
        CommonModule,
        ProductRoutingModule
    ]
})
export class ProductsModule { }
