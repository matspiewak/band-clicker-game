class GameStatus {
  //? test
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
  addValueOnClick = () => {
    if (!document.getElementById("mainStage").classList.contains("money-div")) {
      this.gameValues.fame += this.gameValues.fameShop.fans;
      console.log("fame: " + this.gameValues.fame);
    } else {
      this.gameValues.money += this.gameValues.moneyShop.djSetSwitches;
      console.log("money: " + this.gameValues.money);
    }
  };
  addValuePerSecond = () => {
    if (!document.getElementById("mainStage").classList.contains("money-div")) {
      this.gameValues.fame += (3*this.gameValues.fameShop.groupies
        + 6*this.gameValues.fameShop.managers);
      console.log("fame: " + this.gameValues.fame);
    } else {
      this.gameValues.money += (3*this.gameValues.moneyShop.vinyl
        +6*this.gameValues.moneyShop.silverVinyl
        +9*this.gameValues.moneyShop.goldVinyl);
      console.log("money: " + this.gameValues.money);
    }
  }
}
const game = new GameStatus();
const main = new Main();

if (localStorage.getItem("SavedState") === null) {
  game.newGame();
  console.log("new game!");
}

window.setInterval(
  (valuesOverTime = () => {
    main.gameValues.timePlayed++;
    main.addValuePerSecond();
  }),
  1000
);

//window.setInterval(increaseValue,1000);

increaseValue = () => {
  main.addValueOnClick();
};

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
