import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { NewTeam } from './pages/NewTeam'
import { Teams } from './pages/Teams'

export default function Routes() {
   return (
      <BrowserRouter>
         <Switch>
            <Route path="/" component={NewTeam} exact />
            <Route path="/teams" component={Teams} />
         </Switch>
      </BrowserRouter>
   )
}