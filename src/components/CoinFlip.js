let heads = 0;
let tails = 0;
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");
let winnerText = document.querySelector("#winner");
let betButton = document.querySelector("#bet-button");
let textBox = document.getElementById("Bet").value;
let flipClick = 0;
let headsSelected = document.getElementById("checkboxHeads").checked;
let tailsSelected= document.getElementById("checkboxTails").checked;

flipBtn.addEventListener("click", () => {
    let even = 0;
    let randInt = Math.round(Math.random()*100);
    let i = randInt
    coin.style.animation = "none";
    document.querySelector(".winner-text").textContent = "";
    if(i%2 == even){
        setTimeout(function(){
            coin.style.animation = "spin-heads 3s forwards";
        }, 100);
        heads++;
    }
    else{
        setTimeout(function(){
            coin.style.animation = "spin-tails 3s forwards";
        }, 100);
        tails++;
    }
    setTimeout(updateStats, 3000);
    flipClick++;

    if (flipClick == 3){
        disableButton();
        setTimeout(8000);
    }

    async function delayedGreeting(){
        await sleep(10800);
        if(flipBtn.disabled){
            delayedGreeting();
            setTimeout(8000);
            if(heads > tails && (headsSelected = true)){
                winnerText = "Winner: Heads! You Win!"
                document.querySelector(".winner-text").textContent = winnerText;
            }
            else if(heads > tails && !(headsSelected = true)){
                winnerText = "Winner: Heads! You Lose!"
                document.querySelector(".winner-text").textContent = winnerText; 
            }
            else if((heads < tails) && (document.getElementById("checkboxTails").checked = true)){
                winnerText = "Winner: Tails! You Win!"
                document.querySelector(".winner-text").textContent = winnerText;
            }
            else{
                winnerText = "Winner: Tails! You Lose!"
                document.querySelector(".winner-text").textContent = winnerText;
            }
        }
    }
      
    delayedGreeting();
});


function updateStats(){
    document.querySelector("#heads-count").textContent = `Heads: ${heads}`;
    document.querySelector("#tails-count").textContent = `Tails: ${tails}`;
}

function disableButton(){
    flipBtn.disabled = true;
    return;
}
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

function formdata(){
betButton.addEventListener("click",() =>{
    // Had trouble integrating Contract with our UI, just hard coded contract address into it
    alert("Your bet amount has been recoreded and sent to contract 0xe3c2ce283c7da77708f63e91ce2b3ce8d27d9682."); 
    if(textBox == "hello"){
    console.log("something in box");
    console.log(textBox);
    }


});
}
resetBtn.addEventListener("click",() => {
    coin.style.animation = "none";
    heads = 0;
    tails = 0;
    flipClick = 0;
    flipBtn.disabled = false;
    winnerText = 0;
    document.getElementById("checkboxHeads").checked = false;
    document.getElementById("checkboxTails").checked = false;
    updateStats();
});
