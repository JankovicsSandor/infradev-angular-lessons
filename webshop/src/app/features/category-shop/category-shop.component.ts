import { Component, WritableSignal, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, switchMap, tap } from 'rxjs';
import { IProductItem } from '../../models';
import { ListProviderService } from '../../services/data-provider/list-provider.service';

@Component({
  selector: 'app-category-shop',
  standalone: true,
  imports: [],
  templateUrl: './category-shop.component.html',
  styleUrl: './category-shop.component.scss'
})
export class CategoryShopComponent {

  productList:WritableSignal<IProductItem[]>=signal([]);

  constructor(private activedRoute: ActivatedRoute,private listDataProvider:ListProviderService) {
    this.activedRoute.params.pipe(
      filter((params)=>params!=null && params['category']!=null),
      switchMap((params)=>this.listDataProvider.getProductsByCategory(params['category'])),
      tap((data)=>this.productList.set(data.products))
    ).subscribe((products)=>{
      console.log(products);
    })

  }
}
