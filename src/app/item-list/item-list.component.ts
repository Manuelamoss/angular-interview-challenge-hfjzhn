import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CarBrand } from '../types';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemListComponent implements OnInit {
  @Input() public items: CarBrand[] = [];
  @Input() public title: string = 'Item list';

  ngOnInit() {
    console.log('items: ', this.items);
  }
}
