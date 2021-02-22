class GameStatus {
  savedState = {
    fame: 0,
    fameShop: {
      fans: 1,
      groupies: 0,
      managers: 0,
    },
    money: 0,
    moneyShop: {
      djSetSwitches: 1,
      vinyl: 0,
      silverVinyl: 0,
      goldVinyl: 0,
    },
    totalClicks: 0,
    timePlayed: 0,
  };

  saveProgress = (obj) => {
    localStorage.setItem("SavedState", JSON.stringify(obj));
  };

  newGame = () => {
    console.log(this.savedState);
    this.saveProgress(this.savedState);
  };
}
class Main {
  constructor() {
    this.gameStatus = new GameStatus();
    this.gameValuesRaw = localStorage.getItem("SavedState");
    this.gameValues = JSON.parse(this.gameValuesRaw);
  }
  addFame = () => {
    this.gameValues.fame += this.gameValues.fameShop.fans;
    console.log("fame: " + this.gameValues.fame);
  };
  addMoney = () => {
    this.gameValues.money += this.gameValues.moneyShop.djSetSwitches;
    console.log("money: " + this.gameValues.money);
  };
}
const game = new GameStatus();
const main = new Main();

if (localStorage.getItem("SavedState") === null) {
  game.newGame();
  console.log("new game!");
}

increaseValue = () => {
  if (document.getElementById("mainStage").classList.contains("money-div"))
    main.addMoney();
  else main.addFame();
};

window.setInterval(increaseValue,1000);

changeStage = () => {
  if (document.getElementById("mainStage").classList.contains("fame-div")) {
    document.getElementById("mainStage").classList.toggle("money-div");
  } else {
    document.getElementById("mainStage").classList.toggle("fame-div");
  }
};

save = () => {
  game.saveProgress(main.gameValues);
  console.log(main.gameValues);
};
