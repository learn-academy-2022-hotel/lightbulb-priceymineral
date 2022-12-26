import React, { useState } from "react"

const LightSwitch = (props) => {
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
      <button 
      type="button" 
      onClick={handleClick} 
      className="lightbulb"
      style={{
        backgroundColor:lightBulbColor
      }}
      >
      {lightSwitchStatus}
      </button>
    </>
  )
}

export default LightSwitch
