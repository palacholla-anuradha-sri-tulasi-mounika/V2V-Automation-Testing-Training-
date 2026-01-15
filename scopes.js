//global scopes
/*var Apple = "red";
let orange = "Orange"
const banana = "yello"
function fruit(){
    document.write(Apple)
    document.write(orange)
    document.write(banana)
}
fruit()*/
//---------------------------------------
//function scopes

/*function fruit(){
    var x = 100;
    let y = 200;
    const z = "hello"
    document.write(x)
    document.write(y)
    document.write(z)
}
fruit()*/
//---------------------------------------------
//Block scope 
function sports(){
    if (10 > 20){
        let cricket = "virat"
        var tennis = "sania"
        const ground = "games"
        document.write(cricket + "<br>")
        
        document.write(ground  + "<br>")
    }
    document.write(tennis)
}
sports()