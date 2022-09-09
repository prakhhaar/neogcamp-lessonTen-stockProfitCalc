var initialPrice = document.querySelector("#initial-price");
var stockQuantity = document.querySelector("#stock-quantity");
var currentPrice = document.querySelector("#current-price");
var submitbutton = document.querySelector("#sumbit-btn");
var outputBox = document.querySelector("#output-box");

function calculateProfitAndLoss(initial, quantity, current){
    if(initial > current){
        var loss = (initial-current)*quantity;
        var lossPercentage = (loss/initial)*100;

        outputBox.style.color = "Red";
        showOutput("Hey, the loss is " + loss + " and the percentage is " + lossPercentage + "%");
    } else if(current > initial ) {
        var profit = (current - initial)*quantity;
        var profitPercentage = (profit/initial)*100;

        outputBox.style.color = "Green";
        showOutput("Hey, the profit is " + profit + " and the percentage is " + profitPercentage + "%");
    } else {
        showOutput("No profit, no loss.");
    }
}

function showOutput(message){
    outputBox.innerHTML = message;
}

function clickHandler(){
    var ip = Number(initialPrice.value);
    var qty = Number(stockQuantity.value);
    var curr = Number(currentPrice.value);

    calculateProfitAndLoss(ip, qty, curr);
}

submitbutton.addEventListener("click", clickHandler); 