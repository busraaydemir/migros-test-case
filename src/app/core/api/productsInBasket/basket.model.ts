import { Product } from "../product/product.model";

export interface Basket {
    id: string;
    products: Product[];
    productsCount: number;
    isLoading: boolean;
}