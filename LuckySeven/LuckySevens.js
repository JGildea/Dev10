//Joe Gildea

function rollDice() {
    return Math.ceil(Math.random() * (1 + 6 - 1));
};

function play(){
var startingBet;
var gameMoney;
var maxMoney;
var rollCount = 0;
var maxMoneyRollCount = 0;
startingBet = document.getElementById("bet").value;

if(startingBet > 0){

gameMoney = maxMoney = startingBet;
while(gameMoney > 0){
  var diceRoll = rollDice() + rollDice();
  console.log(diceRoll);
  rollCount++;
  if (diceRoll == 7){
	  gameMoney += 4;
	  if(gameMoney > maxMoney){
		  maxMoney = gameMoney;
		  maxMoneyRollCount = rollCount;
	  }
  }else{
	  gameMoney--;
  }
}
document.getElementById('play').innerText = 'Play Again?';
document.getElementById('startingBet').innerHTML = startingBet;
document.getElementById('maxMoney').innerText = maxMoney;
document.getElementById('maxMoneyRollCount').innerText = maxMoneyRollCount;
document.getElementById('rollCount').innerText = rollCount;
document.getElementById('results').style.display = 'block';
document.getElementById('resdiv').style.display = 'block';

}else{
	alert("Please Enter a number larger than zero");
}
console.log(maxMoney);
console.log(maxMoneyRollCount);
console.log(rollCount);
}
