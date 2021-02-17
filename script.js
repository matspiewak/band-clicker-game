
var hash = objectHash.sha1({foo: 'bar'});
console.log(hash);

console.log(hash("test"))

class GameStatus{
  fameShop = {};  //! \/
  moneyShop = {}; //! Dodać pobieranie z local storage

  newGame = () => {
    document.cookie = "fame=0";
    document.cookie = "money=0";

    this.fameShop = {
      fans: 0,
      groupies: 0,
      managers: 0,
    }
    this.moneyShop = {
      djSetSwitches: 0,
      vinyl: 0,
      silverVinyl: 0,
      goldVinyl: 0
    }
    console.log(fameShop.fans);
  }
}
class Main{
  constructor() {
    this.gameStatus = new GameStatus();
  }
  readCookie = (name) => {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  };
  addFame = () => {
    fame=parseInt(fame)+this.gameStatus.fameShop.fans;
    console.log("fame: " +this.gameStatus.fameShop.fans);
  };
  addMoney = () => {
    money=parseInt(moneyPerClick)+moneyShop;
    console.log("money: " + money);
  };
}
const game = new GameStatus();
const main = new Main();

if (main.readCookie("fame") === null && main.readCookie("money") === null) {
  newGame();
}

var money = main.readCookie("money");
var fame = main.readCookie("fame");

test = () => {
  main.addFame();
}

changeStage = () => {
  if (document.getElementById("mainStage").classList.contains("fame-div")) {
    console.log(document.getElementById("mainStage").classList);
    document.getElementById("mainStage").classList.toggle("money-div");
  } else {
    console.log(document.getElementById("mainStage").classList);
    document.getElementById("mainStage").classList.toggle("fame-div")
  }
};




// increaseValue = () => {
//   if ((document.getElementById("mainStage").classList.contains("money-div"))) addMoney();
//   else addFame();
// };

// submit = () => {
//   document.cookie = "fame=" + fame;
//   document.cookie = "money=" + money;
// };


