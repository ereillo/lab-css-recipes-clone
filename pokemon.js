class Pokemon {
    constructor (name, type) {
       this.name = name
       this.type = type
    }
    
attack = () => {
    return `${name} uses ${type} attack`
}
}

class Trainer {
    

    constructor (name) {
        this.name = name;
        this.caughtPokemons = [];
    }
    catchPokemon(pokemon) {
        this.caughtPokemons.push(pokemon)}; // ESTO ES PARA METER EL PARAMETRO POKEMON DENTRO DEL OWNEDPOKEMONS ARRAY
}


let trainer = "Cynthia"

let pokemon1 = newPokemon ("Garchomp", "dragon")
let pokemon2 = newPokemon ("Lucario", "fight")
let pokemon3 = newPokemon ("Milotic", "water")

trainer.catchPokemon(pokemon1)


// class Pokemon {
//     constructor(name, type) {
//       this.name = name;
//       this.type = type;
//     }
  
//     attack() {
//       return `${this.name} uses ${this.type} attack`;
//     }
//   }
  
//   class Trainer {
//     constructor(name) {
//       this.name = name;
//       this.caughtPokemons = [];
//     }
  
//     catchPokemon(pokemon) {
//       this.caughtPokemons.push(pokemon);
//     }
//   }

  
//   // * Iteration 3 *
  
//   // create the new trainer in the variable below
//   let trainer = new Trainer("Ash");
  
//   // create 3 new pokemons in the variables below
//   let pokemon1 = new Pokemon("Lucario", "fight");
//   let pokemon2 = new Pokemon("Gengar", "ghost");
//   let pokemon3 = new Pokemon("Pikachu", "power of love");
  
//   // add the pokemons to the trainer here
//   trainer.catchPokemon(pokemon1);
//   trainer.catchPokemon(pokemon2);
//   trainer.catchPokemon(pokemon3);
  
//   // TEST 1
//   console.log(
//     "*** TEST 1. Should print the name of trainer and amount of pokemons (3) ***"
//   );
//   console.log(
//     `${trainer.name} has caught ${trainer.caughtPokemons.length} Pokemons!`
//   );
  
//   // TEST 2
//   console.log("*** TEST 2. Should print each of the three pokemon attacking ***");
//   for (let eachPokemon of trainer.caughtPokemons) {
//     let attackMessage = eachPokemon.attack();
//     console.log(attackMessage);
//   }