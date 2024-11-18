import { Component } from '@angular/core';
import { Item } from '../Item';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent {


    item: Item = {
        name: '',
        quantity: 0
    }
}
