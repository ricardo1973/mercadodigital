import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from '../config';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

	private api:String = Api.url;

	constructor(private http:HttpClient ) { }

	getData(){

		return this.http.get(`${this.api}products.json`);

	}

	getLimitData(startAt:string, limitToFirst:number){

		return this.http.get(`${this.api}products.json?orderBy="$key"&startAt="${startAt}"&limitToFirst=${limitToFirst}&print=pretty`);

	}
}
