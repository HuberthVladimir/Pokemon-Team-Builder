import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { apiBack } from '../../services/api'
import './style.scss'
import { useAppProvider } from '../../services/context'

//como estava proximo ao prazo de entrega não consegui refatorar para o atomic design

export const SingUp = () => {
   const history = useHistory()
   const { setSucessSignUp } = useAppProvider()
   const [errorMessage, setErrorMessage] = useState('')
   const [inputData, setInputData] = useState({
      name: '',
      email: '',
      password: ''
   })

   //pega os dados do input e enviar para api na tentativa de realizar o cadastro
   const handleSubmit = async (e) => {
      e.preventDefault()
      try {
         await apiBack.post('/user', inputData)
         setSucessSignUp(true)
         history.push('/')
      } catch (err) {
         setErrorMessage(err.response.data.errors[0].message)
      }
   }

   //muda a rota para a rota raiz
   const handleSingUpRedirect = () => {
      history.push('/')
   }

   return (
      <div id="signUpPage">
         <form onSubmit={(e) => handleSubmit(e)} className="boxSingIn">
            <div className="boxInput">
               <label htmlFor="name">Name:</label>
               <input
                  type="name"
                  name="name"
                  id="name"
                  onChange={(e) => setInputData(prevState => ({ ...prevState, name: e.target.value }))}
               />
            </div>
            <div className="boxInput">
               <label htmlFor="email">Email:</label>
               <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={(e) => setInputData(prevState => ({ ...prevState, email: e.target.value }))}
               />
            </div>
            <div className="boxInput">
               <label htmlFor="password">Password:</label>
               <input
                  type="password"
                  name="password" id="password"
                  onChange={(e) => setInputData(prevState => ({ ...prevState, password: e.target.value }))} />
            </div>
            {<p className="errorMessage">{errorMessage}</p>}
            <button onClick={handleSingUpRedirect} className="button" type="button">Alerady has account</button>
            <button className="button" type="submit">Create Account</button>
         </form>
      </div>
   )
}
