import { CartStore } from './../store/store.cart'
import { Injectable } from '@angular/core'
import { CartItem } from 'src/models/model.cartitem'
import { Observable } from 'rxjs'
import { AngularFirestore } from '@angular/fire/firestore'

Injectable({
  providedIn: 'root',
})

export class CartFacade {
  cartState$: Observable<CartItem[]> = this.cartStore.cart$
  constructor(private cartStore: CartStore, private afs: AngularFirestore) {}

  add(item: CartItem) {
    this.cartStore.addToCart(item)
  }

  remove(key: number) {
    this.cartStore.deleteFromCart(key)
  }

  removeAll() {
    this.cartStore.deleteAllFromCart()
  }

  changeState() {
    this.afs.doc('fake/q5FYyjDJnlbDxD51t3D8').update({
      state: 'false',
    })
  }
}
