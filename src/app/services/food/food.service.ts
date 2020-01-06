import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  private api = 'Path: https://api.edamam.com/search'

  // 'https://api.edamam.com/api/food-database/parse'

  private headers = {
    app_id: 'a2de363c',
    app_key: 'a11ea76de1d4ac980cadec0d611aab44',
  }

  constructor(private http: HttpClient) {}

  getFood() {
    return this.http.get(this.api, {
      params: {
        q: 'chicken',
        // ingr: 'chicken',
        ...this.headers,
      },
    })
  }
}
