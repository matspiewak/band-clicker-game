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

if (readCookie("fame") === null) {
  document.cookie = "fame=0";
  document.cookie = "famePerClick="+1;
}
if (readCookie("money") === null) {
  document.cookie = "money=0";
  document.cookie = "moneyPerClick="+1;
}

var money = readCookie("money");
var moneyPerClick = readCookie("moneyPerClick");
var fame = readCookie("fame");
var famePerClick = readCookie("famePerClick");


addFame = () => {
  fame=parseInt(fame)+parseInt(famePerClick);
  console.log("fame: " + fame);
};

addMoney = () => {
  money+=moneyPerClick;
  console.log("money: " + money);
};

increaseValue = () => {
  if ((document.getElementById("mainStage").classList.contains("money-div"))) addMoney();
  else addFame();
};

submit = () => {
  document.cookie = "fame=" + fame;
  document.cookie = "money=" + money;
};

changeStage = () => {
  if (document.getElementById("mainStage").classList.contains("fame-div")) {
    console.log(document.getElementById("mainStage").classList);
    document.getElementById("mainStage").classList.toggle("money-div");
  } else {
    console.log(document.getElementById("mainStage").classList);
    document.getElementById("mainStage").classList.toggle("fame-div")
  }
};