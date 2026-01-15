//array define
// let collection = ["anu",22,true,{name:"radha"}]
// -----------------------------------------------------
//array by using the pop()
let book = ["Maths","science","social"+ "<br>"]
document.write("1"+book)
// output: Maths , science ,social
//----------------------------------
let books = ["Maths","science","social" + "<br>"]
books.pop()
document.write("2"+books+ "<br>")
//output : Maths , science
//if we want to see the delet element we want to see 
let article = ["Maths","science","social" + "<br>"]
let someresult= article.pop()
document.write("3"+article + "<br>")
document.write(someresult)