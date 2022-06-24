
// now for the operations
const operator = prompt('Enter an operator: +, -, /, *, %');

// lets get some user input
let f_num = prompt('Please Enter a Number: ');
let s_num = prompt('Please Enter a Number: ');

    num1 = Number(f_num);
    num2 = Number(s_num);

let calculate = ['+', '-', '*', '/','%'];
let result;
if (isNaN(num1) || isNaN(num2)){
    alert("Wrong Input, Please refresh the page and try again :)");
}else
    {if(operator === '+'){
        result = num1 + num2;
    }else if(operator === '-'){
        result = num1 - num2;
    }else if(operator === '*'){
        result = num1 * num2;
    }else if(operator === '/'){
        result = num1 / num2;
    }else if(operator === '%'){
        result = num1 % num2
    }
}
document.write(num1 + operator + num2 + '=' + result);