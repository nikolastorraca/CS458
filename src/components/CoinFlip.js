let heads = 0;
let tails = 0;
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");
let winnerText = document.querySelector("#winner");
let flipClick = 0;

flipBtn.addEventListener("click", () => {
    let even = 0;
    let randInt = Math.round(Math.random()*100);
    // console.log(randInt)
    let i = randInt
    coin.style.animation = "none";
    document.querySelector(".winner-text").textContent = "";
    if(i%2 == even){
        setTimeout(function(){
            coin.style.animation = "spin-heads 3s forwards";
        }, 100);
        heads++;
        // winnerText = "Winner: Heads!"
    }
    else{
        setTimeout(function(){
            coin.style.animation = "spin-tails 3s forwards";
        }, 100);
        tails++;
        // winnerText = "Winner: Tails!"
    }
    setTimeout(updateStats, 3000);
    // disableButton();
    // coinSpin();
    flipClick++;
    // console.log(flipClick);
    if (flipClick == 3){
        disableButton();
        setTimeout(8000);
    }

    async function delayedGreeting(){
        await sleep(10800);
        if(flipBtn.disabled){
            delayedGreeting();
            setTimeout(8000);
            if(heads > tails){
                winnerText = "Winner: Heads!"
            document.querySelector(".winner-text").textContent = winnerText;
        }
        else{
                winnerText = "Winner: Tails!"
            document.querySelector(".winner-text").textContent = winnerText; 
        }
     }
      }
      
      delayedGreeting();


    //     if(flipBtn.disabled){
    //         delayedGreeting();
    //         console.log("waiting");
    //         setTimeout(() => {  console.log("World!"); }, 5000000);
    //         if(heads > tails){
    //             winnerText = "Winner: Heads!"
    //         document.querySelector(".winner-text").textContent = winnerText;
    //     }
    //     else{
    //             winnerText = "Winner: Tails!"
    //         document.querySelector(".winner-text").textContent = winnerText; 
    //     }
    //  }
    
    
});





function updateStats(){
    document.querySelector("#heads-count").textContent = `Heads: ${heads}`;
    document.querySelector("#tails-count").textContent = `Tails: ${tails}`;
    // if(flipBtn.disabled){
    //     if(heads > tails){
    //         winnerText = "Winner: Heads!"
    //         document.querySelector(".winner-text").textContent = winnerText;
    //     }
    //     else{
    //         winnerText = "Winner: Tails!"
    //         document.querySelector(".winner-text").textContent = winnerText; 
    //     }
    // }
    // document.querySelector(".winner-text").textContent = winnerText;
}

function disableButton(){
    flipBtn.disabled = true;
    return;
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}
// function coinSpin(){
//     flipBtn.disabled = true;
//     setTimeout(function(){
//         flipBtn.disabled = false;
//     },3000);
// }
resetBtn.addEventListener("click",() => {
    coin.style.animation = "none";
    heads = 0;
    tails = 0;
    flipClick = 0;
    flipBtn.disabled = false;
    winnerText = 0;
    updateStats();
});
