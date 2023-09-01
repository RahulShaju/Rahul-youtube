import React, { useEffect, useState, useMemo } from 'react';
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Videocontainer = () => {
  const [videos, setVideos] = useState([]);
  const dispatch = useDispatch()

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const responseJson = await data.json();
    console.log(responseJson.items);
    setVideos(responseJson.items)
  };



  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className='flex flex-wrap mt-36 ml-24 '>
      {/* {videos?.[0] && <ModifiedVideoCard info={videos[0]} name="modifiedcard using HOC" />} */}
      {videos?.length !== 0 && (
        videos?.map((video) => (
          <Link key={video?.id} to={'/watch?v=' + video?.id}>
            <VideoCard info={video} />
          </Link>
        ))
      ) }
    </div>
  );
};

export default Videocontainer;
