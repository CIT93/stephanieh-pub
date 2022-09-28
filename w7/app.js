const daily = [
    {
    day: 'Monday',
    time: 1200,
    amHungry: true,
    amLazy: true,
    },
    {
    day: 'Tuesday',
    time: 1100,
    amHungry: false,
    amLazy: false,
    },
    {
    day: 'Wednesday',
    time: 1900,
    amHungry: true,
    amLazy: false,
    },
    {
    day: 'Thursday',
    time: 1730,
    amHungry: true,
    amLazy: true,
    },
    {
    day: 'Friday',
    time: 1800,
    amHungry: false,
    amLazy: true,
    },
    {
    day: 'Saturday',
    time: 1830,
    amHungry: true,
    amLazy: true
    },
    {
    day: 'Sunday',
    time: 1853,
    amHungry: true,
    amLazy: false,
    }
];

let timeDecision = function (obj) {
    if (obj.time >= 1900 && obj.time <= 1700) {
    return ('It is dinner time')
} else if (obj.time <= 1900 && obj.time >= 1700) {
    return ('It is not dinner time')
} else if (obj.amHungry === false) {
    return ('You are not hungry')
}
}
let foodSource = function (obj) {
    if (obj.amLazy === true) {
        return ('You should order Takeout')
    } else if (obj.amLazy === false) {
        return  ('You should cook at home')
    }
}

const loopDaily = function (){
    daily.forEach(function (obj) {
        result.push(timeDecision(obj));
        result.push(foodSource(obj));
    })
    return result;
}
let result = []

document.querySelector('button').addEventListener('click', function () {
document.getElementById('results').innerHTML = loopDaily();
});