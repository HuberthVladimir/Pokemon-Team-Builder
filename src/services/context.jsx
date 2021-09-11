import { createContext, useState } from "react";

const UseAppGlobalContext = createContext({})

export const UseAppProvider = ({ children }) => {
   const [isInputTeamActive, setIsInputTeamActive] = useState(false)
   const [inputText, setInputText] = useState('')

   return (
      <UseAppGlobalContext.Provider
         value={{
            isInputTeamActive, setIsInputTeamActive,
            inputText, setInputText
         }}>
         {children}
      </UseAppGlobalContext.Provider>
   )
}

export default UseAppGlobalContext