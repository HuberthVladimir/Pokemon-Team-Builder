import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { apiBack } from '../../services/api'
import './style.scss'
import { useAppProvider } from '../../services/context'

//como estava proximo ao prazo de entrega não consegui refatorar para o atomic design

export const SignIn = () => {
   const [errorMessage, setErrorMessage] = useState('')
   const { sucessSignUp, changeUser } = useAppProvider()
   const history = useHistory()
   const [inputData, setInputData] = useState({
      email: '',
      password: ''
   })


   //realiza o cadastro
   const handleSubmit = async (e) => {
      e.preventDefault()
      try {
         const response = await apiBack.post('/user/auth', inputData)
         console.log(response)
         apiBack.defaults.headers.common = { 'Authorization': 'Bearer ' + response.data.token.token };
         changeUser(response.data)
         history.push('/new-team')
      } catch (err) {
         setErrorMessage("erro ao realizar login")
      }
   }

   //muda para a rota de cadasto
   const handleSingUpRedirect = () => {
      history.push('/signup')
   }

   return (
      <div id="signUpPage">
         <form onSubmit={(e) => handleSubmit(e)} className="boxSingIn">
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
            {<p className="sucessSignIn">{sucessSignUp}</p>}
            {<p className="errorMessage">{errorMessage}</p>}
            <button onClick={handleSingUpRedirect} className="button" type="button">Create Account</button>
            <button className="button" type="submit">Login</button>
         </form>
      </div>
   )
}
