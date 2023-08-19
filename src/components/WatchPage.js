import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useParams, useSearchParams } from 'react-router-dom'

const WatchPage = () => {
    let [searchParams] = useSearchParams();
    console.log(searchParams.get("v"))
    
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(closeMenu())
    })
  return (
    <div className='ml-5'>
        <iframe width="1000" height="600" src={"https://www.youtube.com/embed/"+searchParams.get('v')} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}

export default WatchPage
 