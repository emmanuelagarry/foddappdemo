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
      name: 'Bread Flambe',
      category: 'Business  Class Breakfast',
      img: `https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&ixid
      =eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
      price: 55,
    },
    {
      name: 'Yeast Flake',
      category: 'Business Class Lunch',
      img: `https://images.unsplash.com/photo-1504712598893-24159a89200e?ixlib=rb-1.2.1&ixid=
      eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
      price: 67,
    },
    {
      name: 'Veg Cake',
      category: 'Special Needs Meals',
      img: `https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=
      rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
      price: 98,
    },
    {
      name: 'Big Briggs',
      category: 'Snack Tray',
      img: `https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-1.2.1&ixid=
      eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
      price: 20,
    },
    {
      name: 'Big Shack',
      category: 'Economy Meals',
      img: `https://images.unsplash.com/photo-1551504734-b464946bb7f3?ixlib=rb-1.2.1&ixid
      =eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
      price: 71,
    },
    {
      name: 'Chicken Crisp',
      category: 'Economy Snack Box',
      img: `https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=
      rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
      price: 8,
    },
    {
      name: 'Otodom Stew',
      category: 'Business  Class Breakfast',
      img: `https://images.unsplash.com/reserve/oMRKkMc4RSq7N91OZl0O_IMG_8309.jpg?ixlib=rb-1.2.1&ixid
      =eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
      price: 41,
    },
    {
      name: 'Mayose Payose',
      category: 'Business Class Lunch',
      img: `https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=
      eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
      price: 0,
    },
    {
      name: 'Banana Flambe',
      category: 'Vegetarian Meals',
      img: `https://images.unsplash.com/photo-1504113888839-1c8eb50233d3?ixlib=rb-1.2.1&ixid
      =eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
      price: 80,
    },
    {
      name: 'Twermp Twamp',
      category: 'Special Needs Meals',
      img: `https://images.unsplash.com/photo-1450862479751-84eeaf2fcca4?ixlib=rb-1.2.1&ixid=
      eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
      price: 9,
    },
    {
      name: 'Cheasy Nuts',
      category: 'Snack Tray',
      img: `https://images.unsplash.com/photo-1563076429-c04cbe68da3a?ixlib=rb-1.2.1&ixid=
      eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
      price: 8,
    },
    {
      name: 'Brigsymol',
      category: 'Economy Meals',
      img: `https://images.unsplash.com/photo-1484654815877-4677f5cade22?ixlib=rb-1.2.1&ixid=
      eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
      price: 27,
    },
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
