import { Component } from '@angular/core';
import { ShowItemsComponent } from './show-items/show-items.component';

@Component({
  selector: 'app-shop-list',
  standalone: true,
  imports: [ShowItemsComponent],
  templateUrl: './shop-list.component.html',
  styleUrl: './shop-list.component.css'
})
export class ShopListComponent {

}
