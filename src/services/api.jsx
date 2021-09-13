import axios from 'axios'

export const api = axios.create({
   baseURL: 'https://pokeapi.co/api/v2/'
})

export const apiBack = axios.create({
   baseURL: 'https://pokemon.tkb.app.br/'
})