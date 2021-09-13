import React from 'react'
import ConfirmIcon from '../../../assets/Confirm.svg'
import './style.scss'
import { useAppProvider } from '../../../services/context'
import { apiBack } from '../../../services/api'
export const Confirm = () => {
   const { savedPokemons, setSavedPokemons, inputText } = useAppProvider()

   //ao clicar no botão de enviar o time, é feita a verificação se os existe 6 pokemons
   //os dados são formatados para o envio da requisição e enviado para a api
   const handleSubmit = async () => {
      if (savedPokemons.length === 6) {
         try {
            const savedPokemonsFormated = savedPokemons.map(item => ({ type: item.firstType, name: item.name, image: item.image }))

            await apiBack.post("/team", { name: inputText, pokemons: savedPokemonsFormated })
            alert('Team Created With Sucess')
            setSavedPokemons([])
         } catch (err) {
            alert(err.response.data)
         }

      }
   }

   return (
      <img
         className="confirm"
         src={ConfirmIcon}
         alt="delete icon"
         style={{ filter: savedPokemons.length === 6 ? 'none' : 'saturate(50%)' }}
         onClick={handleSubmit}
      />
   )
}