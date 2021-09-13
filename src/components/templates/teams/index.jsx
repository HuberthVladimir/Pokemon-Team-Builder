import React from 'react'
import { Header } from '../../organisms/Header'
import { useHistory } from 'react-router'

export const Myteams = () => {
   const history = useHistory()

   const handleNewTeamRedirect = () => history.push('/')

   return (
      <>
         <Header handleClick={handleNewTeamRedirect}>create new team</Header>
      </>
   )
}
