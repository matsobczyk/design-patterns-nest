export class LiveTV {
  private personsWatching: PersonWatching[] = [];

  subscribe(personWatching: PersonWatching) {
    this.personsWatching.push(personWatching);
  }

  unsubscribe(personWatching: PersonWatching) {
    this.personsWatching = this.personsWatching.filter(
      (e) => personWatching.id === e.id,
    );
  }

  notify() {
    this.personsWatching.map((personWatching) => {
      personWatching.update();
    });
  }
}

export class PersonWatching {
  constructor(public readonly id: number) {}
  update() {
    console.log(`Person ${this.id}`);
  }
}
