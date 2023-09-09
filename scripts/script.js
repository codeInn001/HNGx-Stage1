const dayOfTheWeek = document.querySelector('.day-of-week')
const UTCTimeSelector = document.querySelector('.UTC-time')
const now = new Date()

function writeDayOfTheWeek() {
    const getDayOfWeek = now.getUTCDay()
    console.log(getDayOfWeek)
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Satuday"]
    dayOfTheWeek.innerText = dayNames[getDayOfWeek - 1]
}




function setTime() {
    const now = new Date()
    const utc_now = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());
    
    UTCTimeSelector.innerText = `${utc_now.getTime()}`
}


writeDayOfTheWeek()
setInterval(setTime, 1000)