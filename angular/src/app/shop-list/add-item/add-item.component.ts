import { Component } from '@angular/core';
import { Item } from '../Item';
import { ShowItemsComponent } from '../show-items/show-items.component';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [ShowItemsComponent],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent {


    /*items = [0];

    addItem(item: string, quantity: number) {
      this.items = [item, quantity];
      print(items);

    }
  */
}
