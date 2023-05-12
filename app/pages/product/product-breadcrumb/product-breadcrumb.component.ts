import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../../../services/categories.service';
import { SubCategoriesService } from '../../../services/sub-categories.service';



@Component({
  selector: 'app-product-breadcrumb',
  templateUrl: './product-breadcrumb.component.html',
  styleUrls: ['./product-breadcrumb.component.css']
})
export class ProductBreadcrumbComponent implements OnInit {

   breadcrumb:string = null;

 	constructor(private categoriesService: CategoriesService,
              private subCategoriesService: SubCategoriesService,
              private activateRoute: ActivatedRoute) { }
              

  	ngOnInit(): void {

      /*=============================================
	Refrescamos el RouterLink para actualizar la ruta de la página
	=============================================*/		
    // this.activateRoute.params.subscribe(param => { })

	let params = this.activateRoute.snapshot.params["param"].split("&")[0];

    }

}

      