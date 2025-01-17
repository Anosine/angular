import { Component, OnInit } from '@angular/core';
import { Item } from '../Item';
//import { ItemService } from '../item.service';

import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-show-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-items.component.html',
  styleUrl: './show-items.component.css'
})
export class ShowItemsComponent implements OnInit{
  items: Item[] = [];

  addItem(name: string, qty: number): void {
    localStorage.getItem('items');
    this.items = JSON.parse(localStorage.getItem('items') || '[]');
    name = name.trim();
    if (!name || qty <= 0) { return; }
    const newItem: Item = { name, quantity: qty };
    this.items.push(newItem);
    localStorage.setItem('items', JSON.stringify(this.items));
  }

  ngOnInit(): void {
    this.getItems();
  }


  getItems(): void {
    localStorage.getItem('items');
    this.items = JSON.parse(localStorage.getItem('items') || '[]');
  }

  delete(item: Item): void {
    localStorage.getItem('items');
    this.items = JSON.parse(localStorage.getItem('items') || '[]');
    const index = this.items.findIndex(i => i.name === item.name && i.quantity === item.quantity);
    if (index > -1) {
      this.items.splice(index, 1);
    }
    this.items = this.items.filter(i => i !== item);
    localStorage.setItem('items', JSON.stringify(this.items));
  } 

  deleteAll(): void {
    localStorage.setItem('items', JSON.stringify([]));
    this.items = [];
  }
}
