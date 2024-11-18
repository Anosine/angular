
import { Routes } from '@angular/router';

import { SkaiciuokleComponent } from './skaiciuokle/skaiciuokle.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { TaskListComponent } from './task-list/task-list.component';




export const routes: Routes = [
    { path: 'skaiciuokle', component: SkaiciuokleComponent },
    { path: 'shoplist', component: ShopListComponent },
    { path: 'tasklist', component: TaskListComponent },
  ];
