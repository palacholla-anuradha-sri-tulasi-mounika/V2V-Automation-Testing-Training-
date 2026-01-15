//Function Expression ----- one variable that have to be assign to that variable 
var a = function apple(){
    document.write("red in colour" + "<br>")
    
}
a();
//------------------------------------------------------------
//Anonymous fuction ---- if the function does not have the variable name is called ananymous function
var b = function(){
    document.write("This is called Anonymous function" + "<br>")
}
b();
//-----------------------------------------------------------------
//function with parameters and return value
// example 1
function score (a,b){
    return (a + b + "<br>")
}
document.write(score(10,20))
// example 2
// same function with different arguments
function score (a,b){
    return (a + b + "<br>")
}
document.write(score(10,20))
document.write(score(125,662))
document.write(score(999,256))
//example 3
function game(x,y){
    return document.write("I like"+ x + "and "+ y + "<br>")
}
game("football","cricket")
//---------------------------------------------------------------------
// one programe with example ----> function with return value
var username = prompt("please enter your name")
function guest(myfriend){
    return document.write("hello welcome"+ myfriend + "<br>")
}
guest(username)


