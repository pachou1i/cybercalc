function randomInt (max) { //целочисленный рандомайзер
    let min = 1;
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 

}


function calculate (event) {
    event.preventDefault();
    let armor = armorForm.value;
    let hit = hitForm.value;
    let damage = damageForm.value;
    let shots = [];
    let totalDamage = 0;
    let crit = 0;
    let i = 0;
    for (i = 0; i < hit; i++) { //записан массив результатов кубов с максимальным значением damage в кол-ве hit
        shots.push(randomInt(damage));
       
    }
    for (i in shots) {
        console.log("Выпал куб: " + shots[i] + " Броня: " + armor) //хроника кубов в консоли
        if (shots[i] == damage) {
            crit ++; //считаем кол-во кубов для крита
        }

        if (shots[i] > armor){
            let dif = shots[i] - armor; //вычисляем разницу брони и урона 1 куба
            totalDamage =+  dif //сохраняем в итоговый урон
        }
        armor --; //каждый выстрел броня понижается на 1
        if (armor < 0) {
            armor = 0
        }
        console.log("Урона нанесено ВСЕГО: " + totalDamage);
        console.log("Осталось брони: " + armor);
        
    }

        let h1Total = document.getElementById("h1Total");
        let totalDamageForm = document.createElement('h2');
        totalDamageForm.innerHTML = "Итого, урона нанесено: " + totalDamage;

        let totalArmorForm = document.createElement('h2');
        totalArmorForm.innerHTML = "Осталось брони: " + armor

        h1Total.append(totalDamageForm);
        h1Total.append(totalArmorForm);

        if (crit > 1) {
            let critForm = document.createElement('img');
            let critAlertForm = document.createElement('p');
            critForm.src = "critical-role-crit-role.gif"
            critAlertForm.innerHTML = " КРИИИИИТ "
            h1Total.append(critAlertForm);
            h1Total.append(critForm);
        }
        
       armorForm.value = "";
       hitForm.value = "";
       damageForm.value = "";




    //console.log("Максимальных чисел в броске: " + crit) 



    
  
}











//inputForm.addEventListener('click',
//let inputForm = document.createElement('input');
const armorForm = document.getElementById('armor');
const hitForm = document.getElementById('hit');
const damageForm = document.getElementById('damage');
const calcBtn = document.getElementById('calc');

calcBtn.addEventListener('click', calculate)
