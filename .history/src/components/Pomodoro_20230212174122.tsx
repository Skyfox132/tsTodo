import React, { useEffect, useState } from 'react';
import timeHelper from './helpers/timeHelper';

function Pomodoro() {
  const inititalTime = 5
  const [timeLeft, setTimeLeft] = useState(inititalTime * 60)
  const [isCounting, setIsCounting] = useState(false)

  const minutes = timeHelper(Math.floor(timeLeft / 60))
  const seconds = timeHelper(timeLeft - parseInt(minutes) * 60)


  const handleStart = () => {
    setIsCounting(true)
  }
  const handlePause = () => {
    setIsCounting(false)

  }
  const handleReset = () => {
    setTimeLeft(inititalTime * 60)
    setIsCounting(false)
  }

  useEffect(()=> {
    const interval = setInterval(()=> {
      isCounting &&
        setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0))
      }, 1000)

      if(timeLeft === 0) {
        setIsCounting(false)
      }

    return ()=> {
      clearInterval(interval)
    }

  }, [timeLeft, isCounting]) 



  return (
    <div className="timer-container">
      <span className='minutes'>
        {minutes}
      </span>
      <span>:</span>
      <span className='seconds'>
        {seconds}
      </span>
      <div className='buttons'>
        {
          !isCounting ? (
          <button onClick = {handleStart}>Start</button>
          ) : (
          <button onClick = {handlePause}>Pause</button>
          )
        }
        <button onClick = {handleReset}>Reset</button>
      </div>
    </div>
  )
}

export default Pomodoro;
