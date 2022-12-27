import React, { useState } from "react"
import switchOff from "../assets/switchOff.png"
import switchOn from "../assets/switchOn.png"
import lightOn from "../assets/lightOn.png"
import lightOff from "../assets/lightOff.png"

const LightSwitch = (props) => {
  const [lightSwitchStatus, setLightSwitchStatus] = useState(switchOff)
  const [lightBulbStatus, setLightBulbStatus] = useState(lightOff)

  const handleClick = () => {
    if (lightSwitchStatus === switchOff) {
      setLightSwitchStatus(switchOn)
      setLightBulbStatus(lightOn)
    } else {
      setLightSwitchStatus(switchOff)
      setLightBulbStatus(lightOff)
    }
  }

  return (
    <>
      
      <div id="container">
        <div 
        onClick={handleClick} 
        className="lightswitch"
        style={{
          backgroundImage:`url(${lightSwitchStatus})` 
        }}
        >
        </div>
        <div
        className="lightbulb"
        style={{
          backgroundImage: `url(${lightBulbStatus})`
        }}>
        </div>
      </div>
    </>
  )
}

export default LightSwitch
