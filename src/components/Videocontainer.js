import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'

const Videocontainer = () => {
  const [videos,setVideos] = useState([])
  const getVideos = async()=>{
    const data = await fetch( YOUTUBE_VIDEO_API)
    const  responseJson = await data.json()
    console.log(responseJson.items)
    setVideos(responseJson.items)
  }
  useEffect(()=>{
    getVideos()
  },[])
  
  return (
    <div className='mt-2 flex flex-wrap'>
    {videos.length!==0 && videos.map(video=><Link to={'/watch?v='+video.id}>  <VideoCard key={video.id} info = {video} /> </Link>) } 
    </div>
  )
}

export default Videocontainer
