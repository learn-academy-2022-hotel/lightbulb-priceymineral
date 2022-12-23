import React, { useState } from "react"
import switchOff from "../assets/switchOff.png"
import switchOn from "../assets/switchOn.png"

const LightSwitch = (props) => {
  const [lightSwitchStatus, setLightSwitchStatus] = useState(switchOff)

  const handleClick = () => {
    if (lightSwitchStatus === switchOff) {
      setLightSwitchStatus(switchOn)
    } else {
      setLightSwitchStatus(switchOff)
    }
  }

  return (
    <>
      <div 
      onClick={handleClick} 
      className="lightbulb"
      style={{
        backgroundImage:`url(${lightSwitchStatus})` 
      }}
      >
      </div>
    </>
  )
}

export default LightSwitch
