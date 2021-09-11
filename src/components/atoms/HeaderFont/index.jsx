import React from 'react'

export const HeaderFont = ({ children, handleClick }) => {
   return <h1><span onClick={handleClick}>{children.toUpperCase()}</span></h1>
}