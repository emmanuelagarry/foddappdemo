import { ToastController } from '@ionic/angular'
import { CartItem } from './../../../../models/model.cartitem'
import { CartFacade } from './../../../../facade/facade.store'
import { map } from 'rxjs/operators'
import { of, Observable } from 'rxjs'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-foods',
  templateUrl: './foods.page.html',
  styleUrls: ['./foods.page.scss'],
})
export class FoodsPage implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private cartFacade: CartFacade,
    private toastController: ToastController
  ) {}

  private food = [
    {
      name: 'Peperoni Pizza',
      category: 'Pizza',
      img: `https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid
      =eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
      price: 55,
    },
    {
      name: 'Magento Bread',
      category: 'Fast food',
      img: `https://images.unsplash.com/photo-1505826759037-406b40feb4cd?ixlib=
      rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
      price: 33,
    },
    {
      name: 'Impossible Whooper',
      category: 'burgers',
      img: `https://images.unsplash.com/photo-1547584370-2cc98b8b8dc8?ixlib=
      rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
      price: 47,
    },
    {
      name: 'Vegan Corn',
      category: 'pizza',
      img: `https://images.unsplash.com/photo-1561350111-7daa4f284bc6?ixlib=
      rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
      price: 47,
    },
  ]

  food$: Observable<any>

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.paramMap.get('category'))

    this.food$ = of(this.food).pipe(
      map(items => {
        const category = this.activatedRoute.snapshot.paramMap.get('category')
        if (category) {
          const foods = items.filter(chow =>
            chow.category.toLowerCase().includes(category.toLowerCase())
          )

          return foods
        }
        return []
      })
    )
  }

  async addTocart(item: CartItem) {
    this.cartFacade.add(item)
    const toast = await this.toastController.create({
      message: 'Item was added to cart',
      duration: 500,
    })
    toast.present()
  }
}
