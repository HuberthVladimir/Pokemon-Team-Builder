import React, { createContext, useContext, useState } from "react";


const UseAppGlobalContext = createContext({})

export const AppProvider = ({ children }) => {
   const [isInputTeamActive, setIsInputTeamActive] = useState(false)
   const [inputText, setInputText] = useState('My team')
   const [savedPokemons, setSavedPokemons] = useState([])
   const [isPokeballSelected, setIsPokeballSelected] = useState({ name: '', id: 0, isActived: false })
   const [actualPokemonSelected, setActualPokemonSelected] = useState('')

   return (
      <UseAppGlobalContext.Provider
         value={{
            isInputTeamActive, setIsInputTeamActive,
            inputText, setInputText,
            savedPokemons, setSavedPokemons,
            isPokeballSelected, setIsPokeballSelected,
            actualPokemonSelected, setActualPokemonSelected
         }}>
         {children}
      </UseAppGlobalContext.Provider>
   )
}
export function useAppProvider() {
   return useContext(UseAppGlobalContext)
}
export default UseAppGlobalContext