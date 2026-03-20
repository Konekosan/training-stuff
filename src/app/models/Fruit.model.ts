export interface Nutritions {
  calories: number;
  carbohydrates: number;
  fat: number;
  protein: number;
  sugar: number;
}

export interface FruitDTO {
  name: string;
  id: number;
  family: string;
  order: string;
  genus: string;
  nutritions: Nutritions;
}

export class Fruit {
  constructor(
    public name: string,
    public id: number,
    public family: string,
    public order: string,
    public genus: string,
    public nutritions: Nutritions
  ) {}

  isLowCalorie(): boolean {
    return this.nutritions.calories < 50;
  }

  get sugarLevel(): string {
    if (this.nutritions.sugar < 5) return 'low';
    if (this.nutritions.sugar < 10) return 'medium';
    return 'high';
  }
}