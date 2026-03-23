import { Component,  ViewChild, AfterViewInit  } from '@angular/core';
import { Fruit } from '../../../models/Fruit.model';
import { OnInit } from '@angular/core';
import { FoodService } from '../../../services/food.service';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { finalize } from 'rxjs/operators';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fruit-list',
  standalone: true,
  imports: [MatTableModule,
            MatButtonModule,
            MatIconModule,
            MatPaginatorModule,
            MatPaginator,
            MatProgressSpinnerModule,
            CommonModule
  ],
  templateUrl: './fruit-list.component.html',
  styleUrl: './fruit-list.component.css'
})
export class FruitListComponent implements OnInit  {

  displayedColumns: string[] = ['name', 'family', 'order', 'genus'];
  fruits: Fruit[] = [];
  search = '';
  fruitTable!: MatTableDataSource<Fruit>;
  private _paginator!: MatPaginator;
  isLoading: boolean = false;
  @ViewChild(MatPaginator)
  set paginator(value: MatPaginator) {
    if (value) {
      this._paginator = value;

      if (this.fruitTable) {
        this.fruitTable.paginator = value;
      }
    }
  }

  constructor(private foodService: FoodService,
              private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.foodService.getFruits().pipe(finalize(() => this.isLoading = false)).subscribe(fruits => {
      this.fruits = fruits;
      this.fruits.sort((a, b) => a.id - b.id);
      this.fruitTable = new MatTableDataSource(this.fruits);
      
    });
  }

  goToDetail(fruit: Fruit):void {
    this.router.navigate(['/portefolio/fruit', fruit.id]);
  }

  goBack():void {
    this.router.navigate(['/']);
  }
}
