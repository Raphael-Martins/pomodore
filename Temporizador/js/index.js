import Timer from "./timer"
import { Controls } from "./controls"

const buttonPlay = document.querySelector(`.play`)
const buttonPause = document.querySelector(`.pause`)
const buttonStop = document.querySelector(`.stop`)
const buttonSet = document.querySelector(`.set`)
const buttonSoundOn = document.querySelector(`.sound-on`)
const buttonSoundOff = document.querySelector(`.sound-off`)
const minutesDisplay = document.querySelector(`.minutes`)
const secondsDisplay = document.querySelector(`.seconds`)
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

const timer = Timer({
  timerTimeOut,
  minutesDisplay,
  secondsDisplay,
  resetControls,
})

const controls = Controls({ buttonPause, buttonPlay, buttonSet, buttonStop })

buttonPlay.addEventListener(`click`, () => {
  controls.buttonPlayClick()
})
buttonPause.addEventListener(`click`, () => {
   controls.buttonPauseClick()
  clearTimeout(timerTimeOut)
})

buttonStop.addEventListener(`click`, () => {
  resetControls()
  timer.resetTimer()
})

buttonSoundOn.addEventListener(`click`, () => {
  buttonSoundOn.classList.add(`hide`)
  buttonSoundOff.classList.remove(`hide`)
})
buttonSoundOff.addEventListener(`click`, () => {
  buttonSoundOff.classList.add(`hide`)
  buttonSoundOn.classList.remove(`hide`)
})

buttonSet.addEventListener(`click`, () => {
  minutes = prompt(`Quantos minutos?`) || minutes
  timer.updateTimerDisplay(minutes, 0)
})
