import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CarBrand } from './types';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public readonly MESSAGE_TIMEOUT_MS: number = 3000;

  constructor(private cd: ChangeDetectorRef) {}

  public newCarControl = new FormControl('', Validators.required);

  public carsCollection: CarBrand[] = [
    { name: 'Audi' },
    { name: 'BMW' },
    { name: 'Mercedes-Benz' },
  ];

  public isSuccessMessageShown: boolean = false;

  public addCar(brand: string) {
    this.carsCollection.push({ name: brand });
    //create a new reference and will assign to existing carsCollection array.
    this.carsCollection = [...this.carsCollection];
    this.newCarControl.reset();

    this._showSuccessMessage();
  }

  private _showSuccessMessage(): void {
    this.isSuccessMessageShown = true;
    setTimeout(() => {
      this.isSuccessMessageShown = false;
      this.cd.detectChanges();
    }, this.MESSAGE_TIMEOUT_MS);
  }
}

function input() {
  throw new Error('Function not implemented.');
}
