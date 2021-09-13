import React, { useEffect, useState } from 'react'
import { Pokeball } from '../../atoms/Pokeball'
import { Title } from '../../atoms/title'
import { apiBack } from '../../../services/api'


import './style.scss'

export const MyTeamPokemons = () => {
   const [teamsPokemons, setTeamsPokemons] = useState([])

   useEffect(() => {
      const getMyPokemonsTeam = async () => {
         const { data } = await apiBack.get('/team')
         setTeamsPokemons(data)
      }
      getMyPokemonsTeam()

   }, [])

   return (
      <section className="myTeamsPokemons">
         <div className="pokemonTeamBox">
            {teamsPokemons.map((data, index) => {
               return (
                  <div key={index}>
                     <Title>{data.name}</Title>
                     <div className="teamPokemonList">
                        {data.pokemons.map((pokemon, index) => {
                           return (
                              <Pokeball
                                 index={index}
                                 key={pokemon.id}
                                 type={pokemon.type}
                                 image={pokemon.image}
                                 name={pokemon.name}
                              />
                           )
                        })}
                     </div>
                  </div>
               )
            }
            )}
         </div>
      </section>
   )
}

