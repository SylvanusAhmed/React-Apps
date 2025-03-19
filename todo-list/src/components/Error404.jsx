import React from 'react'
import { Link } from "react-router-dom"

const Error404 = () => {
  return (
    <main className='absolute top-1/2 left-1/4 -translate-y-1/2'>
      <p className='text-3xl text-red-600'>Page not found</p>
      <Link to={"/"}>
      <p className='text-blue-800 underline'>click Here access main page</p>
      </Link>

    </main>
  )
}

export default Error404