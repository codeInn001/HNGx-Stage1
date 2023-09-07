const dayOfTheWeek = document.querySelector('.day-of-week')
const UTCTimeSelector = document.querySelector('.UTC-time')
const now = new Date()


const getDayOfWeek = now.getUTCDay()
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Satuday"]
dayOfTheWeek.innerText = dayNames[getDayOfWeek]



function setTime() {

    const now = new Date()
    const hour = now.getUTCHours()
    const minutes = now.getUTCMinutes()
    const seconds = now.getUTCSeconds()
    UTCTimeSelector.innerText = `${hour} : ${minutes} : ${seconds}`
}



setInterval(setTime, 1000)


console.log(getDayOfWeek, "day")