import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public http:HttpClient) { }
  url: string = "http://localhost:3000";
  addProduct(product:any){
    console.log(product)
    return this.http.post<any>(this.url+"/products",product)
  }
  getProduct():Observable<any[]>{
    return this.http.get<any[]>(this.url+"/products")
  }
  getAdmin(){
    return this.http.get<any>(this.url+"/adminLogin")
  }
}
