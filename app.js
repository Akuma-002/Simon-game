let gameSeq = [];
let userSeq = [];
let btns = ["orange", "green", "blue", "pink"];
let strted = false;
let level = 0;
let h2 = document.querySelector("h2");
let body = document.querySelector("body");
// let btn = document.querySelectorAll(".btn");




document.addEventListener("keypress", function(){
    if(strted == false){
        console.log("game started");
        strted = true;  
        levelup();
    }
});

function gameFlash (btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 400)
}

function userFlash (btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250)
}


function levelup (){
    userSeq = [];
        level++;
        h2.innerText = `Level ${level}`;
        let rand = Math.floor((Math.random() *4));
        let randomColor = btns[rand];
        let randombtn = document.querySelector(`.${randomColor}`);
        gameSeq.push(randomColor);
        console.log(gameSeq);
        gameFlash(randombtn);
}


function checkAns(idx){
    console.log(`current level ${level}`);
    if (userSeq[idx] === gameSeq[idx]){
        console.log("Same Colour");
        
        if(userSeq.length == gameSeq.length){
            levelup();
            setTimeout(levelup, 1500);
        }
    }
    else{
        h2.innerHTML = `Game over, your score was <b>${level}</b> <br>Press any key to start the game`;
        body.style.backgroundColor="red";
        setTimeout(function(){
            body.style.backgroundColor="white";
        }, 150)

        reset();
    }
}


function btnPres(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}


function reset(){
    strted = false;
    gameSeq = [];
    userSeq = [];
    level=0;
}


let allBtn = document.querySelectorAll(".btn");
for(btn of allBtn){
    btn.addEventListener("click", btnPres);
}








































// let container = document.querySelector(".main");
// let orange = document.querySelector(".orange");
// let green = document.querySelector(".green");
// let blue = document.querySelector(".blue");
// let pink = document.querySelector(".pink");
// let containers = document.querySelectorAll(".main");
// let oranges = document.querySelectorAll(".orange");
// let n = 3;
// container  .addEventListener("click", function (){
//     let a = Math.floor((Math.random() * 4)+1);
//     console.log(a);
    
//     if(a == 1){
//         orange.style.animation="blink 1s eses-in-out";
//         orange.classList.add("orange");
//         orange.classList.remove("active_r");
    

//     }
// });



