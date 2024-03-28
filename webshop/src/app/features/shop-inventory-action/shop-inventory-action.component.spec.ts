import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopInventoryActionComponent } from './shop-inventory-action.component';

describe('ShopInventoryActionComponent', () => {
  let component: ShopInventoryActionComponent;
  let fixture: ComponentFixture<ShopInventoryActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopInventoryActionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopInventoryActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
