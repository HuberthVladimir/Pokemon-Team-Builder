import React, { useContext } from 'react'
import './style.scss'
import UseAppGlobalContext from '../../../services/context'

export const InputTeam = ({ disabled = true }) => {
   const { inputText, setInputText } = useContext(UseAppGlobalContext)

   return (
      <input
         className="newTeamCreate"
         type="text"
         readOnly={disabled}
         maxLength="10"
         onChange={event => setInputText(event.target.value)}
         value={inputText}
      />
   )
}