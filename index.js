let userInput = document.getElementById("val");
let checkval = document.getElementById("check");
let retry = document.getElementById("retry");
let rv = document.getElementById("decision");
let random_var = Math.floor(Math.random()*101);
let tries = 4;

console.log(random_var);

checkval.addEventListener("click", function(){
    if(userInput.value < 100 && userInput.value > 0){
        if (tries > 0) {
            if(userInput.value == random_var){
                rv.innerHTML = "Correct Answer!!<br>You win!!"
                rv.style.cssText = "color: #fff; font-size: 50px; text-align: center;"
                checkval.disabled = true;
                retry.innerText = "Play Again?";
                retry.style = "width:100px";
                userInput.disabled = true;
            }
            else if(userInput.value < random_var){
                rv.innerHTML = "Enter Greater Value <br> Try Again!! " + tries-- + " Chance Left";
                rv.style.cssText = "color: #fff; font-size: 50px; text-align: center;";
                userInput.value = ""
            }
            else if(userInput.value > random_var){
                rv.innerHTML = "Enter Smaller Value <br> Try Again!! " + tries-- + " Chance Left";
                rv.style.cssText = "color: #fff; font-size: 50px; text-align: center;";
                userInput.value = ""
            }
        }
        else if(tries == 0 && userInput.value == random_var){
            rv.innerHTML = "Correct Answer!!<br>You win!!"
            rv.style.cssText = "color: #fff; font-size: 50px; text-align: center;"
            checkval.disabled = true;
            retry.innerText = "Play Again?";
            retry.style = "width:100px";
        }
        else{
            rv.innerHTML = random_var + " is correct answer<br>You Lose!!"
            rv.style.cssText = "color: #fff; font-size: 50px; text-align: center;"
            retry.innerText = "Play Again?";
            retry.style = "width:100px";
            checkval.disabled = true;
            userInput.disabled = true;
        }
    }
    else{
        rv.innerHTML = "Enter Valid Input";
        rv.style.cssText = "color: #fff; font-size: 50px; text-align: center;"
    }
});

retry.addEventListener("click", ()=>{
        location.reload();
});