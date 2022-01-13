var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerHealth, playerAttack);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    // alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to fight or skip this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;        
         // Log a resulting message to the console so we know that it worked.
        console.log(`${playerName} attacked ${enemyName}. ${enemyName} now has ${enemyHealth} health remaining.`);
        if (enemyHealth <= 0) {
            window.alert(`${enemyName} has died!`);
        }
        else {
            window.alert(`${enemyName} still has ${enemyHealth} health remaining.`);
        }     
        // Remove player's health by subtracting the amount set in the enemy's attack variable
        playerHealth = playerHealth - enemyAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log(`${enemyName} attacked ${playerName}. ${playerName} now has ${playerHealth} health remaining.`);
        // check player's health
        if (playerHealth <= 0) {
            console.log(`${playerName} has died!`);
        } 
        else {
            window.alert(`${playerName} still has ${playerHealth} health remaining.`);
        }
        
    } else if(promptFight === "skip" || promptFight === "SKIP") { //if player choses to skip
        window.alert(`${playerName} chose to skip the fight!`);
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you want to skip? It will cost you 10 money.");
        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(`${playerName} has decided to skip this fight. Goodbye!`);
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
        } 
    } else {
        fight();
    }
}
// fight();

for (var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}