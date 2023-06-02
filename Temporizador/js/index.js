import { Timer } from "./timer.js"
import { Controls } from "./controls.js"
import {
  buttonPause,
  buttonPlay,
  buttonStop,
  buttonSet,
  buttonSoundOn,
  buttonSoundOff,
  minutesDisplay,
  secondsDisplay,
} from "./elements.js"

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop,
})
const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.resetControls,
})

buttonPlay.addEventListener(`click`, () => {
  controls.buttonPlayClick()
  timer.countdown()
})
buttonPause.addEventListener(`click`, () => {
  controls.buttonPauseClick()
  timer.pause()
})

buttonStop.addEventListener(`click`, () => {
  controls.resetControls()
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
  timer.promptTime()
  timer.updateMinutes(timer.minutes)
})
