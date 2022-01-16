var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//function with parameters for enemy name
function fight (enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
        // ask player if they'd like to fight or run
        var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

        // if player picks "skip" confirm and then stop the loop
        if (promptFight === "SKIP" || promptFight === "skip") {
            var confirmSkip = window.confirm("Are you sure you want to skip? It will cost 10 money.");
            // if yes, leave fight
            if (confirmSkip) {
                window.alert ("You skipped this fight!");
                // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                break;
            }
        }

        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(`${enemyName} has died! ${playerName} was awarded 20 money!`);

            // award player money for winning
            playerMoney = playerMoney + 20;

            // leave while() loop since enemy is dead
            break;
        } else {
            window.alert(`${playerName} attacked ${enemyName}! ${enemyName} has ${enemyHealth} health remaining!`);
        }

        // remove players's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;

        // check player's health
        if (playerHealth <= 0) {
            window.alert(`${playerName} has died!`);

            // leave while() loop if player is dead
            break;
        } else {
            window.alert (`${enemyName} attacked ${playerName}! ${playerName} has ${playerHealth} health remaining!`);
        }
    }
}

// fight each enemy-robot by looping over them and fighting them one at a time
// function to start a new game
var startGame = function() {
    // reset player stats
    playerHealth = 100;
    playerAttack = 12;
    playerMoney = 10;
    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it    // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
            window.alert (`Welcome to Robot Gladiators Round ${i + 1}`);

            // pick new enemy to fight based on the index of the enemyNames array
            var pickedEnemyName = enemyNames[i];

            // reset enemy health before starting a new fight
            enemyHealth = 50;
            // use debugger to pause script from running and check what's going on at that moment in the code
            // debugger;

            // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
            fight(pickedEnemyName);

            // if we're not the last enemy in the array
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                if (storeConfirm) {
                    shop();
                }
            }
            
        // if player isn't alive, stop the game
        } else {
            window.alert(`Your Robot has no more health remaining! Game Over!`);
            break;
        }
    }
    endGame();
};

var endGame = function() {
    window.alert("The game has ended. Let's see how you did!");

    // if player still alive, player wins
    if (playerHealth > 0) {
        window.alert(`Great Job! You've survived the whole game! You now have a score of ${playerMoney}.`);
    } else {
        window.alert("You've lost your robot in battle.");
    }
    var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
        //restart the game
        startGame();
    } else {
    window.alert("Thank you for playing Robot Gladiators! Please come back again soon!");
    }
}

// go to shop between battles function
var shop = function() {
    var shopOptionPromp = window.prompt(`Would you like to refill your health, upgrade your attack or leave the store? Please enter one: "REFILL", "UPGRADE" or "LEAVE" to make a choice.`);

    // use switch case to carry out action
    switch (shopOptionPromp) {
        case "refill": 
        case "REFILL": // new case
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 money.");
                
                // increase health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
        } else {
            window.alert("You don't have enough money for this purchase.");
        }
        break;

        case "upgrade":
        case "UPGRADE": // new case
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 money");

                // increase attack and decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            } else {
                window.alert("You don't have enough money for this purchase.");               
            }
            break;

        case "leave":
        case "LEAVE": // new case
            window.alert("Leaving the store.");
            break;
            default:
                window.alert("You did not pick a valid option. Try Again");

                // call shop to force player to pick a valid option
                shop();
                break;
    }
}
startGame();