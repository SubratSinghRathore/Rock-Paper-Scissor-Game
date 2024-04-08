// when user click it select user value and run two function scrolling images and second selecting random value to match with user value
let user = "0";
let click0 = document.querySelectorAll(".box")[0]
click0.addEventListener("click", () => {
    user = "stone";
    scroll()
    select()

    let j = document.getElementsByClassName("winner")[0]
    j.style.visibility = "hidden"
})
let click1 = document.querySelectorAll(".box")[1]
click1.addEventListener("click", () => {
    user = "paper";
    scroll()
    select()

    let j = document.getElementsByClassName("winner")[0]
    j.style.visibility = "hidden"
})
let click2 = document.querySelectorAll(".box")[2]
click2.addEventListener("click", () => {
    user = "scissor"
    scroll()
    select()

    let j = document.getElementsByClassName("winner")[0]
    j.style.visibility = "hidden"
})

var link = "null";
let computerValue = 0;
let playerValue = 0;
function select() {
    let num = Math.random();
    let i = "0";
    let z = "";
    link = "";
    if (num < 0.33) {
        i = "stone"
        link = "<img src='https://www.pngitem.com/pimgs/m/226-2260873_transparent-rock-paper-scissors-png-png-download.png'>"
    }
    else if (num < 0.66 && num > 0.33) {
        i = "paper";
        link = "<img src='https://media.geeksforgeeks.org/wp-content/uploads/20210705223645/paper.jpeg'>"
    }
    else {
        i = "scissor";
        link = "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4KAZtQUpeqelxjO89TJxMfAFtWsX1SCIwCXNaY3HNhfKSy5WTZKEF4K5nWX7upL5NvKo&usqp=CAU'>"
    };

    console.log(user);
    console.log(i);

    
    if (user === "stone" && i === "paper") {
        let j = document.getElementsByClassName("winner")[0];
        setTimeout(() => {
            j.innerHTML = "You Lost!";
            j.style.visibility = "visible";
            let print = document.getElementsByClassName("computerOutput")[0];
            computerValue++;
            print.innerHTML = computerValue;
        }, 1400);
    }
    else if (user === "stone" && i === "scissor") {
        let j = document.getElementsByClassName("winner")[0];
        setTimeout(() => {
            j.innerHTML = "You Win!";
            j.style.visibility = "visible";
            let print = document.getElementsByClassName("playerOutput")[0];
            playerValue++;
            print.innerHTML = playerValue;
        }, 1400);
    }
    else if (user === "paper" && i === "scissor"){
        let j = document.getElementsByClassName("winner")[0];
        setTimeout(() => {
            j.innerHTML = "You Lost!";
            j.style.visibility = "visible";
            let print = document.getElementsByClassName("computerOutput")[0];
            computerValue++;
            print.innerHTML = computerValue;
        }, 1400);
    }
    else if (user === "paper" && i === "stone"){
        let j = document.getElementsByClassName("winner")[0];
        setTimeout(() => {
            j.innerHTML = "You Win!";
            j.style.visibility = "visible";
            let print = document.getElementsByClassName("playerOutput")[0];
            playerValue++;
            print.innerHTML = playerValue;
        }, 1400);
    }
    else if (user === "scissor" && i === "stone"){
        let j = document.getElementsByClassName("winner")[0];
        setTimeout(() => {
            j.innerHTML = "You Lost!";
            j.style.visibility = "visible";
            let print = document.getElementsByClassName("computerOutput")[0];
            computerValue++;
            print.innerHTML = computerValue;
        }, 1400);
    }
    else if (user === "scissor" && i === "paper"){
        let j = document.getElementsByClassName("winner")[0];
        setTimeout(() => {
            j.innerHTML = "You Win!";
            j.style.visibility = "visible";
            let print = document.getElementsByClassName("playerOutput")[0];
            playerValue++;
            print.innerHTML = playerValue;
        }, 1400);
    }
    else{
        let j = document.getElementsByClassName("winner")[0];
        setTimeout(() => {
            j.innerHTML = "draw!";
            j.style.visibility = "visible";
            
        }, 1400);
    }
}

//function to run random images

async function scroll() {
    await speedScroll1();
    await speedScroll2();
    await speedScroll3();
    await speedScroll4();
    await speedScroll5();
    await speedScroll6();
}
function speedScroll1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let t = document.getElementsByClassName("display")[0]
            t.innerHTML = `<img class='scrollingImg' src="https://www.pngitem.com/pimgs/m/226-2260873_transparent-rock-paper-scissors-png-png-download.png">`;
            resolve("sucess");
        }, 200);

    })
}
function speedScroll2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let t = document.getElementsByClassName("display")[0]
            t.innerHTML = `<img class='scrollingImg' src="https://media.geeksforgeeks.org/wp-content/uploads/20210705223645/paper.jpeg">`;
            resolve("sucess");
        }, 200);

    })
}
function speedScroll3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let t = document.getElementsByClassName("display")[0]
            t.innerHTML = `<img class='scrollingImg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4KAZtQUpeqelxjO89TJxMfAFtWsX1SCIwCXNaY3HNhfKSy5WTZKEF4K5nWX7upL5NvKo&usqp=CAU">`;
            resolve("sucess");
        }, 200);

    })
}
function speedScroll4() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let t = document.getElementsByClassName("display")[0]
            t.innerHTML = `<img class='scrollingImg' src="https://www.pngitem.com/pimgs/m/226-2260873_transparent-rock-paper-scissors-png-png-download.png">`;
            resolve("sucess");
        }, 200);

    })
}
function speedScroll5() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let t = document.getElementsByClassName("display")[0]
            t.innerHTML = `<img class='scrollingImg' src="https://media.geeksforgeeks.org/wp-content/uploads/20210705223645/paper.jpeg">`;
            resolve("sucess");
        }, 200);

    })
}
function speedScroll6() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let t = document.getElementsByClassName("display")[0]
            t.innerHTML = link
            resolve("sucess");
        }, 200);

    })
}