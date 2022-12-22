import React from "react"

const LightSwitch = (props) => {
  return (
    <>
      <button 
      type="button" 
      onClick={props.handleClick} 
      className="lightbulb"
      style={{
        backgroundColor:props.lightBulbColor
      }}
      >

      {props.lightSwitchStatus}

      </button>
    </>
  )
}

export default LightSwitch
