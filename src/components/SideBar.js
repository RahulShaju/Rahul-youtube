import React from 'react'
import { useSelector } from 'react-redux'


const SideBar = () => {
  const isMenuOpen = useSelector(store=>store.app.isMenuOpen) //subscribing the store by piece by piece
  if(!isMenuOpen) return null

  return (
    <div className='p-5  col-span-1 w-48'>
      <h1 className='font-bold'>Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className='pt-5 font-bold'>Watch later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  )
}

export default SideBar
