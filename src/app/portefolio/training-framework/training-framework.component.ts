import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FoodService } from '../../services/produits/food.service';

@Component({
  selector: 'app-training-framework',
  standalone: true,
  imports: [],
  templateUrl: './training-framework.component.html',
  styleUrl: './training-framework.component.css'
})
export class TrainingFrameworkComponent implements OnInit{

  fruits: any[] = [];

  constructor(private foodService: FoodService){}

  ngOnInit(): void {

  }

  
}
