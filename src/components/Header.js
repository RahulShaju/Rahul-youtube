import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {toggleMenu} from '../utils/appSlice.js'
import { YOUTUBE_SEARCH_API } from '../utils/constants.js'



const Header = () => {
  const dispatch = useDispatch()

  const [searchQuery,setSearchQuery] = useState("")
  const [suggestions,setSuggestions] = useState([])
  

  useEffect(()=>{
    //debouncing using useffect and settimeout in react
   const timer = setTimeout(()=>getSearchSuggestions(),200)
    return ()=>{
      clearTimeout(timer)
    }
  
  },[searchQuery])

  

  const getSearchSuggestions = async () => {
    console.log("api call -" + searchQuery)
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
    const response = await data.json()
    setSuggestions(response[1])
    // console.log(response[1])
  }

  const handleToggleMenu = () =>{
     dispatch(toggleMenu())
  }
  return (
    <div className='grid grid-flow-col p-5 z-10 fixed bg-white w-full'>
      <div className='flex col-span-1'>
        <img onClick={()=>{
          handleToggleMenu()
          }} className='h-8 cursor-pointer' src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png" alt="menu" />
        <img className='h-14 mx-10 -my-3 absolute' src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg" alt="yotube logo" />
      </div>
      <div className='mx-80 col-span-10 w-3/4 justify-center'>
        <div >
        <input onChange={(e)=>{
              setSearchQuery(e.target.value)
        }} className='w-1/2 h-10 border border-gray-400 rounded-l-full  pl-5' type="text" />
        <button className='px-5 h-10 absolute  border border-gray-400 rounded-r-full bg-gray-100'><img className='h-6' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgZm9jdXNhYmxlPSJmYWxzZSIgc3R5bGU9InBvaW50ZXItZXZlbnRzOiBub25lOyBkaXNwbGF5OiBibG9jazsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsiPjxwYXRoIGQ9Im0yMC44NyAyMC4xNy01LjU5LTUuNTlDMTYuMzUgMTMuMzUgMTcgMTEuNzUgMTcgMTBjMC0zLjg3LTMuMTMtNy03LTdzLTcgMy4xMy03IDcgMy4xMyA3IDcgN2MxLjc1IDAgMy4zNS0uNjUgNC41OC0xLjcxbDUuNTkgNS41OS43LS43MXpNMTAgMTZjLTMuMzEgMC02LTIuNjktNi02czIuNjktNiA2LTYgNiAyLjY5IDYgNi0yLjY5IDYtNiA2eiIvPjwvc3ZnPg==" alt="" /></button>
        </div>
        {suggestions.length!==0 && (<div className='mt-2 fixed bg-white shadow-xl w-96 z-50  py-2  rounded-2xl w-[31rem]' >
          <ul>
           {suggestions.map(s=> <li key={s} className='py-2 font-semibold px-5 hover:bg-gray-100 flex ' ><img className='h-5 mt-1' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTAwJSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxMDAlIj48dXNlIGNsYXNzPSJ5dHAtc3ZnLXNoYWRvdyIgeG1sbnM6bnMxPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBuczE6aHJlZj0iI3l0cC1pZC0yNyIvPjxwYXRoIGNsYXNzPSJ5dHAtc3ZnLWZpbGwiIGQ9Ik0yMC44NywyMC4xN2wtNS41OS01LjU5QzE2LjM1LDEzLjM1LDE3LDExLjc1LDE3LDEwYzAtMy44Ny0zLjEzLTctNy03cy03LDMuMTMtNyw3czMuMTMsNyw3LDdjMS43NSwwLDMuMzUtMC42NSw0LjU4LTEuNzEgbDUuNTksNS41OUwyMC44NywyMC4xN3ogTTEwLDE2Yy0zLjMxLDAtNi0yLjY5LTYtNnMyLjY5LTYsNi02czYsMi42OSw2LDZTMTMuMzEsMTYsMTAsMTZ6IiBpZD0ieXRwLWlkLTI3Ii8+PC9zdmc+" alt="" /><span className='ml-2'>{s}</span></li>
)}
          </ul>
        </div>)}
      </div>
      <div className='col-span-1'>
        <img className='h-8' src="https://cdn-icons-png.flaticon.com/512/552/552721.png" alt="user icon" />
      </div>
    </div>
  )
}

export default Header
