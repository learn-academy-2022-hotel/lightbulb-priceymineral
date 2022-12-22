import React, { useState } from "react"
import "./App.css"
import LightSwitch from "./components/LightSwitch"

const App = () => {
  const [lightSwitchStatus, setLightSwitchStatus] = useState("off")
  const [lightBulbColor, setLightBulbColor] = useState("white")

  const handleClick = () => {
    if (lightSwitchStatus === "off") {
      setLightSwitchStatus("on")
      setLightBulbColor("yellow")
    } else {
      setLightSwitchStatus("off")
      setLightBulbColor("white") 
    }
  }

  return (
    <>
      <h1>Lightbulb Challenge</h1>
      <LightSwitch 
      handleClick={handleClick} 
      lightSwitchStatus={lightSwitchStatus}
      lightBulbColor={lightBulbColor}
      />
    </>
  )
}

export default App
