import React, { useState } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAppProvider } from './services/context'
import { apiBack } from './services/api'

const Router = ({ isPrivate = false, component: Component, ...rest }) => {
   const [isSigned, setIsSigned] = useState(false)
   const { user } = useAppProvider()

   if (user.token.token) {
      apiBack.defaults.headers.common = { 'Authorization': 'Bearer ' + user.token.token };
   }

   if (!!user.token !== isSigned) {
      setIsSigned(!!user.token)
   }

   return <Route path="/" {...rest} render={() => {
      return isPrivate === isSigned ? (<Component />) : (<Redirect to={{ pathname: isPrivate ? '/' : 'new-team' }} />)
   }} />

}


export { Router }