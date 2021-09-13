import React from 'react'
import { BrowserRouter, Switch, } from 'react-router-dom'
import { NewTeam } from './pages/NewTeam'
import { Teams } from './pages/Teams'
import { SignIn } from './pages/SignIn'
import { SingUp } from './pages/SingUp'

import { Router as Route } from './PrivateRoutes'


export default function Routes() {
   return (
      <BrowserRouter>
         <Switch>
            <Route path="/" component={SignIn} exact />
            <Route path="/signup" component={SingUp} />
            <Route path="/new-team" component={NewTeam} isPrivate />
            <Route path="/teams" component={Teams} isPrivate />
         </Switch>
      </BrowserRouter>
   )
}