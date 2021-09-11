import React, { useContext } from 'react'
import './style.scss'
import UseAppGlobalContext from '../../../services/context'

export const InputTeam = ({ disabled = true }) => {
   const { setInputText } = useContext(UseAppGlobalContext)

   return (
      <input
         className="newTeamCreate"
         type="text"
         placeholder='My Team'
         readOnly={disabled}
         maxLength="10"
         onChange={event => setInputText(event.target.value)}
      />
   )
}