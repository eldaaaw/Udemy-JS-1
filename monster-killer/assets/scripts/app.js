const   ATTACK_VALUE = 10;
const   MONSTER_ATTACK_VALUE = 15 ;
const   STRONG_ATTACK_VALUE = 18;
const   HEAL_VALUE = 20;
const   LOG_EVENT_PLAYER_ATTACK = 'player attack';
const   LOG_EVENT_PLAYER_STRONG_ATTACK = 'player strong attack';
const   LOG_EVENT_HEAL = 'heal';
const   LOG_EVENT_MONSTER_ATTACK = 'monster attack';
const   LOG_GAME_OVER = 'game over';

const moodAttack = "";
const moodStrongAttack = "";
const enterdValueNumber = parseInt(prompt("Enter a Value: "));

let gmaeEvent = [];

let chosenMaxLife = enterdValueNumber;
if (isNaN(chosenMaxLife) || chosenMaxLife <= 0){
    chosenMaxLife = 100;
} 
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBounusLife = true

function reset(){
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    resetGame(chosenMaxLife)
}

function writeToLog(ev,val, monsterHealth, playerHealth){
    let logEntery = {
        event : ev,
        value: val,
        finalMonesterHelth : monsterHealth,
        finalPlayerHealth : playerHealth
    };

    if (ev === LOG_EVENT_PLAYER_STRONG_ATTACK){
        logEntery.target("Monster") 
    } else if(ev === LOG_EVENT_PLAYER_STRONG_ATTACK){
        logEntery.target("Monster") 
    } else if (ev === LOG_EVENT_MONSTER_ATTACK){
        logEntery.target("Player") 
    } else if (ev === LOG_EVENT_HEAL){
        logEntery.target("Player") 
    } else if (ev === LOG_GAME_OVER){
        logEntery = {
            event : ev,
            value: val,
            finalMonesterHelth : monsterHealth,
            finalPlayerHealth : playerHealth
        }
    }
    log.push(logEntery);

}

adjustHealthBars(chosenMaxLife);

function endRound(){
    const initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    writeToLog(LOG_EVENT_MONSTER_ATTACK,
        playerDamage,
        currentMonsterHealth,
        currentPlayerHealth);
    
    if(currentPlayerHealth <= 0 && hasBounusLife){
        hasBounusLife = false;
        removeBonusLife();
        currentPlayerHealth - initialPlayerHealth;
        setPlayerHealth(initialPlayerHealth )
        alert("Your bounus live saved you!")
    }

    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0){
        alert("You Won!");
        writeToLog(LOG_GAME_OVER,
            "player Won",
            currentMonsterHealth,
            currentPlayerHealth);
    }
       else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0  ){
        alert("Drow")
        writeToLog(LOG_GAME_OVER,
            "A Drow",
            currentMonsterHealth,
            currentPlayerHealth);
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0){
        
        alert("Try Again");
        writeToLog(LOG_GAME_OVER,
            "Monster Won",
            currentMonsterHealth,
            currentPlayerHealth);
    } 
    reset();
    
}

function attackMonster(mode){
    const damege = dealMonsterDamage(mode);
    currentMonsterHealth -= damege;
    let logEvent;
    endRound();
    
}

function attackHandler(){
    attackMonster(ATTACK_VALUE);
}

function strongAttackHandler(){
    attackMonster(STRONG_ATTACK_VALUE);
}

function healPlayerHandler(){
    let healValue;
    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE){
        alert("Can not Heal");
        healValue = chosenMaxLife - currentPlayerHealth;
    } else {
        healValue = HEAL_VALUE
    }
    increasePlayerHealth(HEAL_VALUE);
    currentPlayerHealth += HEAL_VALUE
    endRound();
}

function printLogHandler(){
    console.log(log)
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click',healPlayerHandler );
logBtn.addEventListener('click', printLogHandler);

