import React, {useState} from "react"
import "./App.css"
import LightSwitch from "./components/LightSwitch"

const App = () => {
  const [switches, setSwitches] = useState([])

  const addSwitch = () => {
    setSwitches([...switches, <LightSwitch />])
  }

  const removeSwitch = () => {
    switches.shift()
    setSwitches([...switches])
  }

  return (
    <>
      <h1>Lightbulb Challenge</h1>
      <button onClick={addSwitch} >
        Let there be light
      </button>
      <button onClick={removeSwitch} >
        Let there be NO light
      </button>
      {switches.map(s => {
        return s
      })}
    </>
  )
}

export default App
