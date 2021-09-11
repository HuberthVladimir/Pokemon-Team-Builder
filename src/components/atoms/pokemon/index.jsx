import React from 'react'

export const Pokemon = ({ image, name }) => {
   return (
      <img className="pokemonImg" src={image} alt={name} />
   )
}
