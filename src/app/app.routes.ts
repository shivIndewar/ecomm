import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { MyOrderComponent } from './my-order/my-order.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'home',
       component : ProductsComponent
    },
    {
        path:'createOrder',
       component : CreateOrderComponent
    },
    {
        path:'myOrders',
       component : MyOrderComponent
    }

];
