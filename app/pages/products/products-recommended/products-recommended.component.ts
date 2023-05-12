import { Component } from '@angular/core';
import { Path } from '../../../config';
import { OwlCarouselConfig, 
  CarouselNavigation, 
  Rating, 
  DinamicRating, 
  DinamicReviews, 
  DinamicPrice
   } from '../../../functions';
import { ProductsService } from '../../../services/products.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-products-recommended',
  templateUrl: './products-recommended.component.html',
  styleUrls: ['./products-recommended.component.css']
})

export class ProductsRecommendedComponent {

  path:string = Path.url;
  recommendedItems:Array<any> = [];
  render:boolean = true;
  rating:Array<any> = [];
  reviews:Array<any> = [];
  price:Array<any> = [];
  cargando:boolean = false;


  constructor(private productsService: ProductsService,
              private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.cargando = true;

        /*=============================================
    		Capturamos el parámetro URL
    		=============================================*/	

        let params = this.activateRoute.snapshot.params["param"];

        /*=============================================
    		filtramos data de productos con categorias
    		=============================================*/	
        this.productsService.getFilterData("category", params)
    		
        .subscribe(resp1 =>{

          if(Object.keys(resp1).length > 0){
  
              let i;
        
              for(i in resp1){

                this.productsFnc(resp1);
  
                 
  
          }
  
        }else{
  
              /*=============================================
            Filtramos data de sucategorías
            =============================================*/	
            this.productsService.getFilterData("sub_category", params)
            .subscribe(resp2 =>{
          
                 
                let i;
          
                for(i in resp2){
                       
                    this.productsFnc(resp2);
          
                 }  
  
  
             })
  
           }
      
        })
    
       
       }

       /*=============================================
      	Declaramos función para mostrar los productos recomendados
      	=============================================*/	

      	productsFnc(response){

          this.recommendedItems = [];
    
      		    /*=============================================
          		Hacemos un recorrido por la respuesta que nos traiga el filtrado
          		=============================================*/	

          		let i;
          		let getSales = [];
        
          		for(i in response){
        
        			getSales.push(response[i]);
              						
        				
        		}

            /*=============================================
        		Ordenamos de mayor a menor ventas el arreglo de objetos
        		=============================================*/	
        
        		getSales.sort(function(a,b){
        			return (b.views - a.views)

            })	
            
            /*=============================================
        		Filtramos solo hasta 10 productos
        		=============================================*/

            getSales.forEach((product, index)=>{

              if(index < 10){
                
                this.recommendedItems.push(product);

                this.rating.push(DinamicRating.fnc(this.recommendedItems[index]));

                this.reviews.push(DinamicReviews.fnc(this.rating[index]));

                this.price.push(DinamicPrice.fnc(this.recommendedItems[index]));

                this.cargando = false;
              
              }

            })
       
            
          }

          /*=============================================
        	Función para el rating dinámico
        	=============================================*/

          dinamicRating(response){


              /*=============================================
            	calculamos el totald e las calificaciones de las reseñas
            	=============================================*/
    
              let totalReview = 0;
              let rating = 0;
    
              for(let i = 0; i < JSON.parse(response.reviews).length; i++) {
                  totalReview += Number(JSON.parse(response.reviews)[i]["review"]);
    
              }
              rating = Math.round(totalReview/JSON.parse(response.reviews).length);

              return rating;


          }


          /*=============================================
        	Función para las reseñas dinámicas
        	=============================================*/

          dinamicReviews(response){


              /*=============================================
            	calficamos la cantidad de estrellas segun la calificacion
            	=============================================*/
              let reviews = [];
              for(let r = 0; r < 5; r++) {
                  if(response < (r+1)){
                    reviews [r] = 2

                  }else{
                    reviews [r] = 1
                  }
              }
              
              return reviews;

          }

          /*=============================================
        	Función para los precios dinamicos
        	=============================================*/

          dinamicPrice(response){

            let type;
            let value;
            let offer;
            let price;
            let disccount;
            let arrayPrice = [];

            if(response.offer != ""){

              type = JSON.parse(response.offer)[0];
              value = JSON.parse(response.offer)[1];

              if(type == "Disccount"){
                  offer = (response.price-(response.price * value/100)).toFixed(2)
              }

              if(type == "Fixed"){
                  offer = value;
                  value = Math.round(offer*100/response.price);

              }

              disccount = `<p class="ps-product__badge sale">-${value}%</p>`;

              price = `<p class="ps-product__price sale">$${offer} <del>$${response.price} </del></p>`;

            }else{

              price = `<p class="ps-product__price sale">$${response.price}</p>`;


            }

            /*=============================================
          	definimos si el producto tiene stock
          	=============================================*/
            if(response.stock == 0){

              disccount = `<dic class="ps-product__badge out-stock">Out of Stock</div>`;

            }

            arrayPrice[0] = price;
            arrayPrice[1] = disccount;

            return arrayPrice;

          }



         /*=============================================
        	Función que nos avisa cuando finaliza el renderizado de Angular
        	=============================================*/

        	callback(){
      
        		if(this.render){
      
        			this.render = false;
      
        			OwlCarouselConfig.fnc();
        			CarouselNavigation.fnc();
              Rating.fnc();				
        		
        		}
      
        }
      
}
