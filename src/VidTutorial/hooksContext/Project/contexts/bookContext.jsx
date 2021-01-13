import React, { createContext, useState } from 'react'

export const BookContext = createContext()

export const bookContext = () => {
  const [books, setBooks] = useState([
    { title: 'name of the wind', author: 'galihhhp', id: 1 },
    {title: 'nananana', author: 'papapapa', id: 2}
  ])
  return (
    <div>
      
    </div>
  )
}
