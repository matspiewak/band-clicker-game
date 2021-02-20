class GameStatus{
  savedState = { //saveModel
    fame: localStorage.getItem('fame'),
    money: localStorage.getItem('money'),
    fameShop: {
      fans: localStorage.getItem('fans'),
      groupies: localStorage.getItem('groupies'),
      managers: localStorage.getItem('managers'),
    },
    moneyShop: {
      djSetSwitches: localStorage.getItem('djSetSwitches'),
      vinyl: localStorage.getItem('vinyl'),
      silverVinyl: localStorage.getItem('silverVinyl'),
      goldVinyl: localStorage.getItem('goldVinyl')
    },
    totalClicks: localStorage.getItem('totalClicks'),
    timePlayed: localStorage.getItem('timePlayed')
  };

  newGame = () => {
    Object.keys(this.savedState).forEach(v => localStorage.setItem(v,0)) //? generate empty, but nested object
    console.log(this.savedState.fameShop.fans);
    // this.fameShop = {
    //   fans: localStorage.setItem('fans',1),
    //   groupies: localStorage.setItem('groupies',0),
    //   managers: localStorage.setItem('managers',0),
    // }
    // this.moneyShop = {
    //   djSetSwitches: localStorage.setItem('djSetSwitches',0),
    //   vinyl: localStorage.setItem('vinyl',0),
    //   silverVinyl: localStorage.setItem('silverVinyl',0),
    //   goldVinyl: localStorage.setItem('goldVinyl',0)
    // }
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
    fame=parseInt(fame)+parseInt(this.gameStatus.fameShop.fans);
    console.log("fame: " +fame);
  };
  addMoney = () => {
    money=parseInt(moneyPerClick)+moneyShop;
    console.log("money: " + money);
  };
}
const game = new GameStatus();
const main = new Main();

if (main.readCookie("fame") === null && main.readCookie("money") === null) {
  game.newGame();
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



