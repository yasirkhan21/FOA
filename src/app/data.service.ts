import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Products } from '../app/shared/services/products';
import { Restaurants } from '../app/shared/services/restaurants';
import { Carts } from './shared/services/carts';
import { AdminLogin } from './shared/services/admin-login';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dbPathProducts = '/products';
  private dbPathRestaurants = '/Resturants';
  private dbPathCart = '/Cart';
  private dbPathUser = '/AdminLogin';

  productsRef: AngularFireList<Products>;
  restaurantsRef: AngularFireList<Restaurants>;
  cartsRef: AngularFireList<Carts>;
  usersRef: AngularFireList<AdminLogin>;

  constructor(private db: AngularFireDatabase) {
    this.productsRef = db.list(this.dbPathProducts);
    this.restaurantsRef = db.list(this.dbPathRestaurants);
    this.cartsRef = db.list(this.dbPathCart);
    this.usersRef = db.list(this.dbPathUser);
  }

  //#region Products
  getAllProducts(): AngularFireList<Products> {
    return this.productsRef;
  }

  createProducts(product: Products): any {
    return this.productsRef.push(product);
  }

  updateProducts(id: string, value: any): Promise<void> {
    return this.productsRef.update(id, value);
  }

  deleteProducts(id: string): Promise<void> {
    return this.productsRef.remove(id);
  }

  deleteAllProducts(): Promise<void> {
    return this.productsRef.remove();
  }
  //#endregion

  //#region Restaurants
  getAllRestaurants(): AngularFireList<Restaurants> {
    return this.restaurantsRef;
  }

  createRestaurants(restaurant: Restaurants): any {
    return this.restaurantsRef.push(restaurant);
  }

  updateRestaurants(id: string, value: any): Promise<void> {
    return this.restaurantsRef.update(id, value);
  }

  deleteRestaurants(id: string): Promise<void> {
    return this.restaurantsRef.remove(id);
  }

  deleteAllRestaurants(): Promise<void> {
    return this.restaurantsRef.remove();
  }
  //#endregion

  //#region Cart
  getAllCarts(): AngularFireList<Carts> {
    return this.cartsRef;
  }

  createCarts(cart: Carts): any {
    return this.cartsRef.push(cart);
  }

  // updateCarts(id: string, value: any): Promise<void> {
  //   return this.cartsRef.update(id, value);
  // }

  deleteCarts(key: string): Promise<void> {
    return this.cartsRef.remove(key);
  }

  // deleteAllCarts(): Promise<void> {
  //   return this.cartsRef.remove();
  // }
  //#endregion

  //#region User

  
  createUser(adminLogin: AdminLogin): any {
    return this.usersRef.push(adminLogin);
  }

  getUser(): AngularFireList<AdminLogin> {
    return this.usersRef;
  }
  //#endregion

  getUserId(): string {
    const user = JSON.parse(localStorage.getItem('user')!);
    // console.log(user);
    return user !== null && user.emailVerified !== false ? user.uid : "";
  }
}