import React from 'react'
import './style.scss'

export const SignIn = () => {
   return (
      <div id="signUpPage">
         <form className="boxSingIn">
            <div className="boxInput">
               <label htmlFor="email">Email:</label>
               <input type="email" name="email" id="email" />
            </div>
            <div className="boxInput">
               <label htmlFor="password">Password:</label>
               <input type="password" name="password" id="password" />
            </div>

            <button className="button" type="button">Sign up</button>
            <button className="button" type="submit">Sign in</button>
         </form>
      </div>
   )
}
