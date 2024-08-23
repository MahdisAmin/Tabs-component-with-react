import React from 'react'

function Tap({label,onClick,isActive}) {
  return (
      <button className={`tab ${isActive ? "active" :" "}`} onClick={onClick}>{label}</button>
  )
}

export default Tap