import React, { useEffect, useState } from "react";
import { API_KEY, YOUTUBE_COMMENTS_API } from "../utils/constants";

import { useSearchParams } from "react-router-dom";


const Comment = ({ comment, authorName, authorProfileUrl }) => {
  return (
    <div className="flex  p-2 rounded-lg my-2">
      <img
        className="w-12 h-12 rounded-3xl"
        src={authorProfileUrl}
        alt="user"
      />

      <div className="px-3">
        <p className="font-bold">{authorName}</p>
        <p>{comment}</p>
      </div>
    </div>
  );
};
const CommentsList = ({ comments }) => {
  // console.log("comments", comments);

  return comments?.map((comment, index) => (
    <div key={index}>
      <Comment
        authorName={
          comment?.snippet?.topLevelComment
            ? comment?.snippet?.topLevelComment?.snippet?.authorDisplayName
            : comment?.snippet?.authorDisplayName
        }
        comment={
          comment?.snippet?.topLevelComment
            ? comment?.snippet?.topLevelComment?.snippet?.textOriginal
            : comment?.snippet?.textOriginal
        }
        authorProfileUrl={comment?.snippet?.topLevelComment
        ?comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl
        : comment?.snippet?.authorProfileImageUrl
    }
      />
      <div className="pl-5  ml-5">
        {/* <Comment key={index} comment={comment?.snippet?.textOriginal}/>  */}

        <CommentsList comments={comment?.replies?.comments} />
      </div>
    </div>
  ));
};

const CommentsContainer = ({totalComments,videoId}) => {
  console.log("comments conatiner videoos id",videoId)
    let [searchParams] = useSearchParams();
    
  const [commentsData, setCommentData] = useState([]);
  useEffect(() => {
    if(videoId) getCommentData();
  }, [videoId]);
  const getCommentData = async () => {
    const data = await fetch(YOUTUBE_COMMENTS_API+videoId);
    const response = await data.json();
    setCommentData(response.items);
    // console.log("comments data", response.items);
  };
  return (
    <div className="m-5 px-2">
      <h1 className="text-lg "> {totalComments} Comments </h1>
      {commentsData?.length > 0 ? (
        <CommentsList comments={commentsData} />
      ) : (
        <p>Loading comments...</p>
      )}
    </div>
  );
};

export default CommentsContainer;
