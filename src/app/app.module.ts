import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, ItemListComponent, ItemComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
