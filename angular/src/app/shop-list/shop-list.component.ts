import { Component } from '@angular/core';
import { AddItemComponent } from "./add-item/add-item.component";
import { ShowItemsComponent } from './show-items/show-items.component';

@Component({
  selector: 'app-shop-list',
  standalone: true,
  imports: [AddItemComponent, ShowItemsComponent],
  templateUrl: './shop-list.component.html',
  styleUrl: './shop-list.component.css'
})
export class ShopListComponent {

}
