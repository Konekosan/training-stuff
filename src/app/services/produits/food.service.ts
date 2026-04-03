import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Fruit, FruitDTO } from '../../models/Fruit.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private httpClient: HttpClient) {}

  url:string = 'http://localhost:8000/fruits/'

  getFruits(): Observable<Fruit[]> {
    return this.httpClient.get<FruitDTO[]>(this.url).pipe(
      map(data => data.map(item => this.mapToFruit(item)))
    );
  }

  private mapToFruit(item: any): Fruit {
    return new Fruit(
      item.name,
      item.id,
      item.family,
      item.order,
      item.genus,
      item.nutritions
    )
  }

  
}
