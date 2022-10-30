/*
 initialize the count to 0
 listen for clicks on the increment button
 increment the count variable when the button is clicked
 change the count-el in the html to reflect the new count
 */
let saveEl=document.getElementById("save-el")
 let countEl =document.getElementById("count-el")  //grab the count-el element and store it in countEl variable

 console.log(countEl)
 let count=0

 function increment() {
    
    count=count+1
    countEl.textContent=count //set countEl innertext to count

 }

//  create a function called save() which logs out the count when called

function save(){

    // create variable that contains both the count and the dash seperator ie 12-
    // render the variable in the saveEl using innertext
    // NB: make sure to not delete the existing content of the paragraph
    let countStr= count +" - "
    saveEl.textContent +=countStr
     count=0
    countEl.textContent=0
      
}

console.log("let's count people on the subway")

