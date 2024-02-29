import { Component, Signal, WritableSignal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ListProviderService } from './services/data-provider/list-provider.service';
import { IProductItem } from './models';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatToolbarModule,MatCardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  productList:WritableSignal<IProductItem[]>=signal([]);

  constructor(private listDataProvider:ListProviderService) {
    this.listDataProvider.getProducts().subscribe((data)=>{
      this.productList.set(data.products);
    });
  }
}
