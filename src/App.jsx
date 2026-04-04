import { useState } from 'react'
import './App.css'

const RESPONSES = [
  { text: "Signs point to yes!", good: true },
  { text: "Outlook is bright!", good: true },
  { text: "Definitely yes!", good: true },
  { text: "Without a doubt!", good: true },
  { text: "You can count on it!", good: true },
  { text: "It is certain!", good: true },
  { text: "As I see it, yes!", good: true },
  { text: "Most likely!", good: true },
  { text: "Reply hazy, try again", good: null },
  { text: "Ask again later", good: null },
  { text: "Cannot predict now", good: null },
  { text: "Concentrate and ask again", good: null },
  { text: "Don't count on it", good: false },
  { text: "My sources say no", good: false },
  { text: "Outlook not so good", good: false },
  { text: "Very doubtful", good: false },
  { text: "Not a chance!", good: false },
]

function App() {
  const [response, setResponse] = useState(null)
  const [shaking, setShaking] = useState(false)
  const [revealed, setRevealed] = useState(false)

  function shake() {
    if (shaking) return
    setShaking(true)
    setRevealed(false)
    setResponse(null)

    setTimeout(() => {
      const pick = RESPONSES[Math.floor(Math.random() * RESPONSES.length)]
      setResponse(pick)
      setShaking(false)
      setTimeout(() => setRevealed(true), 100)
    }, 700)
  }

  const answerColor =
    response === null ? '' :
    response.good === true ? '#4ade80' :
    response.good === false ? '#f87171' :
    '#facc15'

  return (
    <div className="app">
      <h1 className="title">Magic Eight Ball</h1>
      <p className="subtitle">Will you have a good day?</p>

      <button
        className={`ball ${shaking ? 'shaking' : ''}`}
        onClick={shake}
        aria-label="Shake the magic eight ball"
      >
        <div className="ball-inner">
          <div className={`answer-window ${revealed && response ? 'visible' : ''}`}>
            {response ? (
              <span className="answer-text" style={{ color: answerColor }}>
                {response.text}
              </span>
            ) : (
              <span className="eight">8</span>
            )}
          </div>
        </div>
      </button>

      <p className="hint">
        {shaking ? 'Consulting the cosmos...' : 'Click the ball to find out'}
      </p>
    </div>
  )
}

export default App
