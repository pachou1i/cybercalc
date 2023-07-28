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



    for (i = 0; i < hit; i++) { //записываем массив результатов кубов shots с максимальным значением damage в кол-ве hit
        shots.push(randomInt(damage));
       
    }
    

    // Создание и замена отображения результата брошенных кубов
    let coubParent =  document.getElementById("coubs");
    let coubChild =  document.getElementById("coub-items");
    let ulNull = document.createElement('ul');
    ulNull.className = "coubs";
    
    coubParent.replaceChild(ulNull, coubChild);

    for (i in shots) { 
        console.log("Выпал куб: " + shots[i] + " Броня: " + armor) //хроника кубов в консоли
        if (shots[i] == damage) {
            crit ++; //считаем кол-во кубов для крита
        }

        if (shots[i] > armor){
            let dif = shots[i] - armor; //вычисляем разницу брони и урона 1 куба
            totalDamage = totalDamage + dif //сохраняем в итоговый урон
            console.log("Урона нанесено за попадание: " + dif);
        }
        if (armor > 0) {
            armor --; //каждый выстрел броня понижается на 1
        }
        console.log("Урона нанесено ВСЕГО: " + totalDamage);
        console.log("Осталось брони: " + armor);
        let li = document.createElement('li');
        li.innerHTML = shots[i];
        ulNull.append(li);
        
    }
    ulNull.id = "coub-items"
    
    console.log("________________________________");
        //Создание и замена элементов с результатами подсчета
        let totalDamageH2 = document.getElementById("totalDamage");
        let totalArmorH2 = document.getElementById("totalArmor");
        let oldTotalDamage = document.getElementById("oldTotalDamage")
        let oldTotalArmor = document.getElementById("oldTotalArmor")
        let newDamageSpan = document.createElement('span');
        let newArmorSpan = document.createElement('span');
        newDamageSpan.innerHTML = totalDamage;
        newArmorSpan.innerHTML = armor;

        totalDamageH2.replaceChild(newDamageSpan, oldTotalDamage);
        totalArmorH2.replaceChild(newArmorSpan, oldTotalArmor);
        // Создание и замена элементов для отображения крита
        let critGif = document.getElementById("critGif");
        let critChild = document.getElementById("critID");
        let critDiv = document.createElement('div');
        if (crit > 1) {
            

          
            let critAlertForm = document.createElement('p');

          
            critAlertForm.innerHTML = " КРИИИИИТ !!!"
            
            critDiv.append(critAlertForm);
        
            critGif.replaceChild(critDiv, critChild);
            critDiv.id = "critID"

        } else {
            let nullChild = document.createElement('div');
            critGif.replaceChild(nullChild, critChild);
            nullChild.id = "critID"
        }
        
        
       armorForm.value = "";
       hitForm.value = "";
       damageForm.value = "";

       newDamageSpan.id = "oldTotalDamage";
       newArmorSpan.id = "oldTotalArmor";


    //console.log("Максимальных чисел в броске: " + crit) 
  
}
const armorForm = document.getElementById('armor');
const hitForm = document.getElementById('hit');
const damageForm = document.getElementById('damage');
const calcBtn = document.getElementById('calc');


calcBtn.addEventListener('click', calculate)
