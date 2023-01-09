import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public http: HttpClient) { }
  url: string = "http://localhost:3000";
  addProduct(product: any) {
    console.log(product)
    return this.http.post<any>(this.url + "/products", product)
  }
  getProduct(): Observable<any[]> {
    return this.http.get<any[]>(this.url + "/products")
  }
  getAdmin() {
    return this.http.get<any>(this.url + "/adminLogin")
  }
  deleteProduct(id: number) {
    return this.http.delete(this.url + "/products/" + id)
  }

  updateProduct(id: number, product: any) {
    console.log(product)
  
    return this.http.put(this.url + "/products/" + id, product)
  }

  getResturants(): Observable<any[]> {
    return this.http.get<any[]>(this.url + "/Resturants")
  }
  
addToCart(data:any){
  return this.http.post<any>(this.url+"/Cart",data)
}
getCartItem():Observable<any[]>{
  return this.http.get<any>(this.url+"/Cart")
}

removeCart(id:number){
return this.http.delete(this.url+"/Cart/"+id)
}
}
// registerSave(data: any)
// {
//   return this.http.post<any>(this.url + "/register", data)
// }

// loginGetData(): Observable<any[]>
// {
//   return this.http.get<any[]>("http://localhost:3000/register");
// }
 



