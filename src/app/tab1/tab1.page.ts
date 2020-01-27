import { Observable, BehaviorSubject } from 'rxjs'
import { ProductFacade } from './../../facade/facade.products'
import { ToastController } from '@ionic/angular'
import { FoodService } from './../services/food/food.service'
import { Component, OnInit } from '@angular/core'
import { CartItem } from 'src/models/model.cartitem'
import { CartFacade } from 'src/facade/facade.store'
import { Product } from 'src/models/model.product'
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    centeredSlides: true,
    slidesPerView: 1.5,
  }

  slideOptsCarousel = {
    autoplay: {
      delay: 5000,
    },
  }

  customSelect: any = {
    translucent: false,
  }

  product$: Observable<{
    economyBreakFast: Product[]
    economyLunch: Product[]
    businessBreakFast: Product[]
    businessLunch: Product[]
  }>

  cartCount$: Observable<number>

  carousel = [
    // tslint:disable-next-line:max-line-length
    `https://firebasestorage.googleapis.com/v0/b/foodapjj-prod.appspot.com/o/carousel%2F1browser.jpg?alt=media&token=d02ef39a-ad1d-4417-abd2-c8ad3132ed68`,
    // tslint:disable-next-line:max-line-length
    `https://firebasestorage.googleapis.com/v0/b/foodapjj-prod.appspot.com/o/carousel%2F2browser.jpg?alt=media&token=722a6cd2-42c3-4f80-860b-7f142a24a5b9`,
  ]

  carouselSubject: BehaviorSubject<number> = new BehaviorSubject(1)

  constructor(
    private cartFacade: CartFacade,
    private productFacade: ProductFacade,
    private toastController: ToastController
  ) {}

  items = Array.from({ length: 6 }).map((_, i) => `Item #${i}`)
  ngOnInit() {
    this.product$ = this.productFacade.products$
    this.cartCount$ = this.cartFacade.cartState$.pipe(
      map(items => items.length)
    )
  }

  async addTocart(item: CartItem) {
    this.cartFacade.add(item)
    const toast = await this.toastController.create({
      message: 'Item was added to cart',
      duration: 800,
    })
    toast.present()
  }

  logt() {
    console.log('this')
  }

  changeBusinessBf(select: string) {
    this.productFacade.changeBusBf(select)
  }
  changeBusinessL(select: string) {
    this.productFacade.changeBusL(select)
  }
  changeEconomyBf(select: string) {
    this.productFacade.changeEcBf(select)
  }
  changeEconomyL(select: string) {
    this.productFacade.changeEcL(select)
  }
}
