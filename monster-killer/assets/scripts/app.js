const   ATTACK_VALUE = 10;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;


adjustHealthBars(chosenMaxLife);

function attackHandler(){
    const damege = dealMonsterDamage(ATTACK_VALUE)
    currentMonsterHealth -= damege;
}

attackBtn.addEventListener('click', attackHandler);

