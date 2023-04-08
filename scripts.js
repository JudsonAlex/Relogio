const hourHand =document.querySelector('.hand.hours')
const minuteHand =document.querySelector('.hand.minutes')
const secondHand =document.querySelector('.hand.seconds')



const setRotation = (element, rotationPercent) =>{
    element.style.setProperty("--rotation", rotationPercent*360)
}

const setClock = () =>{
    const currentDate = new Date()
    const mili = currentDate.getMilliseconds()/1000
    const secondsPercent = (mili + currentDate.getSeconds()) / 60
    const minutesPercent = (secondsPercent + currentDate.getMinutes()) / 60
    const hoursPercent = (minutesPercent + currentDate.getHours()) / 12
    setRotation(secondHand, secondsPercent)
    setRotation(minuteHand, minutesPercent)
    setRotation(hourHand, hoursPercent)
}

setInterval(setClock, 1000)