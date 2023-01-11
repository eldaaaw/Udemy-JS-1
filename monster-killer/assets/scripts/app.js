const   ATTACK_VALUE = 10;
const   MONSTER_ATTACK_VALUE = 15 ;
const   STRONG_ATTACK_VALUE = 18;
const   HEAL_VALUE = 20;

const moodAttack = "";
const moodStrongAttack = "";
const enterdValueNumber = parseInt(prompt("Enter a Value: "));

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

adjustHealthBars(chosenMaxLife);

function endRound(){
    const initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    60
    if(currentPlayerHealth <= 0 && hasBounusLife){
        hasBounusLife = false;
        removeBonusLife();
        currentPlayerHealth - initialPlayerHealth;
        setPlayerHealth(initialPlayerHealth )
        alert("Your bounus live saved you!")
    }

    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0){
        alert("You Won!");
        reset();
    }
       else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0  ){
        alert("Drow")
        reset();
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0){
        
        alert("Try Again");
        reset();
    }

}

function attackMonster(mode){
    const damege = dealMonsterDamage(mode);
    currentMonsterHealth -= damege;
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

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click',healPlayerHandler );

