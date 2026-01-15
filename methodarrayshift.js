//array define
// let collection = ["anu",22,true,{name:"radha"}]
// -----------------------------------------------------
//array by using the shift()
let states = ["Delhi" , "Chennai" , "pune" , "Hyderbad"]
states.shift()
document.write(states +"<br>")
// output: Chennai,pune,Hyderbad
//-------------------------------------------------------
// we have to know the length of the data
let state = ["Delhi" , "Chennai" , "pune" , "Hyderbad"]
state.shift()
document.write(state + "<br>")
document.write("length of the element = "+  state.length+ "<br>")
// we have to know the delet element in the by using shift condition
let stateing = ["Delhi" , "Chennai" , "pune" , "Hyderbad"]
newstate = stateing.shift()
document.write(stateing + "<br>")
document.write("length of the element = "+  stateing.length + "<br>")
document.write("delet of the element by using shift = "+  newstate + "<br>")