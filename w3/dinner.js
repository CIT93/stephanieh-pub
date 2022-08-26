showOnPage ('<b>DINNER PLANS</b>')

let isTime = function (time = 1700) {
    if (dinnerTime = time >=1700 && time <= 1900)
    return showOnPage(`It is dinner time, ${result}`)       
    else 
    return showOnPage('It is not dinner time.')
}
let value = isTime()


let dinnerDecision = function (amHungry, amlazy) {
    if (amHungry && amlazy)
    return ('order takeout')
    else if (amHungry !== amlazy)
    return ('cook dinner at home.') 
    else if (amHungry(false))
    return ('If youre not hungry, then do not eat.')
}
let result = dinnerDecision(false, false)