import { Color, Taste } from './factory';

export enum AppleFactoryType {
  OrchardFactory = 'orchardFactory',
  ForestFactory = 'forestFactory',
}

export enum AppleType {
  GreenApple = 'green apple',
  RedApple = 'red apple',
  BlackApple = 'black apple',
}

interface Fruit {
  taste: Taste;
  color: Color;
}

class Apple implements Fruit {
  taste: Taste;
  color: Color;
}

class GreenForestApple extends Apple {
  constructor() {
    super();
    this.color = Color.Green;
    this.taste = Taste.Sour;
  }
}
class RedForestApple extends Apple {
  constructor() {
    super();
    this.color = Color.Red;
    this.taste = Taste.Sour;
  }
}
class BlackForestApple extends Apple {
  constructor() {
    super();
    this.color = Color.Black;
    this.taste = Taste.Sour;
  }
}
class GreenOrchardApple extends Apple {
  constructor() {
    super();
    this.color = Color.Green;
    this.taste = Taste.Sweet;
  }
}
class RedOrchardApple extends Apple {
  constructor() {
    super();
    this.color = Color.Red;
    this.taste = Taste.Sweet;
  }
}
class BlackOrchardApple extends Apple {
  constructor() {
    super();
    this.color = Color.Black;
    this.taste = Taste.Sweet;
  }
}

export class ForestFactory {
  static createFood(appleType: AppleType) {
    switch (appleType) {
      case AppleType.GreenApple:
        return new GreenForestApple();
      case AppleType.RedApple:
        return new RedForestApple();
      case AppleType.BlackApple:
        return new BlackForestApple();
      default:
        throw new Error('Not supported Apple Type');
    }
  }
}
export class OrchardFactory {
  static createFood(appleType: AppleType) {
    switch (appleType) {
      case AppleType.GreenApple:
        return new GreenOrchardApple();
      case AppleType.RedApple:
        return new RedOrchardApple();
      case AppleType.BlackApple:
        return new BlackOrchardApple();
      default:
        throw new Error('Not supported Apple Type');
    }
  }
}
export class AbstractFactory {
  static createApple(factoryType: AppleFactoryType, appleType: AppleType) {
    switch (factoryType) {
      case AppleFactoryType.ForestFactory:
        return ForestFactory.createFood(appleType);
      case AppleFactoryType.OrchardFactory:
        return OrchardFactory.createFood(appleType);
    }
  }
}
