let boxs = document.querySelectorAll(".box");
let currentp = true;
let wmsg = document.querySelector(".wmsg");
let resetbtn=document.querySelector(".reset");



boxs.forEach((boxs) => {
  boxs.addEventListener("click", function () {
    if (currentp) {
      boxs.innerHTML = "X";
      document.getElementById("win").innerHTML = "Chance of player O";
      currentp = false;
    } else {
      boxs.innerHTML = "O";
      boxs.style.color = "red";
      document.getElementById("win").innerHTML = "Chance of Player X";
      currentp = true;
    }
    boxs.disabled = true;
    checkwin();
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
  document.getElementById("win").innerHTML="winner is " + win;
  document.getElementById("win").style.color="red"
  disabledbtn();
  wmsg.style.color = "red";
  
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
const checkwin = () => {
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
};

// const resetgame=()=> {
  
// }
resetbtn.addEventListener('click',  function resetgame(){
  document.getElementById("win").innerHTML = "Chance of player X";
  document.getElementById("win").style.color="black"
  currentp = true;
  enabledbtn();
});
