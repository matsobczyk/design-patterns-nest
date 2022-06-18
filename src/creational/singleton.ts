/* eslint-disable @typescript-eslint/no-empty-function */
export class HardwareButton {
  private static instance: HardwareButton;
  public static isPressed: boolean;

  private constructor() {
    HardwareButton.isPressed = false;
  }

  public static getInstance(): HardwareButton {
    if (!HardwareButton.instance) {
      HardwareButton.instance = new HardwareButton();
    }
    return HardwareButton.instance;
  }

  public getIsPressed() {
    return HardwareButton.isPressed;
  }

  public async press() {
    console.log('pressed');
    HardwareButton.isPressed = true;

    await new Promise((f) => setTimeout(f, 100));

    HardwareButton.isPressed = false;
    console.log('unpressed');
  }
}
