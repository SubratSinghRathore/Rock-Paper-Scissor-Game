let user = "0";
let click0 = document.querySelectorAll(".box")[0]
click0.addEventListener("click", () => {
  user = "stone";
  check()
  timer()
})
let click1 = document.querySelectorAll(".box")[1]
click1.addEventListener("click", () => {
  user = "paper";
  check()
  timer()
})
let click2 = document.querySelectorAll(".box")[2]
click2.addEventListener("click", () => {
  user = "scissor"
  check()
  timer()
})

function timer() {
  let t = document.getElementsByClassName("count")[0]
  t.innerHTML = "2";
  setTimeout(() => {
    t.innerHTML = 1;
  }, 1000)

  setTimeout(() => {
    t.innerHTML = 0;
  }, 2000)

}

function check() {
  let num = Math.random();
  let i = "0";
  if (num < 0.33) {
    i = "stone"
  }
  else if (num < 0.66 && num > 0.33) {
    i = "paper";
  }
  else {
    i = "scissor";
  }
  console.log(i)
  console.log(user)
  if (user === i) {
    let j = document.getElementsByClassName("winner")[0]
    setTimeout(() => {
      j.style.visibility = "visible"
    }, 2050);
  }
}