

class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;

    }

}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target) {
        if( target instanceof Unit ) {
            target.res -= this.power;
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }

}


class Effect extends Card {
    constructor(name, cost, stat, mag) {
        super(name, cost);
        this.stat = stat;
        this.mag = mag;
        mag > 0 ? 
        this.text = `Raise target's ${this.stat} by ${this.mag}`:
        this.text = `Lower target's ${this.stat} by ${this.mag}`
        console.log(this.text);
    }

    play(target){
        // console.log(target);
        if(target instanceof Unit){
            if(this.stat === 'resilience'){
                target.res += this.mag;
            }
            else if(this.stat === 'power'){
                target.power += this.mag;
            }
            else{
                console.log('Target must be a Unit!');
            }
        }
    }

}


// Units
const redBelt = new Unit("Red Belt Ninja", 3, 3, 4)
const blackBelt = new Unit("Black Belt Ninja", 4, 5, 4)

console.log(redBelt);
console.log(blackBelt);

// Effects
const hardAlgo = new Effect('Hard Algorithm', 2, 'resilience', +3)
const uPromiseReject = new Effect("Unhandled Promise Rejection", 1, "resilience", -2);
const pairProgramming = new Effect("Pair Programming", 3, "power", +2);
// console.log(hardAlgo);
// console.log(uPromiseReject);
// console.log(pairProgramming);

// Play
hardAlgo.play(redBelt);
uPromiseReject.play(redBelt);
pairProgramming.play(redBelt);
redBelt.attack(blackBelt);

console.log('***********');
console.log('Battle Complete');
console.log('***********');
console.log(redBelt);
console.log(blackBelt);


