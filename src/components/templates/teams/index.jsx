import React from 'react'
import { useHistory } from 'react-router'
import { Header } from '../../organisms/Header'
import { MyTeamPokemons } from '../../organisms/Myteam'

export const MyTeams = () => {
   const history = useHistory()
   //redireciona para a rota raiz
   const handleNewTeamRedirect = () => history.push('/')

   return (
      <>
         <Header
            handleClick={handleNewTeamRedirect}>
            create new team
         </Header>

         <MyTeamPokemons />
      </>
   )
}
