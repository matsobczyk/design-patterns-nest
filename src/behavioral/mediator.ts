export class Judge {
  claimant: Claimant;
  defendant: Defendant;

  constructor() {
    this.claimant = new Claimant();
    this.defendant = new Defendant();
  }

  askForClaims() {
    return this.claimant.claims();
  }
  askForLineOfDefence() {
    return this.defendant.defence();
  }
}

class Claimant {
  claims() {
    return `I want 100 dollars to repair the destroyed lawn`;
  }
}

class Defendant {
  defence() {
    return 'He has no proof that I was the one destroying his lawn!';
  }
}
