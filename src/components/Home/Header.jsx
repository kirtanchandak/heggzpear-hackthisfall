import React from 'react'
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className='bg-primary-500 items-center flex justify-between py-4 px-5 md:px-20'>
      <h2 className='font-content font-semibold text-white text-3xl md:text-4xl'>Ayurveda</h2>
      <Link to="/login" className='bg-white hover:bg-primary-400 duration-200 hover:text-white font-semibold text-primary-500 p-2 px-7 rounded'>Login</Link>
    </div>
  )
}
