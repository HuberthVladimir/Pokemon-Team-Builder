import React from 'react'
import { Delete } from '../../atoms/delete'
import { Confirm } from '../../atoms/confirm'
import './style.scss'

export const ConfigButtons = () => {
   return (
      <div className="configButtons">
         <Delete />
         <Confirm />
      </div>
   )
}
