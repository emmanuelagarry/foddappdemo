import { Product } from './../models/model.product'
import { of, Observable, combineLatest, BehaviorSubject } from 'rxjs'
import { Injectable } from '@angular/core'
import { map, switchMap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class ProductFacade {
  private economy$: Observable<Product[]> = of([
    {
      name: 'Moimoi served with fried plantain cubes and gizzards sauce',
      ingredients: 'Moimoi-120gr, fried plantain-70gr, gizzard sauce-40gr',
      weight: '',
      price: 50,
      chow: 'breakfast',
      foodType: 'special diet',
      img: `https://images.unsplash.com/photo-1574803636191-b2bbb307e9c6?ixlib=rb-1.2.1&ixid
      =eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=642&q=80`,
    },
    {
      name: 'Spanish omelette served with Fried sweet potato & tomato sauce',
      ingredients:
        'Spanish omelette-80gr, Fried Sweet potatoes-100gr, Tomato sauce-50gr',
      weight: '230gr',
      price: 50,
      chow: 'breakfast',
      foodType: 'snack tray',
      img: `https://images.unsplash.com/photo-1498602753442-dfa7a49fc9c4?ixlib=rb-1.2.1&ixid=
      eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
    },
    {
      name: 'Pancake Served with Scrambled egg & Syrups',
      ingredients: 'Pancake-80, Scrambled Egg-100gr, Syrup-40gr',
      weight: '230gr',
      price: 50,
      chow: 'breakfast',
      foodType: 'special diet',
      img: `https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?ixlib=rb-1.2.1&ixid=
      eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
    },
    {
      name: 'Spanish Omelet served with Fried Yam and Tomato Sauce',
      ingredients:
        'Spanish omelette-80gr, fried yam wedges-100gr, tomato sauce-50gr',
      weight: '230gr',
      price: 50,
      chow: 'breakfast',
      foodType: 'snack tray',
      img: `https://images.unsplash.com/photo-1548075145-ec86fe8e06ac?ixlib=rb-1.2.1&ixid
      =eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80`,
    },
    {
      name: 'English breakfast- Poached egg, chicken sausages & baked beans',
      ingredients: 'Poached egg-90, baked beans-50gr, chicken sausage-38gr',
      weight: '180gr',
      price: 50,
      chow: 'breakfast',
      foodType: 'special diet',
      img: `https://images.unsplash.com/photo-1573225342356-dcf083550790?ixlib=rb-1.2.1&ixid
      =eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80`,
    },
    {
      name: 'Jollof rice Served with beef pepper sauce & Mixed vegetable',
      ingredients:
        'Jollof rice-130gr, beef pepper sauce-100gr, mixed vegetable-20gr.',
      weight: '250gr',
      price: 50,
      chow: 'lunch',
      foodType: 'snack tray',
      img: `https://images.unsplash.com/photo-1512058556646-c4da40fba323?ixlib=
      rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=653&q=80`,
    },
    {
      name: 'Steamed Rice Served with chicken curry sauce & mixed vegetables',
      ingredients:
        'Steamed rice-130gr, chicken curry sauce-100gr, mixed vegetable-20gr',
      weight: '250gr',
      price: 50,
      chow: 'lunch',
      foodType: 'special diet',
      img: `https://images.unsplash.com/photo-1564671165093-20688ff1fffa?ixlib=rb-1.2.1&ixid
      =eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=644&q=80`,
    },
    {
      name: 'Yam pottage served with fish pepper sauce',
      ingredients: 'Yam pottage-150, fish pepper sauce-100gr',
      weight: '250gr',
      price: 50,
      chow: 'lunch',
      img: `https://images.unsplash.com/photo-1573729582839-5c40e12f4ad1?ixlib=rb-1.2.1&ixid
      =eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80`,
      foodType: 'snack tray',
    },
    {
      name: 'Boiled pasta with meat balls in tomato sauce& mixed vegetables',
      ingredients:
        'Boiled pasta-130gr, meat balls -100gr, mixed vegetable-20gr',
      weight: '250gr',
      price: 50,
      chow: 'lunch',
      foodType: 'special diet',
      img: `https://images.unsplash.com/photo-1515516969-d4008cc6241a?ixlib=rb-1.2.1&ixid
      =eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80`,
    },
    {
      name: 'Efo riro served semovita & beef stew',
      ingredients: 'Semo-150gr, Efo riro beef-100gr',
      weight: '250gr',
      price: 50,
      chow: 'lunch',
      foodType: 'snack tray',
      img: `https://images.unsplash.com/photo-1578704311488-bce5feb2780b?ixlib=rb-1.2.1&ixid=
      eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80`,
    },
    {
      name: 'Stir fry vegetable rice with stir fry beef',
      ingredients: 'Stir fry vegetable rice-150gr, stir fry beef-100gr',
      weight: '250gr',
      price: 50,
      chow: 'lunch',
      foodType: 'special diet',
      img: `https://images.unsplash.com/photo-1562599746-de35a173487a?ixlib=rb-1.2.1&ixid
      =eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80`,
    },
    {
      name: 'Stir fry Spaghetti with shredded chicken in oyster sauce',
      ingredients: 'Stir spaghetti-150gr, shredded chicken-100gr',
      weight: '250gr',
      price: 50,
      chow: 'lunch',
      foodType: 'snack tray',
      img: `https://images.unsplash.com/photo-1516100882582-96c3a05fe590?ixlib=rb-1.2.1&ixid=
      eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80`,
    },
  ])

  private business$: Observable<Product[]> = of([
    {
      name: 'Moimoi served with fried plantain cubes and gizzards sauce',
      ingredients: 'Moimoi-120gr, fried plantain-70gr, gizzard sauce-40gr',
      weight: '',
      price: 50,
      chow: 'breakfast',
      foodType: 'special diet',
      img: `https://images.unsplash.com/photo-1574803636191-b2bbb307e9c6?ixlib=rb-1.2.1&ixid=
      eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=642&q=80`,
    },
    {
      name: 'Spanish omelette served with Fried sweet potato & tomato sauce',
      ingredients:
        'Spanish omelette-80gr, Fried Sweet potatoes-100gr, Tomato sauce-50gr',
      weight: '230gr',
      price: 50,
      chow: 'breakfast',
      foodType: 'snack tray',
      img: `https://images.unsplash.com/photo-1498602753442-dfa7a49fc9c4?ixlib=rb-1.2.1&ixid
      =eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
    },
    {
      name: 'Pancake Served with Scrambled egg & Syrups',
      ingredients: 'Pancake-80, Scrambled Egg-100gr, Syrup-40gr',
      weight: '230gr',
      price: 50,
      chow: 'breakfast',
      foodType: 'special diet',
      img: `https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?ixlib
      =rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`,
    },
    {
      name: 'Spanish Omelet served with Fried Yam and Tomato Sauce',
      ingredients:
        'Spanish omelette-80gr, fried yam wedges-100gr, tomato sauce-50gr',
      weight: '230gr',
      price: 50,
      chow: 'breakfast',
      foodType: 'snack tray',
      img: `https://images.unsplash.com/photo-1548075145-ec86fe8e06ac?ixlib=rb-1.2.1&ixid
      =eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80`,
    },
    {
      name: 'English breakfast- Poached egg, chicken sausages & baked beans',
      ingredients: 'Poached egg-90, baked beans-50gr, chicken sausage-38gr',
      weight: '180gr',
      price: 50,
      chow: 'breakfast',
      foodType: 'special diet',
      img: `https://images.unsplash.com/photo-1573225342356-dcf083550790?ixlib=rb-1.2.1&ixid=
      eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80`,
    },
    {
      name: 'Jollof rice Served with beef pepper sauce & Mixed vegetable',
      ingredients:
        'Jollof rice-130gr, beef pepper sauce-100gr, mixed vegetable-20gr.',
      weight: '250gr',
      price: 50,
      chow: 'lunch',
      foodType: 'snack tray',
      img: `https://images.unsplash.com/photo-1512058556646-c4da40fba323?ixlib=
      rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=653&q=80`,
    },
    {
      name: 'Steamed Rice Served with chicken curry sauce & mixed vegetables',
      ingredients:
        'Steamed rice-130gr, chicken curry sauce-100gr, mixed vegetable-20gr',
      weight: '250gr',
      price: 50,
      chow: 'lunch',
      foodType: 'special diet',
      img: `https://images.unsplash.com/photo-1564671165093-20688ff1fffa?ixlib=rb-1.2.1&ixid
      =eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=644&q=80`,
    },
    {
      name: 'Yam pottage served with fish pepper sauce',
      ingredients: 'Yam pottage-150, fish pepper sauce-100gr',
      weight: '250gr',
      price: 50,
      chow: 'lunch',
      img: `https://images.unsplash.com/photo-1573729582839-5c40e12f4ad1?ixlib=rb-1.2.1&ixid
      =eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80`,
      foodType: 'snack tray',
    },
    {
      name: 'Boiled pasta with meat balls in tomato sauce& mixed vegetables',
      ingredients:
        'Boiled pasta-130gr, meat balls -100gr, mixed vegetable-20gr',
      weight: '250gr',
      price: 50,
      chow: 'lunch',
      foodType: 'special diet',
      img: `https://images.unsplash.com/photo-1515516969-d4008cc6241a?ixlib=rb-1.2.1&ixid
      =eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80`,
    },
    {
      name: 'Efo riro served semovita & beef stew',
      ingredients: 'Semo-150gr, Efo riro beef-100gr',
      weight: '250gr',
      price: 50,
      chow: 'lunch',
      foodType: 'snack diet',
      img: `https://images.unsplash.com/photo-1578704311488-bce5feb2780b?ixlib=rb-1.2.1&ixid=
      eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80`,
    },
    {
      name: 'Stir fry vegetable rice with stir fry beef',
      ingredients: 'Stir fry vegetable rice-150gr, stir fry beef-100gr',
      weight: '250gr',
      price: 50,
      chow: 'lunch',
      foodType: 'special diet',
      img: `https://images.unsplash.com/photo-1562599746-de35a173487a?ixlib=rb-1.2.1&ixid
      =eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80`,
    },
    {
      name: 'Stir fry Spaghetti with shredded chicken in oyster sauce',
      ingredients: 'Stir spaghetti-150gr, shredded chicken-100gr',
      weight: '250gr',
      price: 50,
      chow: 'lunch',
      foodType: 'snack tray',
      img: `https://images.unsplash.com/photo-1516100882582-96c3a05fe590?ixlib=rb-1.2.1&ixid=
      eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80`,
    },
  ])

  // private  foodTypes: Observable<string[]> = of([''])

  private economyBfSubject$ = new BehaviorSubject<string>('')
  private economyLSubject$ = new BehaviorSubject<string>('')
  private businessBfSubject$ = new BehaviorSubject<string>('')
  private businessLSubject$ = new BehaviorSubject<string>('')

  private economyBf$ = combineLatest([
    this.economyBfSubject$.asObservable().pipe(),
    this.economy$,
  ]).pipe(
    map(([select, food]) => {
      if (select.length > 0) {
        const chow = food.filter(items => items.foodType === select)
        return chow
      }
      return food
    })
  )

  private economyL$ = combineLatest([
    this.economyLSubject$.asObservable().pipe(),
    this.economy$,
  ]).pipe(
    map(([select, food]) => {
      if (select.length > 0) {
        const chow = food.filter(items => items.foodType === select)
        return chow
      }
      return food
    })
  )

  private businessBf$ = combineLatest([
    this.businessBfSubject$.asObservable().pipe(),
    this.business$,
  ]).pipe(
    map(([select, food]) => {
      if (select.length > 0) {
        const chow = food.filter(items => items.foodType === select)
        return chow
      }
      return food
    })
  )

  private businessL$ = combineLatest([
    this.businessLSubject$.asObservable().pipe(),
    this.business$,
  ]).pipe(
    map(([select, food]) => {
      if (select.length > 0) {
        const chow = food.filter(items => items.foodType === select)
        return chow
      }
      return food
    })
  )

  products$ = combineLatest([
    this.economyBf$,
    this.economyL$,
    this.businessBf$,
    this.businessL$,
  ]).pipe(
    map(([economyBf, economyL, businessBf, businessL]) => {
      const economyBreakFast = economyBf.filter(
        items => items.chow === 'breakfast'
      )
      const economyLunch = economyL.filter(items => items.chow === 'lunch')
      const businessBreakFast = businessBf.filter(
        items => items.chow === 'breakfast'
      )
      const businessLunch = businessL.filter(items => items.chow === 'lunch')
      return {
        economyBreakFast,
        economyLunch,
        businessBreakFast,
        businessLunch,
      }
    })
  )
  constructor() {}

  changeBusBf(select: string) {
    this.businessBfSubject$.next(select)
  }
  changeBusL(select: string) {
    this.businessLSubject$.next(select)
  }
  changeEcBf(select: string) {
    this.economyBfSubject$.next(select)
  }
  changeEcL(select: string) {
    this.economyLSubject$.next(select)
  }
}
