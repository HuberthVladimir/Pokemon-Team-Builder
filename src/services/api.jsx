import axios from 'axios'

export const api = axios.create({
   baseURL: 'https://pokeapi.co/api/v2/'
})

export const apiBack = axios.create({
   baseURL: 'http://165.22.186.23:3344/'
})