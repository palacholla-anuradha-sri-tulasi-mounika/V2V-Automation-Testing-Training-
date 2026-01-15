//students Results
let Name = prompt("Please Enter Your Name");
let Marks = prompt("Enter Your marks")
switch(true){
    case Marks>90 && Marks<=100:
        result = "Great you are the topper"
    break;
    case Marks>65 && Marks<=90:
        result = "Congratulation you got First Class"
    break;
    case Marks>40 && Marks<= 65:
        result = "Congratulation you got second class "
    break;
    case Marks>30 && Marks<=40:
        result = "Congratulation you got Third Class"
    break;
    case Marks>50 :
        result= "Sorry you are failed, Better next time"
    break;
    default:
        result = "Please enter your marks"
        break;
}
document.write("Hello " + Name +  "<h2>" + result + "</h2>")