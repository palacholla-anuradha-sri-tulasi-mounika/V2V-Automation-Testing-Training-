//array define
// let collection = ["anu",22,true,{name:"radha"}]
// -----------------------------------------------------
//array by using the unshift()
let states = ["Delhi" , "Chennai" , "pune" , "Hyderbad"]
states.unshift("amalpuram")
document.write(states +"<br>")
// output: amalpuram,Delhi,Chennai,pune,Hyderbad
// we can add so many elements
let stateis = ["Delhi" , "Chennai" , "pune" , "Hyderbad"]
stateis.unshift("amalpuram", 3)
document.write(stateis +"<br>")
//--------------------------------------------------------
// we have to know the length of the data
let state = ["Delhi" , "Chennai" , "pune" , "Hyderbad"]
state.unshift("amalapuram")
document.write(state + "<br>")
document.write("length of the element = "+  state.length+ "<br>")
//--------------------------------------------------------------------------
// we have to know the delet element in the by using shift condition
let stateing = ["Delhi" , "Chennai" , "pune" , "Hyderbad"]
newstate = stateing.unshift("amalpuram")
document.write(stateing + "<br>")
document.write("length of the element = "+  stateing.length + "<br>")
document.write("added of the element by using shift = "+  newstate + "<br>")