let boxs = document.querySelectorAll(".box");
let currentp = true;
let wmsg =    document.querySelector(".wmsg");
let resetbtn = document.querySelector(".reset");
let count = 0;
let winaudio = new Audio('/sound/winning.mp3');
let drawaudio = new Audio('/sound/gameover.mp3');
let btnclick= new Audio('/sound/click.mp3');
let btnclick2= new Audio('/sound/click.mp3');
let laughaudio = new Audio('/sound/laugh.mp3');
boxs.forEach((boxs) => {
  
  boxs.addEventListener("click", function () {
    count++;
   
    if (currentp) {
      btnclick.play();
      boxs.innerHTML = "X";
      document.getElementById("win").innerHTML = "Chance of player O";
      currentp = false;
    } else {
      btnclick2.play();
      boxs.innerHTML = "O";
      boxs.style.color = "red";
      document.getElementById("win").innerHTML = "Chance of Player X";
      currentp = true;
    }
    boxs.disabled = true;

    if (count > 4) {
      
      checkwin();
    }
  
  });
  
});

const enabledbtn = () => {
  for (let box of boxs) {
    box.disabled = false;
    box.innerText = " ";
  }
};

const disabledbtn = () => {
  for (let box of boxs) {
    box.disabled = true;
  }
};

function winmsg(win) {
  winaudio.play();
  laughaudio.play();
  document.getElementById("win").innerHTML = "winner is " + win;
  document.getElementById("win").style.color = "red";
  disabledbtn();
  wmsg.style.color = "red";
  document.getElementById("amin").hidden=false;
  // wmsg.classList.remove("hide");
}
const wincondi = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

function checkwin() {
  for (let pattern of wincondi) {
    // console.log(pattern[0],pattern[1],pattern[2]);
    let post1 = boxs[pattern[0]].innerText;
    let post2 = boxs[pattern[1]].innerText;
    let post3 = boxs[pattern[2]].innerText;
if (post1 != "" && post2 != "" && post3 != "") {
      if (post1 === post2 && post2 === post3) {
        winmsg(post1);
      }
    }
  }
  if (
    count === 9 &&
    !document.getElementById("win").innerHTML.includes("winner")
  ) {
    drawaudio.play();
    document.getElementById("win").innerHTML = "Game is Draw";
    document.getElementById("win").style.color = "red";
   
  }
}

// const resetgame=()=> {

// }
resetbtn.addEventListener("click", function resetgame() {
  document.getElementById("win").innerHTML = "Chance of player X";
  document.getElementById("win").style.color = "black";
  currentp = true;
  enabledbtn();
  winaudio.pause();
  laughaudio.pause();
  document.getElementById("amin").hidden=true;
});
