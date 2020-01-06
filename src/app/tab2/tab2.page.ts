import { Component } from '@angular/core'
import { BehaviorSubject, of, combineLatest } from 'rxjs'
import { debounceTime, filter, distinctUntilChanged, map } from 'rxjs/operators'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  searchSubject$ = new BehaviorSubject('')

  categories = [
    'Pizza',
    'Fast Food',
    'Burgers',
    'Sushi',
    'Asian',
    'Indian',
    'Thai',
    'Turkish',
    'Vegan',
    'Healthy',
    'Mexican',
    'American',
    'Desert',
    'Chinese',
    'Comfort Food',
    'Polish',
    'Dumplings',
    'Vegetarian',
    'Japanese',
    'Wings',
    'Street Food',
    'Salads',
    'Middle East',
    'Pasta',
    'Chicken',
    'BBQ',
    'Georgian',
  ]
  private search$ = this.searchSubject$
    .asObservable()
    .pipe(debounceTime(500), distinctUntilChanged())

  private categories$ = of(this.categories)

  itemsToShow$ = combineLatest([this.search$, this.categories$]).pipe(
    map(([search, categories]) => {
      if (search) {
        const filterIt = categories.filter(item =>
          item.toLowerCase().includes(search.trim().toLowerCase())
        )
        return filterIt
      }
      return categories
    }),
    distinctUntilChanged()
  )

  constructor() {}

  routeTofood() {}

  trackByFn(index) {
    return index
  }
}
