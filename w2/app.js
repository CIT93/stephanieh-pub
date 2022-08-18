const showOnPage = function (text) {
    let newParagraph = document.createElement("p")
    newParagraph.innerHTML = text
    let outputDiv = document.getElementById("output")
    outputDiv.append(newParagraph)
}
// i am going to write some code to help me make some decisions regarding dinner time. 
let timeForDinner = '0100'
let amLazy = false


// first i am going to determing if it is time for dinner, i will be using military time 
showOnPage('Is it time for dinner yet?')

if (timeForDinner <= 1600) {
    showOnPage('No, Its too early for dinner.')
} else if (timeForDinner >= 1900) {
    showOnPage('No, Its too late for Dinner')
} else {
    showOnPage('YES!! Its dinner time!!!')
}

// Now i will decide if i am cooking or ordering takeout 
showOnPage('Should I cook or order take out?')
 if (amLazy >= true) {
    showOnPage('Ordering Takeout')
 } else {
    showOnPage('Cook a meal') 
 } 
 // Decideing what everyone wants for dinner 
 showOnPage('Do we agree on whats for dinner?')
let guestWants = false
let iWant = true
if (guestWants && iWant) {
    showOnPage('Get that for dinner')
} else {
    showOnPage('Flip a coin!')
}
// now i am going to decide how many people i am cooking for 
showOnPage('How Many people am I providing dinner for?')
let dinnerGuests = '3' // how many people are eating dinner with me 
let servingsNeed = (dinnerGuests * 1) // how many servings each guest would need 
 showOnPage(servingsNeed)

 // how many servings my meal is capable of feeding 
 showOnPage('How many servings can each guest eat?')
let servingsPerMeal = 6 // how many servings i can provide depending on the meal 
let servingPerGuest = (servingsPerMeal / dinnerGuests) // how many servings each guest can eat
 showOnPage(servingPerGuest)

 //Determining how much each person willpay, based on each contributing equally 
 showOnPage('How much each Guest will contribute:') 
 let pricePerMeal = 14 // amount that it cost to make or buy dinner
 let guestsPay = (servingPerGuest * pricePerMeal) // how much each individual guest should contribute 
 showOnPage('$' + guestsPay)

