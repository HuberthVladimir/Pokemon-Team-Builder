import React, { createContext, useState } from "react";

const UseAppGlobalContext = createContext({})

export const UseAppProvider = ({ children }) => {
   const [isInputTeamActive, setIsInputTeamActive] = useState(false)
   const [inputText, setInputText] = useState('My team')
   const [savedPokemons, setSavedPokemons] = useState([])

   return (
      <UseAppGlobalContext.Provider
         value={{
            isInputTeamActive, setIsInputTeamActive,
            inputText, setInputText,
            savedPokemons, setSavedPokemons
         }}>
         {children}
      </UseAppGlobalContext.Provider>
   )
}

export default UseAppGlobalContext