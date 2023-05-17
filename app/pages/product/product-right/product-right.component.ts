import { Component } from '@angular/core';
import { Path } from '../../../config';

@Component({
  selector: 'app-product-right',
  templateUrl: './product-right.component.html',
  styleUrls: ['./product-right.component.css']
})
export class ProductRightComponent {

  path:string = Path.url;


  constructor() { }

  ngOnInit(): void {

   }
}



