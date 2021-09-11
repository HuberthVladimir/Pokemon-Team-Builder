import React from 'react'
import './style.scss'

export const InputTeam = ({ disabled = true }) => {
   return (
      <input className="newTeamCreate" type="text" placeholder='My Team' disabled={disabled} />
   )
}