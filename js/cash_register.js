(function(){
    
let storage = 0;
let scream = document.getElementById('screen');
let memory = 0;
function depo(){
    screen = parseFloat(scream.innerHTML);
    storage = parseFloat(storage + screen);
    memory = 0;
    scream.innerHTML = 0;
    console.log(memory);
    
}
var depoButton = document.getElementById('deposit');
depoButton.addEventListener('click', depo);

var balScreen = document.getElementById('balanceScreen');
function checkBal(){
    balScreen.innerHTML = storage;
    setTimeout(function checkTozero(){
        balScreen.innerHTML='';
    }, 5000)
}

var checkBalButton = document.getElementById('balance');
checkBalButton.addEventListener('click', checkBal)

function withdraww (){
    screen = parseFloat(scream.innerHTML);
    storage = parseFloat(storage - screen);
    memory = 0;
    scream.innerHTML = 0;
    

}
var checkWithButton = document.getElementById('withdraw');
checkWithButton.addEventListener('click', withdraww);

var clearBalanceButton = document.getElementById('CB');
function clearBalance (){
    storage = 0;
    balScreen.innerHTML= storage;
    //balScreen.innerHTML=0;
}
clearBalanceButton.addEventListener('click', clearBalance);



})();
