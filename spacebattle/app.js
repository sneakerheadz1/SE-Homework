// Variables
let alienArrayShips = [];
let defenderTurn = 1;
let enemyTurn = 2




// Create class for user ships    //  * **hull** - `20` * **firepower** - `5` * **accuracy** - `.7` **
class userShip  {
    constructor (hull, firepower, accuracy) {
        this.hull = hull ;
        this.firepower = firepower ;     // firepower** is the amount of damage done to the **hull** of the target with a successful hit. 
        this.accuracy = accuracy
    }
    attackAlien (){
        attacks()
    }

    attack(ship) {
        if(Math.random() <= this.accuracy) {
            ship.hull -= this.firepower;
        }
    }
}

let Defender = new userShip(20, 5, .7)
// console.log(Defender)

// function to get random integer  whole numbers 
let  RandInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// console.log(RandInt(3,6))

// function to get random integer  float numbers 
let  randFloat = (min,max) => {
    return Math.floor(Math.random()*(max-min+1)+min);
}
// console.log(randFloat(.6, .8))


// Alien Class arrays       / randomly: * hull - between `3` and `6` * firepower - between `2` and `4` * accuracy - between `.6` and `.8` 

const alienShip = [
    new userShip(RandInt(3,6), RandInt(2,4), randFloat(.6, .8)),
    new userShip(RandInt(3,6), RandInt(2,4), randFloat(.6, .8)),
    new userShip(RandInt(3,6), RandInt(2,4), randFloat(.6, .8)),
    new userShip(RandInt(3,6), RandInt(2,4), randFloat(.6, .8)),
    new userShip(RandInt(3,6), RandInt(2,4), randFloat(.6, .8)),
    new userShip(RandInt(3,6), RandInt(2,4), randFloat(.6, .8)),
]
// console.log(alienShip[0])

// for loop to push objects into empty array
for(let i = 0; i < alienShip.length; i++){
    alienArrayShips.push(alienShip[i])
    // console.log(alienShip[i])
}


// Game over function determine winner
let gameOver = () => {
    if(Defender.hull <= 0) {
        // Alien's win
        prompt("The enemy has won!" + startGame())


    } else {
        // You win
        prompt("You won!", + startGame());

    }
}

// Next move function for defender
let nextMove = () => {
    let action = prompt(" The are " + alienArrayShips.length + "  ships remaining. ", "attack/retreat");
    // console.log(alienArrayShips)
    // console.log(alienArrayShips.length) sanity checks

    action.toLowerCase();
    if(action === "attack") {
        round();
    } else if(alienArrayShips.length == 0) {
        prompt("You have retreated, come back later! ");
    } else {
        
         gameOver()
     }
}

// move for enemy ship
let enemyMove = () => {
    { // user miss
    enemyTurn == 2
        if(alienArrayShips.length > 0){
            if(alienArrayShips[0].hull > 0){
                if(Defender.hull > 0){
                    if(Math.random() <= alienArrayShips[0].accuracy){
                        console.log(Math.random() <= alienArrayShips[0].accuracy)
                        Defender.hull -= alienArrayShips[0].firepower;
                        prompt("The enemy has hit you. You have " + Defender.hull + " hull left.", "continue");
                         enemyMove()
                    }else{
                        prompt("enemy missed", "attack/retreat")
                       nextMove()
                    }
                }else{    
                    Defender.hull <= 0 
                    gameOver();
                }
            }
        }
    }
}

// Metrics for attacks
//(Math.random() < alien[0].accuracy) { console.log('You have been hit!'); } 

// start rounds of attack for Defender
let round = () => {
    // player's turn
    if(defenderTurn == 1) {
        if(Defender.hull > 0) {
            if(alienArrayShips.length > 0) {
                // console.log(alienArrayShips.length) sanity check
                // Player's attack - Checking to see if hit/miss
                if(Math.random() <= Defender.accuracy) {
                    // Defender Hit!
                    alienArrayShips[0].hull -= Defender.firepower;
                    // console.log(alienArrayShips[0].hull)  sanity check
                    prompt (" You hit the enemy ship [ " + alienArrayShips[0].hull + " ]  remaining in the hull. ", "attack/retreat");
                    // defenderTurn = 1; >> test
                    if(alienArrayShips[0].hull  >  0) {
                        // console.log(alienArrayShips[0].hull)  sanity check
                        // alienArrayShips.shift();
                        round()
                        
                    } else{
                        alienArrayShips.shift();
                        console.log(alienArrayShips)
                        console.log(alienArrayShips.length)
                        if(alienArrayShips.length == 0){
                            gameOver()
                        }else{
                            nextMove()
                        }                            
                    }
                } else { // user miss
                    enemyMove()
                
                }
            } else {
                // alien ship <= 0
                gameOver();
                
            }
        } else {
            //  Defender hull <= 0
            gameOver();
        
        }
    } 
}
// round()




// Prompt that takes user input    // Initiate start of game function
let startGame = () => {
    let startPrompt = prompt("Are you ready to start Battle Ships? ", "yes/no");
    if (startPrompt == "no" ) {
        alert("Please come back to play later")
      }else{
          let startGame= prompt("Take the first strike? ", "yes/no")
          if(startGame == "yes"){
            round();
          }else{
              alert("Game Over please come back later ")
          }
      }
}

// startGame();
// round();