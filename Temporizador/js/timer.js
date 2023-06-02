export function Timer({ minutesDisplay, secondsDisplay, resetControls }) {
  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)
/*eu passei essa funcao aqui pra dentro do timer e chamei ela no button set, isso resolveu o problema de setar pro valor do html quando executava reset timer, sem eu ter que 
fazer varios codigos como o professor fez no buttonSet

aqui dentro ela fara a atualizacao dos minutes, algo que so uso aqui, e todas as funcoes que usarem minutes ja vao estar atualizadas 

ps:. isso me fez muita raiva*/
  function promptTime() {
    minutes = prompt(`Quantos minutos?`) || minutes
    updateTimerDisplay(minutes, 0)
  }
  function resetTimer() {
    updateTimerDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }
  function updateTimerDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, 0)
    secondsDisplay.textContent = String(seconds).padStart(2, 0)
  }
  function countdown() {
    timerTimeOut = setTimeout(() => {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      let isFinished = minutes <= 0 && seconds <= 0

      updateTimerDisplay(minutes, 0)

      if (isFinished) {
        resetControls()
        updateTimerDisplay()
        return
      }

      if (seconds <= 0) {
        seconds = 60
        --minutes
      }

      updateTimerDisplay(minutes, --seconds)

      countdown()
    }, 1000)
  }
  function updateMinutes(minutes) {
    minutes = minutes
  }
  function pause() {
    clearTimeout(timerTimeOut)
  }
  return {
    countdown,
    updateTimerDisplay,
    resetTimer,
    updateMinutes,
    pause,
    minutes,
    promptTime,
  }
}
