let dinnerTime = function (actualTime) {
    if (actualTime >= 1900) {
        showOnPage('It is too Late for Dinner')
    } else if (actualTime <= 1700) {
        showOnPage('It is too early for dinner')
    }else {
        showOnPage('Yes! Its time for dinner')
    }
}
let result = dinnerTime(1800)

let guestCost = function (costPerServing, servingPerGuest) {
    let guestPays = costPerServing * servingPerGuest 
        showOnPage(`You will pay $${guestPays}`)
}
let cost = guestCost(2, 3)

let meal = function(amLazy, guestWants) {
    if (amLazy && guestWants) {
        showOnPage('We are ordering takeout')
    }else if (amLazy || guestWants) {
        showOnPage('We are cooking at home')
    } else {
        showOnPage('Flip a coin')
    }
}
let outcome = meal(true, false)



