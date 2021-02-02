// Calculator
// Addition
function add(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    document.getElementById('reslut').innerHTML = parseInt(num1) + parseInt(num2) ;
}
// Subtraction
function sub(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    document.getElementById('reslut').innerHTML = parseInt(num1) - parseInt(num2) ;
}
// Multipale
function multi(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    document.getElementById('reslut').innerHTML = parseInt(num1) * parseInt(num2) ;
}
// Division
function divi(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    document.getElementById('reslut').innerHTML = parseInt(num1) / parseInt(num2) ;
}