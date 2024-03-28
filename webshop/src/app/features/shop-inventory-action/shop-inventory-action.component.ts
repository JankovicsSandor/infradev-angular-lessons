import { Component, WritableSignal, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'shop-inventory-action',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './shop-inventory-action.component.html',
  styleUrl: './shop-inventory-action.component.scss'
})
export class ShopInventoryActionComponent {

  counter: WritableSignal<number> = signal(1);

  increaseNumber() {
    this.counter.set(this.counter() + 1);
  }

  decreaseNumber() {
    let currentNumber = this.counter();
    if (currentNumber != 1) this.counter.set(this.counter() - 1);
  }
}
