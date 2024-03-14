import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'shop/:category', loadComponent: () => import('./features/category-shop/category-shop.component').then(mod => mod.CategoryShopComponent)},
];
