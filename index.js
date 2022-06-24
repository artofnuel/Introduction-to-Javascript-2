
// now for the operations.
const operator = prompt('Enter an operator: +, -, /, *, %');

// lets get some user input
let f_num = prompt('Please Enter a Number: ');
let s_num = prompt('Please Enter a Number: ');

// because all input is returned as a string, we convert the input to numbers.
    num1 = Number(f_num);
    num2 = Number(s_num);

// we then use a list to indicate the exact operations available to chose from.
let calculate = ['+', '-', '*', '/','%'];
let result;

// should the user use a value that isn't a number type... an error will be displayed.
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
// this will display the results for the user. or we can use an alert(result)
document.write(num1 + operator + num2 + '=' + result);