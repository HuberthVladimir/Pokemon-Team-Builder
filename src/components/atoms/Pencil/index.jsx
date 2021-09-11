import React from 'react'
import PencilSvg from '../../../assets/Pencil.svg'

export const Pencil = ({ className }) => {

   const handleClick = () => {
      const input = document.querySelector(".newTeamCreate")
      input.focus()
   }

   return (
      <img
         className={className}
         src={PencilSvg}
         alt="edit input"
         onClick={handleClick}
      />
   )
}
