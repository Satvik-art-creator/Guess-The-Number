const select = (query) => document.querySelector(query);
let input =  select(".form .input input");
let won =  select(".won");
let wonMess = select(".won h1");
let form =  select(".form");
let errorMsg = select(".input-error-check");
let hint = select('.hint p');
let answer = Math.ceil(Math.random() * 99);
// console.log(answer);
let trial = 0;

select("#check").addEventListener('click', () => {
    if (!Number(input.value) || input.value <= 0 || input.value >= 100) errorMsg.classList.add('show'); 
    else {
        errorMsg.classList.remove('show')
       
        trial++;
        // console.log(trial);

        let inputNumber = Number(input.value); // this is the user's entered number

        if (inputNumber > answer) {
            hint.innerHTML = "you need to guess a <span>Smaller</span> number";
        }
        else if (inputNumber < answer) {
            hint.innerHTML = "you need to guess a <span>Greater</span> number";
        }
        if (inputNumber === answer) {
            won.classList.add("show");
            form.classList.add("hide");

            if(trial === 1){
                wonMess.innerHTML = `<strong>NOICE!! </strong>😎 <br> You guessed the number in ${trial} attempt Only`;
            } else if(trial === 2){
                wonMess.innerHTML = `<strong>GOOD! </strong>😃 <br> You guessed the number in ${trial} attempts`;
            }else{
                wonMess.innerHTML = `You guessed the number in ${trial} attempts`;
            }
        }
        input.value = '';
    }
})

select("#replay").addEventListener('click', () => {
    answer = Math.ceil(Math.random() * 99);
    trial = 0;
    won.classList.remove("show");
    form.classList.remove("hide");
    hint.innerHTML = "Guess a number between 1 & 100. <br>  Hints will appear later on!!!";
})