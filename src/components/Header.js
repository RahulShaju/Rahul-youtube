import React from 'react'
import { useDispatch } from 'react-redux'
import {toggleMenu} from '../utils/appSlice.js'



const Header = () => {
  const dispatch = useDispatch()

  const handleToggleMenu = () =>{
     dispatch(toggleMenu())
  }
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex col-span-1'>
        <img onClick={()=>{
          handleToggleMenu()
          }} className='h-8 cursor-pointer' src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png" alt="menu" />
        <img className='h-8 mx-2' src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg" alt="yotube logo" />
      </div>
      <div className='flex col-span-10 justify-center'>
        <input className='w-1/2 border border-gray-400 rounded-l-full' type="text" />
        <button className='p-2 border border-gray-400 rounded-r-full bg-gray-100'>Search</button>
      </div>
      <div className='col-span-1'>
        <img className='h-8' src="https://cdn-icons-png.flaticon.com/512/552/552721.png" alt="user icon" />
      </div>
    </div>
  )
}

export default Header
