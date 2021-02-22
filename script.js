class GameStatus {
  fameShop = { //! stworzyć pusty model, setItem JSON.stringfy(obiekt), var obiekt = getItem(obiekt)
    fans: localStorage.getItem("fameshop.fans"),
    groupies: localStorage.getItem("groupies"),
    managers: localStorage.getItem("managers"),
  };
  moneyShop = {
    djSetSwitches: localStorage.getItem("djSetSwitches"),
    vinyl: localStorage.getItem("vinyl"),
    silverVinyl: localStorage.getItem("silverVinyl"),
    goldVinyl: localStorage.getItem("goldVinyl"),
  };
  gameDetails = {
    fame: localStorage.getItem('fame'),
    money: localStorage.getItem('money'),
    totalClicks: localStorage.getItem('totalClicks'),
    timePlayed: localStorage.getItem('timePlayed')
  }
  savedState = {
    fameshop: this.fameShop,
    moneyShop: this.moneyShop,
    gameDetails: this.gameDetails,
  };

  saveObject = () => {
    localStorage.setItem("SavedState", JSON.stringify(this.savedState));
  }

  newGame = () => {
    Object.keys(this.fameShop).forEach((v) => (this.fameShop[v] = 0));
    Object.keys(this.moneyShop).forEach((v) => (this.moneyShop[v] = 0));
    Object.keys(this.gameDetails).forEach((v) => (this.gameDetails[v] = 0));
    this.fameShop.fans = 1; 
    this.moneyShop.djSetSwitches = 1;
    console.log(this.savedState);
    this.saveObject();
  };
}
class Main {
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
    fame = parseInt(this.gameStatus.fameShop.fans);
    console.log("fame: " + fame);
  };
  addMoney = () => {
    money = parseInt(moneyPerClick) + moneyShop;
    console.log("money: " + money);
  };
}

const game = new GameStatus();
const main = new Main();

if (localStorage.getItem("SavedState") === null) {
  game.newGame();
  console.log("Started new game!");
}

var money = main.readCookie("money");
var fame = main.readCookie("fame");

test = () => {
  main.addFame();
};

save = () => {
  game.saveObject();
}



changeStage = () => {
  if (document.getElementById("mainStage").classList.contains("fame-div")) {
    document.getElementById("mainStage").classList.toggle("money-div");
  } else {
    document.getElementById("mainStage").classList.toggle("fame-div");
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
