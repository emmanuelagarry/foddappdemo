import { BehaviorSubject, Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { CartItem } from 'src/models/model.cartitem'

Injectable({
  providedIn: 'root',
})

export class CartStore {
  private cart: CartItem[] = []
  private cartSubject$ = new BehaviorSubject<CartItem[]>(this.cart)
  cart$: Observable<CartItem[]> = this.cartSubject$.asObservable()

  constructor() {}

  addToCart(item: CartItem) {
    const key = new Date().getTime()
    this.cart = [...this.cart, { ...item, key }]
    this.cartSubject$.next(this.cart)
  }

  deleteFromCart(key: number) {
    this.cart = this.cart.filter(item => item.key !== key)
    this.cartSubject$.next(this.cart)
  }

  deleteAllFromCart() {
    this.cart = []
    this.cartSubject$.next(this.cart)
  }
}
