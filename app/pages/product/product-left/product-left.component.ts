import { Component } from '@angular/core';
import { Path } from '../../../config';
import { Rating, 
  DinamicRating, 
  DinamicReviews, 
  DinamicPrice,
  CountDown,
  ProgressBar
   } from '../../../functions';

import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-product-left',
  templateUrl: './product-left.component.html',
  styleUrls: ['./product-left.component.css']
})
export class ProductLeftComponent {

  path:string = Path.url;
  product:Array<any> = [];
  rating:Array<any> = [];
  reviews:Array<any> = [];
  price:Array<any> = [];
  cargando:boolean = false;
  render:Boolean = true;
  countd:Array<any> = [];

  constructor(private activateRoute: ActivatedRoute,
            private productsService: ProductsService) {}

  ngOnInit(): void {

    this.cargando = true;

    this.productsService.getFilterData("url",this.activateRoute.snapshot.params["param"])
    .subscribe( resp => {

      this.productsFnc(resp);	

    })

   }
  /*=============================================
      	Declaramos función para mostrar los productos recomendados
      	=============================================*/	

      	productsFnc(response){

          this.product = [];
    
      		    /*=============================================
          		Hacemos un recorrido por la respuesta que nos traiga el filtrado
          		=============================================*/	

          		let i;
          		let getProduct = [];
        
          		for(i in response){
        
        			getProduct.push(response[i]);
              						
        				
        		}

            /*=============================================
        		Ordenamos de mayor a menor ventas el arreglo de objetos
        		=============================================*/	
        
        		getProduct.sort(function(a,b){
        			return (b.views - a.views)

            })	
            
            /*=============================================
        		Filtramos solo hasta 10 productos
        		=============================================*/

            getProduct.forEach((product, index)=>{

              
                
                this.product.push(product);

                this.rating.push(DinamicRating.fnc(this.product[index]));

                this.reviews.push(DinamicReviews.fnc(this.rating[index]));

                this.price.push(DinamicPrice.fnc(this.product[index]));

                /*=============================================
        		    agregamos la fecha al descontador
        		    =============================================*/
                if(this.product[index].offer != ""){

                  const date = JSON.parse(this.product[index].offer)[2];
                  this.countd.push(

                  new Date(
                      parseInt(date.split("-")[0]),
                      parseInt(date.split("-")[1])-1,
                      parseInt(date.split("-")[2])
                    )
                  )
     
              }

                this.cargando = false;

              })

        }

              callback(){
                if(this.render){
                  this.render = false;
                  Rating.fnc();
                  CountDown.fnc();
                  ProgressBar.fnc();

                
              }
              
          }

           
       
            
    }


