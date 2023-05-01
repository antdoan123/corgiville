import Link from 'next/link'
import React from 'react'

function HeroBanner() {
  return (
    <div className='h-screen bg-my bg-cover bg-center text-white'>
        <div className='h-screen flex flex-col items-center justify-center'>
            <h1 className='uppercase font-bold text-5xl lg:text-7xl leading-[70px]	text-center'>SPRING STYLES <span className='block'>ARE HERE!</span></h1>
            <p className='uppercase text-center text-md lg:text-lg p-4'>Unleash your personal style and bond with your furry companion</p>
            <Link href='/' className='rounded-md bg-black py-4 px-8 text-xl uppercase hover:cursor-pointer hover:text-yellow-200'>Shop Now</Link>
        </div>
    </div>
  )
}

export default HeroBanner