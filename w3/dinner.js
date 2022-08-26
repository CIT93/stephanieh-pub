showOnPage ('<b>DINNER PLANS</b>')



let isTime = function (time = 1800) {
    if (dinnerTime = time >=1700 && time <= 1900) {
    showOnPage(dinnerDecision(false, true));      
    } else {
    return showOnPage('It is not dinner time.');
}
}
let dinnerDecision = function (amHungry, amLazy) {
    if (amHungry && amLazy) {
    return ('It is time for dinner, you should order takeout') 
    } else if (amHungry || amLazy)
    return ('It is time for dinner, you should cook dinner at home.') 
    else  {
    return ('It is dinner time, but you are not hungry, so you should not eat')
}
}
isTime()