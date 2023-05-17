import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-breadcrumb',
  templateUrl: './product-breadcrumb.component.html',
  styleUrls: ['./product-breadcrumb.component.css']
})
export class ProductBreadcrumbComponent {

  breadcrumb:string = null;

 	constructor(private activateRoute: ActivatedRoute) { }

  	ngOnInit(): void {

  		/*=============================================
		Capturamos el parámetro URL
		=============================================*/	

		this.breadcrumb = this.activateRoute.snapshot.params["param"].replace(/[-]/g, " ");

  	}

}
