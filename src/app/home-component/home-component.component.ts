import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent implements OnInit{

  ngOnInit(): void {
  }

  calculateDureeExp(): number{
    const beginYear = 2021;
    const currentYear = new Date().getFullYear();
    return currentYear - beginYear;
  }


}
