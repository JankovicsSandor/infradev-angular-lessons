import { Component, Signal, WritableSignal, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ListProviderService } from './services/data-provider/list-provider.service';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,MatToolbarModule,MatCardModule,MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

 categoryList:WritableSignal<string[]>=signal([]);

  constructor(private listDataProvider:ListProviderService) {
    this.listDataProvider.getProductCategories().pipe(
      tap(
        (data)=>this.categoryList.set(data)
        )
    ).subscribe();
  }
}
