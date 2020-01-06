import { CartItem } from './../../../models/model.cartitem'
import { Observable } from 'rxjs'
import { CartFacade } from './../../../facade/facade.store'
import { Component, OnInit } from '@angular/core'
import { ToastController } from '@ionic/angular'
import { Router } from '@angular/router'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  cart$: Observable<CartItem[]>
  constructor(
    private cartFacade: CartFacade,
    private toastController: ToastController,
    private router: Router
  ) {
    this.cart$ = this.cartFacade.cartState$
  }

  ngOnInit() {}

  removeItem(key: number) {
    this.cartFacade.remove(key)
  }

  clearCart() {
    this.cartFacade.removeAll()
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Thank you for trying our services',
      duration: 2000,
    })
    toast.present()

    setTimeout(() => {
      this.router.navigateByUrl('/')
    }, 2000)

    this.clearCart()
    this.cartFacade.changeState()
  }
}
