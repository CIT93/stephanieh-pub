const showOnPage = function (text) {
    let newParagraph = document.createElement("p")
    newParagraph.innerHTML = text
    let outputDiv = document.getElementById("output")
    outputDiv.append(newParagraph)
}
// DinnerDecison function with objects
let factors = {
    time: 1800,
    amLazy: true,
    amHungry: false,

    dinnerDecision: function (_time, _amHungry, _amLazy) {
        if (this.time <= 1700 && this.time >= 1900 && this.amHungryamHungry && this.amLazy) {
        showOnPage('It is time for dinnner, you should order takeout')
        } else if (this.amHungry = false) {
            showOnPage('You are not hungry, so you should not eat regardless')
        } else {
            showOnPage('It is dinner time and you should cook at home')
        }
    },

}
factors.dinnerDecision(1200, false, true)
showOnPage(dinnerDecision)

