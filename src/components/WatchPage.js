import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'
import CommentsContainer from './commentsContainer'

const WatchPage = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  // console.log("isMenuOpen - ",isMenuOpen)

    let [searchParams] = useSearchParams();
    console.log(searchParams.get("v"))
    
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(closeMenu())
    },[])
  return (
    <div className='flex-col  '>
      <div className='ml-5 mt-28 rounded-3xl '>
        <iframe className='rounded-3xl' width="1000" height="600" src={"https://www.youtube.com/embed/"+searchParams.get('v')} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
    <CommentsContainer/>
    
    </div>
  )
}

export default WatchPage
 