import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { NewTeam } from './pages/NewTeam'
import { Teams } from './pages/Teams'
import { SignIn } from './pages/SignIn'

export default function Routes() {
   return (
      <BrowserRouter>
         <Switch>
            <Route path="/" component={SignIn} exact />
            <Route path="/new-team" component={NewTeam} />
            <Route path="/teams" component={Teams} />
         </Switch>
      </BrowserRouter>
   )
}