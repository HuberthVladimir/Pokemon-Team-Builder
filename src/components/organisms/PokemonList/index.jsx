import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { api } from '../../../services/api'

import { Title } from '../../atoms/title'
import { PokemonCard } from '../PokemonCard'

import './style.scss'

export const PokemonList = () => {
   const [dataPokemon, setDataPokemon] = useState([])
   const [amountCards, SetAmountCards] = useState(12)

   //use effect que pegara os dados da api
   useEffect(() => {
      const getPokemonList = async () => {
         const { data: response } = await api.get(`/pokemon?limit=${amountCards}&offset=0`)
         let arrListPok = []
         for (let result of response.results) {
            const { data: responseMap } = await axios.get(result.url)
            arrListPok.push(responseMap)
         }
         setDataPokemon(arrListPok)
         console.log(dataPokemon)
      }
      getPokemonList()

   }, [amountCards, dataPokemon])

   //função que irá fazer o infinite scroll
   //fica ouvindo a div com id, e quando o usuario realiza o scrol ate ela, faz a requisição
   useEffect(() => {
      const intersectionObserver = new IntersectionObserver(entries => {
         if (entries.some(entry => entry.isIntersecting)) {
            SetAmountCards((currentValue) => currentValue < 898 ? currentValue + 8 : currentValue + 0);
         }
      })
      intersectionObserver.observe(document.querySelector('#end-page'));
      return () => intersectionObserver.disconnect();
   }, [])

   return (
      <>
         <Title>Choose 6 pokémons:</Title>
         <div class="listPokemons">
            {dataPokemon.map((data) => {
               return (
                  <PokemonCard
                     id={data.id}
                     image={data.sprites['front_default']}
                     name={data.name}
                     firstType={data.types[0].type.name}
                     secondType={data.types[1]?.type.name}
                  />
               )
            })}
         </div>
         <div id="end-page" />
      </>

   )
}
