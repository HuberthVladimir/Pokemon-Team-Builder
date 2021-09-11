import React, { useContext } from 'react'
import PencilSvg from '../../../assets/Pencil.svg'
import useAppGlobalContext from '../../../services/context'

export const Pencil = ({ className }) => {
   const { isInputTeamActive, setIsInputTeamActive, inputText } = useContext(useAppGlobalContext)

   //ao clicar no icone do lapis o foco e mudado para o campo input e o contexto global e setado como true
   const handleClick = () => {
      const input = document.querySelector('.newTeamCreate')
      setIsInputTeamActive(true)
      input.focus()
   }

   return (
      <img
         className={className}
         src={PencilSvg}
         alt="edit input"
         onClick={handleClick}
         style={{
            visibility: isInputTeamActive ? 'hidden' : 'visible',
            right: inputText < 9 ? '1rem' : '-.05rem'
         }}
      />
   )
}
