let userInput = document.getElementById("val");
let checkval = document.getElementById("check");
let retry = document.getElementById("retry");
let rv = document.getElementById("decision");
let mode = document.getElementById("mode");
let random_var = Math.floor(Math.random()*101);
let tries;
let flag = false;

mode.addEventListener("click", function(event){
    if(event.target.tagName === "BUTTON" && flag === false){
        let vid = event.target.id;
        if (vid === "btn-ez") {
            tries = 9;
            rv.innerHTML = "Mode: Easy";
        } else if(vid === "btn-med"){
            tries = 7;
            rv.innerHTML = "Mode : Medium";
        } else if(vid === "btn-hrd"){
            tries = 5;
            rv.innerHTML = "Mode : Hard";
        } else if(vid === "btn-xtr"){
            tries = 3;
            rv.innerHTML = "Mode : Extreme";
        } else if(vid === "btn-god"){
            tries = 0;
            rv.innerHTML = "Mode : God";
        }
    }
    rv.style.cssText = "color: #fff; font-size: 45px; text-align: center;"
    flag = true;
    mode.style.cssText = "display:none;";
});

checkval.addEventListener("click", function(){
    if(userInput.value < 100 && userInput.value > 0 && flag === true){
        if (tries > 0) {
            if(userInput.value == random_var){
                rv.innerHTML = "Correct Answer!!<br>You win!!"
                rv.style.cssText = "color: #fff; font-size: 45px; text-align: center;"
                checkval.disabled = true;
                retry.innerText = "Play Again?";
                retry.style = "width:100px";
                userInput.disabled = true;
            }
            else if(userInput.value < random_var){
                rv.innerHTML = "Enter Greater Value <br> Try Again!! " + tries-- + " Chance Left";
                rv.style.cssText = "color: #fff; font-size: 45px; text-align: center;"
                userInput.value = ""
            }
            else if(userInput.value > random_var){
                rv.innerHTML = "Enter Smaller Value <br> Try Again!! " + tries-- + " Chance Left";
                rv.style.cssText = "color: #fff; font-size: 45px; text-align: center;"
                userInput.value = ""
            }
        }
        else if(tries == 0 && userInput.value == random_var){
            rv.innerHTML = "Correct Answer!!<br>You win!!"
            rv.style.cssText = "color: #fff; font-size: 45px; text-align: center;"
            checkval.disabled = true;
            retry.innerText = "Play Again?";
            retry.style = "width:100px";
        }
        else{
            rv.innerHTML = random_var + " is correct answer<br>You Lose!!"
            rv.style.cssText = "color: #fff; font-size: 45px; text-align: center;"
            retry.innerText = "Play Again?";
            retry.style = "width:100px";
            checkval.disabled = true;
            userInput.disabled = true;
        }
    }
    else{
        if (flag === false) {
            rv.innerHTML = "Choose which mode you want to play!";
            rv.style.cssText = "color: #fff; font-size: 45px; text-align: center;"
        } else {   
            rv.innerHTML = "Enter Valid Input";
            rv.style.cssText = "color: #fff; font-size: 45px; text-align: center;"
        }
    }
});

retry.addEventListener("click", ()=>{
        location.reload();
});
