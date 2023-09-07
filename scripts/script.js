const dayOfTheWeek = document.querySelector('.day-of-week')
const UTCTimeSelector = document.querySelector('.UTC-time')
const now = new Date()

function writeDayOfTheWeek () {
    const getDayOfWeek = now.getUTCDay()
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Satuday"]
    dayOfTheWeek.innerText = dayNames[getDayOfWeek]
}




function setTime() {
    const now = new Date()
    const hour = now.getUTCHours()
    const minutes = now.getUTCMinutes()
    const seconds = now.getUTCSeconds()
    formatTime(hour, minutes, seconds)
}


function formatTime(hour, minutes, seconds) {
    if (hour < 10) {
        hour = '0' + hour
    }
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    if (seconds < 10) {
        seconds = '0' + seconds
    }
    return UTCTimeSelector.innerText = `${hour} : ${minutes} : ${seconds}` 
}

writeDayOfTheWeek()
setInterval(setTime, 1000)