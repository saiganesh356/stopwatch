import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {min: 0, sec: 0}

  startWatch = () => {
    const {sec} = this.state
    if (sec === 60) {
      this.setState(prevState => ({
        min: prevState.min + 1,
        sec: 0,
      }))
    } else {
      this.setState(prevState => ({
        sec: prevState.sec + 1,
      }))
    }
  }

  startTimer = () => {
    this.IntervalId = setInterval(this.startWatch, 1000)
  }

  clearTimeInterval = () => {
    clearInterval(this.IntervalId)
  }

  stopTimer = () => {
    this.clearTimeInterval()
  }

  resetTimer = () => {
    this.clearTimeInterval()
    this.setState({
      min: 0,
      sec: 0,
    })
  }

  render() {
    const {min, sec} = this.state

    const minutesString = min <= 9 ? `0${min}` : min
    const secondsString = sec <= 9 ? `0${sec}` : sec

    return (
      <div className="stopwatch-page">
        <div className="timer-cont">
          <h1 className="text">Stopwatch</h1>
          <div className="stopwatch-container">
            <div className="timer-heading">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="para-timer">Timer</p>
            </div>
            <div className="timing">
              <h1 className="time">
                {minutesString}:{secondsString}
              </h1>
            </div>
            <div className="btn-container">
              <button
                className="btn start"
                type="button"
                onClick={this.startTimer}
              >
                start
              </button>
              <button
                className="btn stop"
                type="button"
                onClick={this.stopTimer}
              >
                stop
              </button>
              <button
                className="btn reset"
                type="button"
                onClick={this.resetTimer}
              >
                reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
