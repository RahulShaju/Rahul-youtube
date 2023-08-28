import React from 'react'


const commentsData = [
    {
        name:"Rahul Shaju",
        comment :"I literally loved this video beacuse it was so relatable,Thank you for uploading.Waiting for more",
        replies:[]
    },
    {
        name:"Rahul Shaju",
        comment :"I literally loved this video beacuse it was so relatable,Thank you for uploading.Waiting for more",
        replies:[{
            name:"Rahul Shaju",
            comment :"I literally loved this video beacuse it was so relatable,Thank you for uploading.Waiting for more",
            replies:[{
                name:"Rahul Shaju",
                comment :"I literally loved this video beacuse it was so relatable,Thank you for uploading.Waiting for more",
                replies:[]
            },{
                name:"Rahul Shaju",
                comment :"I literally loved this video beacuse it was so relatable,Thank you for uploading.Waiting for more",
                replies:[{
                    name:"Rahul Shaju",
                    comment :"I literally loved this video beacuse it was so relatable,Thank you for uploading.Waiting for more",
                    replies:[{
                        name:"Rahul Shaju",
                        comment :"I literally loved this video beacuse it was so relatable,Thank you for uploading.Waiting for more",
                        replies:[]
                    },]
                },]
            },]
        },
        {
            name:"Rahul Shaju",
            comment :"I literally loved this video beacuse it was so relatable,Thank you for uploading.Waiting for more",
            replies:[{
                name:"Rahul Shaju",
                comment :"I literally loved this video beacuse it was so relatable,Thank you for uploading.Waiting for more",
                replies:[]
            },{
                name:"Rahul Shaju",
                comment :"I literally loved this video beacuse it was so relatable,Thank you for uploading.Waiting for more",
                replies:[]
            },]
        },]
    },
    {
        name:"Rahul Shaju",
        comment :"I literally loved this video beacuse it was so relatable,Thank you for uploading.Waiting for more",
        replies:[{
            name:"Rahul Shaju",
            comment :"I literally loved this video beacuse it was so relatable,Thank you for uploading.Waiting for more",
            replies:[]
        },
        {
            name:"Rahul Shaju",
            comment :"I literally loved this video beacuse it was so relatable,Thank you for uploading.Waiting for more",
            replies:[]
        },]
    },
    {
        name:"Rahul Shaju",
        comment :"I literally loved this video beacuse it was so relatable,Thank you for uploading.Waiting for more",
        replies:[
            {
                name:"Rahul Shaju",
                comment :"I literally loved this video beacuse it was so relatable,Thank you for uploading.Waiting for more",
                replies:[]
            },{
                name:"Rahul Shaju",
                comment :"I literally loved this video beacuse it was so relatable,Thank you for uploading.Waiting for more",
                replies:[]
            },{
                name:"Rahul Shaju",
                comment :"I literally loved this video beacuse it was so relatable,Thank you for uploading.Waiting for more",
                replies:[]
            },
        ]
    },
    {
        name:"Rahul Shaju",
        comment :"I literally loved this video beacuse it was so relatable,Thank you for uploading.Waiting for more",
        replies:[{
            name:"Rahul Shaju",
            comment :"I literally loved this video beacuse it was so relatable,Thank you for uploading.Waiting for more",
            replies:[]
        },{
            name:"Rahul Shaju",
            comment :"I literally loved this video beacuse it was so relatable,Thank you for uploading.Waiting for more",
            replies:[]
        },]
    },
    {
        name:"Rahul Shaju",
        comment :"I literally loved this video beacuse it was so relatable,Thank you for uploading.Waiting for more",
        replies:[]
    },
    {
        name:"Rahul Shaju",
        comment :"I literally loved this video beacuse it was so relatable,Thank you for uploading.Waiting for more",
        replies:[]
    },
    {
        name:"Rahul Shaju",
        comment :"I literally loved this video beacuse it was so relatable,Thank you for uploading.Waiting for more",
        replies:[]
    },

]
const Comment = ({data})=>{
    const {name,comment,replies} = data
    return (
        <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
        <img className='w-12 h-12' src="https://cdn-icons-png.flaticon.com/512/552/552721.png" alt="user" />
   
    <div className='px-3'>
    <p className='font-bold'>{name}</p>
    <p>{comment}</p>
    </div>
    </div>
    )

}
const CommentsList = ({comments})=>{
    return comments?.map((comment,index)=>(
        <div key={index} >
            <Comment  data={comment}/> 
            <div className='pl-5 border border-l-black ml-5'>
            {/* <Comment key={index} data={comment}/>  */}
            <CommentsList comments={comment?.replies} />
        </div>
        </div>
        
    ))
}

const CommentsContainer = () => {
  return (
    <div className='m-5 px-2'>
        <h1 className='text-xl font-bold'> Comments: </h1>
        <CommentsList comments={commentsData} />
      
    </div>
  )
}

export default CommentsContainer
