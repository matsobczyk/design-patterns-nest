import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { iterateWithJump } from './behavioral/iterator';
import { Judge } from './behavioral/mediator';
import { LiveTV, PersonWatching } from './behavioral/observer';
import { Towel, WetState } from './behavioral/state';
import {
  AbstractFactory,
  AppleFactoryType,
  AppleType,
} from './creational/abstract-factory';
import {
  BiancaBuilder,
  PepperoniBuilder,
  PizzaGenerator,
} from './creational/builder';
import { FoodFactory, FoodType } from './creational/factory';
import { createTastes } from './creational/prototype';
import { HardwareButton } from './creational/singleton';
import { HybridCar } from './structural/facade';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<string> {
    // 1. singleton
    const button = HardwareButton.getInstance();
    button.press();
    console.log(`button pressed: ${button.getIsPressed()}`);
    await new Promise((f) => setTimeout(f, 200));
    console.log(`button pressed: ${button.getIsPressed()}`);

    // 2. builder
    const pizzaGenerator: PizzaGenerator = new PizzaGenerator();
    const pepperoniBuilder: PepperoniBuilder = new PepperoniBuilder();
    const biancaBuilder = new BiancaBuilder();

    pizzaGenerator.create(pepperoniBuilder);
    pepperoniBuilder.returnPizza().getInfo();

    pizzaGenerator.create(biancaBuilder);
    biancaBuilder.returnPizza().getInfo();

    // 3. factory
    const factory = new FoodFactory();
    const apple = factory.createFood(FoodType.Apple);
    const cake = factory.createFood(FoodType.Cake);

    console.log(apple);
    console.log(cake);

    // 4. abstract factory
    const forestApple = AbstractFactory.createApple(
      AppleFactoryType.ForestFactory,
      AppleType.BlackApple,
    );
    const orchardApple = AbstractFactory.createApple(
      AppleFactoryType.OrchardFactory,
      AppleType.GreenApple,
    );
    console.log(forestApple), console.log(orchardApple);

    // 5. prototype
    const [sweet, sweetAndSour] = createTastes();
    console.log(`taste: ${sweet.taste}`);
    // eslint-disable-next-line prettier/prettier
      //should be undefined ↓
    console.log(`secondTaste: ${sweet.secondTaste}`);
    console.log(`isYummy: ${sweet.isYummy()}`);

    console.log(`taste: ${sweetAndSour.taste}`);
    // eslint-disable-next-line prettier/prettier
      //should be defined ↓
    console.log(`secondTaste: ${sweetAndSour.secondTaste}`);
    console.log(`isYummy: ${sweetAndSour.isYummy()}`);

    // 6. facade
    const car = new HybridCar();
    car.startDriving();
    car.stopDriving();

    // 7. iterator
    for (const n of iterateWithJump(0, 100, 30)) {
      console.log(n);
    }

    // 8. Observer
    const personOne = new PersonWatching(1);
    const personTwo = new PersonWatching(2);

    const LiveTVStationOne = new LiveTV();

    console.log('Users watching the LiveTVStationOne');
    LiveTVStationOne.subscribe(personOne);
    LiveTVStationOne.notify();
    console.log('');
    console.log('Users watching the LiveTVStationOne');
    LiveTVStationOne.subscribe(personTwo);
    LiveTVStationOne.notify();
    console.log('');
    console.log('Users that stopped watching the LiveTVStationOne');
    LiveTVStationOne.unsubscribe(personOne);
    LiveTVStationOne.notify();
    console.log('');

    // 9. State
    const newTowel = new Towel();
    console.log('New towel');
    console.log(newTowel.check());
    const usedBathroomTowel = new Towel();

    console.log('');

    console.log('Used towel');
    usedBathroomTowel.changeState(new WetState());
    console.log(usedBathroomTowel.check());

    // 10. Mediator
    const judge = new Judge();

    console.log(`Claimant claims: ${judge.askForClaims()}`);
    console.log(`Defendant line of defence: ${judge.askForLineOfDefence()}`);

    return this.appService.getHello();
  }
}
