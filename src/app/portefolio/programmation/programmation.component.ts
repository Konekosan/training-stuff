import { Component, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Operations } from '../../models/main-component.model';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-programmation',
  standalone: true,
  imports: [FormsModule, 
            CommonModule,
            MatButtonModule,
            MatIconModule
          ],
  templateUrl: './programmation.component.html',
  styleUrl: './programmation.component.css'
})
export class ProgrammationComponent implements OnInit{
  inputValue: string = '';
  result: string | null = '';
  detectedType: string = '';
  parsedValue: number | string | Array<number | string> | null = null;

  constructor(private router: Router){

  }

  ngOnInit(): void {
  }

  detectType(): void {
    if (!this.inputValue) {
      this.detectedType = 'Aucun type detecté';
      this.result = '';
      return;
    }

    if (!isNaN(Number(this.inputValue))) {
      this.detectedType = 'Nombre';
    } 

    else if (this.inputValue.startsWith('[') && this.inputValue.endsWith(']')) {
      try {
        const parsed = JSON.parse(this.inputValue);
        if (Array.isArray(parsed)) {
          this.detectedType = 'Liste';
          return;
        }
        this.detectedType = 'String';
      } catch {
        this.detectedType = 'String';
      }
    } 
    else {
      this.detectedType = 'String';
    }
  }

  // Pair ou impair
  is_pair_impair_number(): void{
    this.result = parseInt(this.inputValue) % 2 === 0 ? 'Pair' : 'Impair';
  }

  // Somme des nombres dans une liste
  sum_array(): void{
    let result: number = 0;
    const parsed = JSON.parse(this.inputValue);
    for (let i of parsed){
      result += i;
    }
    this.result = result.toString();
  }

  // Valeur max dans une liste
  maxValue(): void{
    const parsed = JSON.parse(this.inputValue);

    let max = parsed[0];
    for (let i of parsed){
      if (i > max!) max = i
    }
    this.result = max;
  }

  // Inverser liste à la main
  reverse_array(): void{
    const parsed = JSON.parse(this.inputValue);
    let newArray = [];
    
    for (let i = parsed.length-1; i >= 0; i--) {
      newArray.push(parsed[i]);
    }
    console.log(this.result);
    this.result = '[' + newArray.toString() + ']';
  }

  // Inverser liste simplifié
  reverse_simplified(arrayList: number[]){
    return arrayList.reverse();
  }

  // Compter le nombre de voyelle
  compt_voyelles(): void{
    const voyelles = 'aeiouAEIOU'
    this.result = this.inputValue.split('').filter(result => voyelles.includes(result)).length.toString();
  }

  // Palindrome
  is_palindrome(): void{
    this.result = 'Faux';
    const result = this.inputValue === this.inputValue.split('').reverse().join('');
    if (result === true){
      this.result = 'Vrai';
    }
  }

  onCardClick(card: Operations): void {
    switch (card.click) {
      case 'returnValue':
        this.returnValue();
        break;
      case 'maxValue':
        this.maxValue();
        break;
      case 'reverseArray':
        this.reverse_array();
        break;
      case 'comptVoyelle':
        this.compt_voyelles();
        break;
      case 'palindrome':
        this.is_palindrome();
        break;
      case 'pairimpair':
        this.is_pair_impair_number();
        break;
      case 'SumList':
        this.sum_array();
        break;
    }
  }

  returnValue(): void{
    this.result = this.inputValue;
  }

  goBack():void {
    this.router.navigate(['/portefolio']);
  }

  parseInput(): void {
  try {
      const parsed = JSON.parse(this.inputValue);
      this.parsedValue = parsed;
    } catch {
      this.parsedValue = this.inputValue;
    }
  }

  algoCards: Operations[] = [
    {
      title: 'Valeur',
      description: 'Renvoyer la valeur',
      click: 'returnValue',
      allowedTypes: ['Nombre', 'String', 'Liste']
    },
    {
      title: 'Plus grande valeur',
      description: 'Trouver la valeur la plus grande d\'un tableau',
      click: 'maxValue',
      allowedTypes: ['Liste']
    },
    {
      title: 'Inverser le tableau',
      description: 'Inverser la valeur de la liste',
      click: 'reverseArray',
      allowedTypes: ['Liste']
    },
    {
      title: 'Voyelles',
      description: 'Compter nombre voyelles',
      click: 'comptVoyelle',
      allowedTypes: ['String']
    },
    {
      title: 'Palindrome',
      description: 'Ce mot est-il un palindrome?',
      click: 'palindrome',
      allowedTypes: ['String']
    },
    {
      title: 'Pair ou Impair',
      description: 'Nombre pair ou impair',
      click: 'pairimpair',
      allowedTypes: ['Nombre']
    },
    {
      title: 'Somme',
      description: 'Somme de la liste',
      click: 'SumList',
      allowedTypes: ['Liste']
    }
  ];

}
