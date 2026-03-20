import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { map, Observable } from 'rxjs';
import { Fruit } from '../../../models/Fruit.model';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-fruit-details',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './fruit-details.component.html',
  styleUrl: './fruit-details.component.css'
})
export class FruitDetailsComponent implements OnInit {
  fruitId!: number;
  fruit!: Fruit;

  constructor(private route: ActivatedRoute,
              private foodService: FoodService,
              private router: Router
            ) {
    this.fruitId = +this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.getFruitById(this.fruitId).subscribe(fruit => {
      this.fruit = fruit;
    });
  }

  goBack() {
    this.router.navigate(['/fruits']);
  }

  getFruitById(id: number): Observable<Fruit> {
    return this.foodService.getFruits().pipe(
      map(fruits => fruits.find(f => f.id === id)!)
    );
  }
}
