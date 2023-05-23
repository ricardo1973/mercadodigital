import { Component,  Input } from '@angular/core';
import { StoresService } from '../../../../services/stores.service';
import { Path } from '../../../../config';




@Component({
  selector: 'app-vendor-store',
  templateUrl: './vendor-store.component.html',
  styleUrls: ['./vendor-store.component.css']
})
export class VendorStoreComponent {

  @Input() childItem:any;
  path:string = Path.url;
  store:Array<any>=[];
	

  constructor(private storesService: StoresService) { }

  	ngOnInit(): void {

      this.storesService.getFilterData("store", this.childItem)
  		.subscribe( resp => {	
        for(const i in resp){

  				this.store.push(resp[i])
  			
  			}

  		})
  	}

}
