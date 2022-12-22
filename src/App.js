import React, { useState } from "react"
import "./App.css"
import LightSwitch from "./components/LightSwitch"

const App = () => {
  const [lightSwitchStatus, setLightSwitchStatus] = useState("off")

  const handleClick = () => {
    lightSwitchStatus === "off" ? setLightSwitchStatus("on") : setLightSwitchStatus("off")
  }

  return (
    <>
      <h1>Lightbulb Challenge</h1>
      <LightSwitch 
      handleClick={handleClick} 
      lightSwitchStatus={lightSwitchStatus}
      />
    </>
  )
}

export default App
