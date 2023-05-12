import { Component, OnInit } from '@angular/core';

import { CategoriesService } from '../../services/categories.service';
import { SubCategoriesService } from '../../services/sub-categories.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-breadcrumb',
  templateUrl: './products-breadcrumb.component.html',
  styleUrls: ['./products-breadcrumb.component.css']
})

export class ProductsBreadcrumbComponent implements OnInit {

      breadcrumb:string = null;

	  	constructor(private categoriesService: CategoriesService,
  	              private subCategoriesService: SubCategoriesService,
                  private activateRoute: ActivatedRoute) { }

  	  ngOnInit(): void {
      
     
     /*=============================================
	Refrescamos el RouterLink para actualizar la ruta de la página
	=============================================*/		
    // this.activateRoute.params.subscribe(param => { })

      let params = this.activateRoute.snapshot.params["param"];

      /*=============================================
	Filtramos data de categorías
	=============================================*/	

	    this.categoriesService.getFilterData("url", params)
      .subscribe(resp1 =>{

        if(Object.keys(resp1).length > 0){

            let i;
      
            for(i in resp1){

                this.breadcrumb = resp1[i].name;

        }

      }else{

            /*=============================================
        	Filtramos data de sucategorías
        	=============================================*/	
          this.subCategoriesService.getFilterData("url", params)
          .subscribe(resp2 =>{
        
               
              let i;
        
              for(i in resp2){
        
            
                  this.breadcrumb = resp2[i].name;
        
             }  


         })

       }
    
      })

    }
  
}
