export function Controls({ buttonPause, buttonPlay, buttonSet, buttonStop }) {
  function resetControls() {
    buttonPlay.classList.remove(`hide`)
    buttonPause.classList.add(`hide`)
    buttonStop.classList.add(`hide`)
    buttonSet.classList.remove(`hide`)
  }
  function buttonPlayClick() {
    buttonPlay.classList.add(`hide`)
    buttonPause.classList.remove(`hide`)
    buttonSet.classList.add(`hide`)
    buttonStop.classList.remove(`hide`)
  }
  function buttonPauseClick() {
    buttonPause.classList.add(`hide`)
    buttonPlay.classList.remove(`hide`)
  }
  return { resetControls, buttonPauseClick, buttonPauseClick, buttonPlayClick }
}
