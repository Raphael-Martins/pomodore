import { Timer } from "./timer.js"
import { Controls } from "./controls.js"
import Sound from "./sound.js"
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
  buttonSoundOn,
  buttonSoundOff,
})
const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.resetControls,
})
const sound = Sound()

buttonPlay.addEventListener(`click`, () => {
  controls.buttonPlayClick()
  timer.countdown()
  sound.buttonPress()
})
buttonPause.addEventListener(`click`, () => {
  controls.buttonPauseClick()
  timer.pause()
  sound.buttonPress()
})

buttonStop.addEventListener(`click`, () => {
  controls.resetControls()
  timer.resetTimer()
  sound.buttonPress()
})

buttonSoundOn.addEventListener(`click`, () => {
  controls.soundOn()
  sound.bgAudioPlay()
})
buttonSoundOff.addEventListener(`click`, () => {
  controls.soundOff()
  sound.bgAudioPause()
})

buttonSet.addEventListener(`click`, () => {
  timer.promptTime()
  timer.updateMinutes(timer.minutes)
  sound.buttonPress()
})
