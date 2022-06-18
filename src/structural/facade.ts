/* eslint-disable @typescript-eslint/no-empty-function */
class ElectricEngine {
  setElectricHorsePower(eHP: number) {
    console.log(`eHP set to ${eHP}`);
  }
  turnOn() {
    console.log('Electric engine turned ON');
  }
  turnOff() {
    console.log('Electric engine turned OFF');
  }
  startPower() {
    console.log('Electric engine up and running');
  }
  stopPower() {
    console.log('Electric engine on standby');
  }
}

class PetrolEngine {
  // low evel access to electrical system
  setHorsePower(normalHP: number) {
    console.log(`HP set to ${normalHP}`);
  }
  turnOn() {
    console.log('Petrol engine turned ON');
  }
  turnOff() {
    console.log('Petrol engine turned OFF');
  }
  startPower() {
    console.log('Petrol engine up and running');
  }
  stopPower() {
    console.log('Petrol engine on standby');
  }
}

export class HybridCar {
  private electricEngine = new ElectricEngine();
  private petrolEngine = new PetrolEngine();

  public startDriving() {
    this.electricEngine.setElectricHorsePower(200);
    this.electricEngine.turnOn();
    this.electricEngine.startPower();
    console.log('');

    this.petrolEngine.setHorsePower(150);
    this.petrolEngine.turnOn();
    this.petrolEngine.startPower();
    console.log('');

    this.electricEngine.stopPower();
  }

  public stopDriving() {
    console.log('');
    this.electricEngine.turnOff();
    this.petrolEngine.turnOff();
  }
}
