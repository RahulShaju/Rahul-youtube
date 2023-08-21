import React from 'react'

const VideoCard = ({info,name}) => {
    
        const {snippet,statistics} = info
    const {channelTitle,title,thumbnails} = snippet
  
  return (
    <div className='p-2 m-2 w-72'>
        <img className='rounded-lg' src={thumbnails?.medium?.url} alt="thumbnail" />
        <ul>
            <li className="font-bold" >{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics?.viewCount} views</li>
            <li>{name}</li>
            
        </ul>
      
    </div>
  )
}
// using higher order components for learning purpose
const ModifiedVideoCard = ({info,name}) => {
  return(
    <div className='p-1 m-1 border border-red-600'>
    <VideoCard info={info} name={name} />
  </div>
  )
}

export default VideoCard
export {ModifiedVideoCard}

