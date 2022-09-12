const showOnPage = function (text) {
    let newParagraph = document.createElement("p")
    newParagraph.innerHTML = text
    let outputDiv = document.getElementById("output")
    outputDiv.append(newParagraph)
}

showOnPage ('<b>DINNER PLANS</b>')

const daily = [
    {
    time: 1200,
    amHungry: false,
    amLazy: true,
    },
    {
        time: 1100,
        amHungry: false,
        amLazy: false,
    },
    {
        time: 1900,
        amHungry: true,
        amLazy: false,
    },
    {
        time: 1730,
        amHungry: true,
        amLazy: true,
    }
];
let dinnerFactors = function (time, amHungry, amLazy) {
    if ((time >=1700 && time <= 1900), amHungry === amLazy) {
    return ('It is time for dinner, you should order takeout') 
    } else if ((time >=1700 && time <= 1900) &&  amHungry !== amLazy)
    return ('It is time for dinner, you should cook dinner at home.') 
    else  {
    return ('It is dinner time, but you are not hungry, so you should not eat')
}
}
const loopDaily = function(){
    daily.forEach(function (obj) {
        dinnerFactors();
    });
}
loopDaily()
showOnPage(dinnerFactors());