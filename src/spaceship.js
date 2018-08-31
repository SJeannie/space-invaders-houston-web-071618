class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name;
    this.crew = crew;
    this.phasersCharge = 'uncharged';
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = 'disengaged';
    crew.length ? (this.docked = false) : (this.docked = true);
    this.assignCrew();
  }

  // assignCrew() {
  //   this.crew.forEach(
  //     function(member){
  //       member.currentShip = this
  //     }.bind(this)
  //   )
  // }

  assignCrew() {
    this.crew.forEach((member) => (member.currentShip = this));
  }