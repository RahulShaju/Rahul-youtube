import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./commentsContainer";
import LiveChat from "./LiveChat";
import { YOUTUBE_VIDEO_API, YOUTUBE_VIDEO_BY_ID } from "../utils/constants";
import { formatViewCount } from "../helpers/viewCount";
import ButtonList from "./ButtonList";

function getTimeAgo(timestamp) {
  const currentTime = new Date();
  const inputTime = new Date(timestamp);

  const timeDifference = currentTime - inputTime;
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30); // Approximate, can be adjusted

  if (months >= 12) {
    const years = Math.floor(months / 12);
    return `${years} year${years > 1 ? "s" : ""} ago`;
  } else if (months > 0) {
    return `${months} month${months > 1 ? "s" : ""} ago`;
  } else if (days > 0) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else {
    return `${seconds} second${seconds !== 1 ? "s" : ""} ago`;
  }
}

const WatchPage = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const [videoData, setVideoData] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);

  // console.log("isMenuOpen - ",isMenuOpen)

  let [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const getSpecificVideoData = async () => {
    const data = await fetch(YOUTUBE_VIDEO_BY_ID + videoId);
    const response = await data.json();
    console.log("video data", response);
    setVideoData(response.items[0]);
  };

  const getRelatedVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const response = await data.json();
    console.log("Related videos", response.items);
    setRelatedVideos(response?.items);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    getSpecificVideoData();
    getRelatedVideos();
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex-col w-full mr-3 ml-5 ">
      <div className="ml-5 mt-28 flex ">
        <div>
          <iframe
            className="rounded-3xl"
            width="1000"
            height="600"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <div className="mt-2 w-[1000px]">
            <p className="font-bold text-lg">{videoData?.snippet?.title}</p>
            <div className="flex mt-1">
              <img
                className="mt-2 h-12 w-12 rounded-3xl"
                src={videoData?.snippet?.thumbnails?.medium?.url}
                alt=""
              />
              <div className="mt-2 ml-3">
                <p className=" text-md font-bold">
                  {videoData?.snippet?.channelTitle}
                </p>
                <p className="text-sm font-semibold text-gray-500">
                  79.2K subscribers
                </p>
              </div>
              <div className="ml-5 mt-2">
                <button className="bg-black text-white font-semibold px-4 py-2 rounded-3xl">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <div className="flex">
        <div>
          <div className="p-3 ml-3 w-[1000px] bg-gray-100 mt-3 rounded-2xl">
            <div className="flex">
              <p className="font-semibold">
                {Math.floor(videoData?.statistics?.viewCount / 1000000)}M views
              </p>
              <p className="font-semibold ml-2">
                {getTimeAgo(videoData?.snippet?.publishedAt)}
              </p>
            </div>
            <div>
              <p className=" text-gray-800">
                {videoData?.snippet?.description}
              </p>
            </div>
          </div>

          <div className="w-[1050px]">
            <CommentsContainer
              totalComments={videoData?.statistics?.commentCount}
            />
          </div>
        </div>
        <div>
         
        {relatedVideos.map((videoData) => (
          
  <div key={videoData?.id} className="flex max-w-full mt-3">
    <img
      className="rounded-lg h-[110px]"
      src={videoData?.snippet?.thumbnails?.medium?.url}
      alt=""
    />
    <div className="ml-3">
      <p className="font-semibold">{videoData?.snippet?.title}</p>
      <p className="mt-1 text-sm font-semibold">{videoData?.snippet?.channelTitle}</p>
      <div className="flex mt-1">
        <p className="font-semibold">
          {formatViewCount(videoData?.statistics?.viewCount)}
        </p>
        <p className="font-semibold ml-2">
          {getTimeAgo(videoData?.snippet?.publishedAt)}
        </p>
      </div>
    </div>
  </div>
))}

        </div>
      </div>
    </div>
  );
};

export default WatchPage;
