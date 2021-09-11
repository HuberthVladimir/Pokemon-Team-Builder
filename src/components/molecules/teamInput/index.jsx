import React, { useEffect, useRef, useContext } from 'react'
import { InputTeam } from '../../atoms/inputTeam'
import { Pencil } from '../../atoms/Pencil'
import useAppGlobalContext from '../../../services/context'
import './style.scss'

//função que detecta se o click foi fora da div do input para ativar o pencil novamente
const OutsiderAlerter = (ref) => {
   const { isInputTeamActive, setIsInputTeamActive } = useContext(useAppGlobalContext)

   useEffect(() => {
      const handleClickOutside = (event) => {
         if (ref.current && !ref.current.contains(event.target)) {
            setIsInputTeamActive(false)
         }
      }

      if (!isInputTeamActive) ref.current.focus()

      document.addEventListener("mousedown", handleClickOutside);

      return () => document.removeEventListener("mousedown", handleClickOutside);

   }, [ref, setIsInputTeamActive, isInputTeamActive])
}

export const TeamInput = () => {
   const { isInputTeamActive } = useContext(useAppGlobalContext)
   const inputBox = useRef(null)
   OutsiderAlerter(inputBox)

   return (
      <div className="inputMyTeamLabel" ref={inputBox}>
         <InputTeam disabled={isInputTeamActive ? false : true} />
         <Pencil className="pencil" />
      </div>
   )
}