import { Component } from '@angular/core';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { Card } from '../models/main-component.model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-component',
  standalone: true,
  imports: [TopBarComponent, RouterModule, CommonModule],
  templateUrl: './main-component.component.html',
  styleUrl: './main-component.component.css'
})
export class MainComponentComponent {

  cards: Card[] = [
    {
      title: 'Fruits',
      description: 'Liste de fruits',
      route: '/fruits',
      icon: 'bi-palette-fill'
    },
    {
      title: 'Programmation',
      description: 'Entrainement Algorithmie',
      route: 'programmation',
      icon: 'bi-braces'
    },
    {
      title: 'Meteo',
      description: 'Meteo du jour',
      route: '',
      icon: 'bi-sun'
    },
    {
      title: 'Framework Angular',
      description: 'Entrainement Angular',
      route: 'training',
      icon: 'bi-eject'
    },
    {
      title: 'Web',
      description: 'Web Forms',
      route: 'register/step1',
      icon: 'bi-book'
    }
  ];
}


