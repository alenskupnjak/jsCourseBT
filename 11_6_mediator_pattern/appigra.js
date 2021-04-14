function createId() {
  const S4 = function() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  }
  
  return (
    S4() +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    S4() +
    S4()
  )
}

function Novice(name) {
  this.name = name
  this.hp = 100
  this.id = createId()
  this.party = null
}

Novice.prototype.attack = function(target, hp) {
  target -= hp
  return this
}

const roy = new Novice('roy')
const ben = new Novice('ben')
const lucy = new Novice('lucy')
const sally = new Novice('sally')

function Party(leader, ...members) {
  this.id = createId()
  this.leader = leader
  this.members = members
}

function Game(options) {
  this.parties = {}
  if (options) {
    // do stuff
  }
}

Game.prototype.createParty = function(leader, ...members) {
  const party = new Party(leader, ...members)
  this.parties[party.id] = party
  leader.party = party
}

Game.prototype.removeParty = function(leader) {
  delete this.parties[leader.party.id]
  leader.party = null
}

const game = new Game()
game.createParty(roy, ben, lucy)

console.log(game);

roy.attack(20,10)
console.log(roy);
console.log(ben)
