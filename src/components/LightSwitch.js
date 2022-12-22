import React from "react"

const LightSwitch = (props) => {
  return (
    <>
      <button 
      type="button" 
      onClick={props.handleClick} 
      className="lightbulb">
      {props.lightSwitchStatus}
      </button>
    </>
  )
}

export default LightSwitch
