import { Component, Input } from '@angular/core';
import { CarBrand } from '../types';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  @Input() public item: CarBrand;
}
