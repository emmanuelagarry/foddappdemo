import { ToastController } from '@ionic/angular'
import { FoodService } from './../services/food/food.service'
import { Component, OnInit } from '@angular/core'
import { CartItem } from 'src/models/model.cartitem'
import { CartFacade } from 'src/facade/facade.store'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`)
  slideOpts = {
    initialSlide: 1,
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 1.8,
  }

  featuredProd = [
    {
      img: `https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib
      =rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,

      rating: 4.4,

      name: 'Prito panta',
      price: 500,
    },

    {
      img: `https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=
      rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,

      rating: 4.4,

      name: 'Silka solvo',
      price: 500,
    },

    {
      img: `https://images.unsplash.com/photo-1532980400857-e8d9d275d858?ixlib=
      rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,

      rating: 4.4,

      name: 'Rice mix',
      price: 500,
    },
  ]

  specialOffers = [
    {
      img: `https://images.unsplash.com/photo-1481931098730-318b6f776db0?ixlib=
      rb-1.2.1&auto=format&fit=crop&w=500&q=60`,

      rating: 4.4,

      name: 'Spag',
      price: 500,
    },

    {
      img: `https://images.unsplash.com/photo-1514516870926-20598973e480?ixlib=
      rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,

      rating: 4.4,

      name: 'Soothe',
      price: 500,
    },

    {
      img: `https://images.unsplash.com/photo-1514537099923-4c0fc7c73161?ixlib=
      rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,

      rating: 4.4,

      name: 'Vegetable mix',
      price: 500,
    },
  ]

  constructor(
    private cartFacade: CartFacade,
    private toastController: ToastController
  ) {
    // this.featuredProd[0].img.replace(/\s/g,'')
  }

  ngOnInit() {
    // this.foodService.getFood().subscribe(items => console.log(items))
  }

  async addTocart(item: CartItem) {
    this.cartFacade.add(item)
    const toast = await this.toastController.create({
      message: 'Item was added to cart',
      duration: 800,
    })
    toast.present()
  }
}
