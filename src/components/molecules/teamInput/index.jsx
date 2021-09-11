import React from 'react'
import { InputTeam } from '../../atoms/inputTeam'
import { Pencil } from '../../atoms/Pencil'
import './style.scss'

export const TeamInput = () => {
   return (
      <div className="inputMyTeamLabel">
         <InputTeam disabled={false} />
         <Pencil className="pencil" />
      </div>
   )
}
