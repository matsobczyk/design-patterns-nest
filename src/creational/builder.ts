export interface Pizza {
  sauce: Sauce;
  meat: Meat;
  cheese: boolean;
}

enum Sauce {
  Tomato = 'tomato',
  White = 'white',
}

enum Meat {
  Pepperoni = 'pepperoni',
  Ham = 'ham',
}

export class Pizza {
  private name: string;

  constructor() {
    this.cheese = true;
  }

  public setName(name: string) {
    this.name = name;
  }

  public getInfo() {
    console.log(this);
  }
}

export abstract class PizzaBuilder {
  public abstract producePizza(): void;
  public abstract returnPizza(): Pizza;
}

export class PepperoniBuilder extends PizzaBuilder {
  private pizza: Pizza;

  private producePepperoni() {
    this.pizza.sauce = Sauce.Tomato;
    this.pizza.meat = Meat.Pepperoni;
  }
  public override producePizza(): void {
    this.pizza = new Pizza();
    this.pizza.setName('Pizza Pepperoni');
    this.producePepperoni();
  }
  public returnPizza(): Pizza {
    return this.pizza;
  }
}

export class BiancaBuilder extends PizzaBuilder {
  private pizza: Pizza;

  private produceBianca() {
    this.pizza.sauce = Sauce.White;
    this.pizza.meat = Meat.Ham;
  }
  public override producePizza(): void {
    this.pizza = new Pizza();
    this.pizza.setName('Pizza Bianca');
    this.produceBianca();
  }
  public returnPizza(): Pizza {
    return this.pizza;
  }
}

export class PizzaGenerator {
  public create(pizzaBuilder: PizzaBuilder) {
    pizzaBuilder.producePizza();
  }
}
