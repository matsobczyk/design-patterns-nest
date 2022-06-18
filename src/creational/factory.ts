/* eslint-disable @typescript-eslint/no-empty-function */
export enum Taste {
  Bitter = 'bitter',
  Sweet = 'sweet',
  Sour = 'sour',
  Salty = 'salty',
  Spicy = 'spicy',
}

export enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
  Black = 'black',
  White = 'white',
}

export enum FoodType {
  Apple,
  Cake,
}

export abstract class Food {
  private _taste: Taste;
  private _color: Color;

  constructor(taste: Taste, color: Color) {
    this._taste = taste;
    this._color = color;
  }
}

export class Apple extends Food {}

export class Cake extends Food {}

abstract class Factory {
  public abstract createFood(foodType: FoodType): Food;
}

export class FoodFactory extends Factory {
  public override createFood(foodType: FoodType) {
    switch (foodType) {
      case FoodType.Apple:
        return new Apple(Taste.Sour, Color.Red);
      case FoodType.Cake:
        return new Cake(Taste.Sweet, Color.Black);
      default:
        throw new Error('Not supported Food Type');
    }
  }
}
