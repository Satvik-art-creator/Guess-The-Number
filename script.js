// console.log("HELLO WORLD!");

//? Glbal Variables
var generateNum = (min, max) => Math.floor(Math.random() * (max-min+1))+min;

var guessingNum = generateNum(1, 100);
// console.log(guessingNum);

var sub = document.getElementById("submit");
var playerNum = document.getElementById("input");
var show = document.getElementById("showMessage");
var re = document.getElementById("restart");
var hint = document.getElementById("clue");
var attempt = 0;
var index = 0;

function getNum(){
    //? round off decimal numbers
    if(playerNum.value - Math.round(playerNum.value) != 0){
        alert("Decimal number will round off!!");
        playerNum.value = Math.round(playerNum.value);
    }

    // console.log(playerNum.value);

    //? function to display messages
    function showMessage(x){
        if(x <= 0 || x >= 100 || x === ""){
            show.innerHTML = "Write number between 0 to 100";
            attempt += 0;
        } else if(x > guessingNum){
            // console.log("Write Lower Number!");
            show.innerHTML = "Write Lower Number!";
            hint.style.color = "rgb(255, 0, 212)";
            attempt += 1;
        } else if(x < guessingNum){
            // console.log("Write Greater Number!");
            show.innerHTML = "Write Greater Number!";
            hint.style.color = "rgb(255, 0, 212)";
            attempt += 1;
        } else{
            // console.log("Your guess is correct!!");
            attempt += 1;

            playerNum.style.display = "none";
            sub.style.display = "none";
            hint.style.color = "transparent";

            if(attempt === 1){
                show.innerHTML = `<strong>NOICE!! </strong>😎 <br> Your guess is correct!! <br> Your attempt is ${attempt} only`;
            } else if(attempt === 2){
                show.innerHTML = `<strong>GOOD! </strong>😃 <br> Your guess is correct!! <br> Your attempts are ${attempt} only`;
            }else{
                show.innerHTML = `Your guess is correct!! <br> Your attempts are ${attempt}`;
            }

            re.style.display = "block";

            re.addEventListener("click", () => {
                playerNum.style.display = "inline-block";
                sub.style.display = "inline-block";
                re.style.display = "none";
                attempt = 0;

                show.innerHTML = "";
            
                return guessingNum = Math.floor(Math.random() * 100);
            });
        }

        if(attempt >= 1) {
            hint.style.display = "inline-block";
    
            hint.addEventListener("click", () => {
                if(guessingNum <= 50){
                    alert("The Number is less than 50 or equal to 50");
                } else{
                    alert("The Number is greater than 50");
                }
            });
        } else{
            hint.style.display = "none";
        }
    }

    showMessage(playerNum.value);
    document.getElementById("form").reset();

    // console.log(attempt);
}

