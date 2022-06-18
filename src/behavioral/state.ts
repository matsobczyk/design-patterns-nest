interface State {
  check(): string;
}

export class WetState implements State {
  check() {
    return 'This towel is wet';
  }
}

export class DryState implements State {
  check() {
    return 'This towel is dry';
  }
}

export class Towel {
  state: State;

  constructor() {
    this.state = new DryState();
  }

  changeState(state) {
    this.state = state;
  }

  check() {
    return this.state.check();
  }
}
