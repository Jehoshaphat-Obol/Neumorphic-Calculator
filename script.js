/*This function accepts the input from
the buttons and prints the input onto the
screen */
function enter(num){
    let number;
    if(num != '+' && num != '-' && num != '*' && num != '/' && num != '00' && num != '.'){
        number = Number(num);
    }else{
        number = num;
    }
    
    let screen = document.getElementById('screen')
    screen.innerText += number;
}

/*This function uses the inbuilt eval()
function to evaluate the number printed on
the screen */
function solve(){
    let screen = document.getElementById('screen');
    let answer = eval(screen.innerHTML);

    /*The if statement is used to convert large numbers
    and small number to scientific notation in case they
    fill up the screen */
    if(answer >= 999999999 || answer <= 0.0000001){
        answer = parseFloat(answer).toExponential(4);
    }

    screen.innerText = answer;
}

/*This function is used to find the square
 value and then prints it on the screen
on the screen */
function square(){
    let screen = document.getElementById('screen');
    let answer = eval(screen.innerText);
    answer = answer * answer;

    /*The if statement is used to convert large numbers
    and small number to scientific notation in case they
    fill up the screen */
    if(answer >= 999999999 || answer <= 0.0000001){
        answer = parseFloat(answer).toExponential(4);
    }
    
    screen.innerText = answer;
}

/*This function is used to find the square root
 value and then prints it on the screen
on the screen */
function root(){
    let screen = document.getElementById('screen');
    let answer = eval(screen.innerText);

    answer = Math.sqrt(answer);
  
    /*The if statement is used to convert large numbers
    and small number to scientific notation in case they
    fill up the screen */
    if(answer >= 999999999 || answer <= 0.0000001){
        answer = parseFloat(answer).toExponential(4);
    }

    screen.innerText = answer;
    screen.innerText = screen.innerText.substring(0, 10);
}

/*This function is used to read and then
delete the last character on the screen */
function del(){
    let screen = document.getElementById('screen');
    let character = screen.innerText.length;
    
    screen.innerText = screen.innerText.substring(0, character - 1);
}

/*This function is used to reset the screen */
function clean(){
    let screen = document.getElementById('screen');
    screen.innerText = screen.innerText.substring(0, 0);
}

/*this function is used to change the theme of the calculator */
function change(){
    let mode = document.querySelector('.mode');
    let body = document.querySelector('body');
    let calculator = document.querySelector('.calculator');
    let screen = document.querySelector('.screen');
    let cases = document.querySelector('.case');
    let functions = document.querySelector('.functions');
    let computation = document.querySelector('.computation');
    let counter = Number(mode.innerText);

    /*checks turns the dark mode on and off */
    if(counter % 2 == 1){
        body.classList.add('dark');
        calculator.classList.add('dark');
        screen.classList.add('dark');
        cases.classList.add('dark');
        functions.classList.add('dark');
        computation.classList.add('dark');
        counter++;
        mode.innerText = counter;
    }else{
        calculator.classList.remove('dark');
        screen.classList.remove('dark');
        computation.classList.remove('dark');
        functions.classList.remove('dark');
        body.classList.remove('dark');
        counter++;
        mode.innerText = counter;
    }
}



// Form scripts