import React from 'react'

const commentsData = [
    {
        name: "user1",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, vero.",
        replies:[

        ]
    },
    {
        name: "user2",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, vero.",
        replies:[
            {
                name: "user3",
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, vero.",
                replies:[
                    
                ]
            },
            {
                name: "user4",
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, vero.",
                replies:[
                    {
                        name: "user5",
                        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, vero.",
                        replies:[
                            
                        ]
                    },
                    {
                        name: "user6",
                        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, vero.",
                        replies:[
                            
                        ]
                    }
                ]
            },
            {
                name: "user7",
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, vero.",
                replies:[
                    
                ]
            }
        ]
    },
    {
        name: "user8",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, vero.",
        replies:[
            
        ]
    },
    {
        name: "user9",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, vero.",
        replies:[
            
        ]
    }
];

const Comment = ({data})=>{
    const{name, text, replies} = data;
    return <div className='flex shadow-lg bg-violet-300 p-1 m-1'>
        <img 
            className='w-12 h-12 p-1 m-1'
            src="https://png.pngtree.com/png-clipart/20191120/original/pngtree-outline-user-icon-png-image_5045523.jpg" 
            alt="user icon" />
        <div>
            <p className='font-bold px-1'>{name}</p>
            <p className='px-1'>{text}</p>
        </div>
    </div>
};

const CommentsList = ({comments}) =>{
    return comments.map((comment, index) => 
        <div key = {index}>
            <Comment data = {comment}/>
            <div className='pl-5 border border-l-black ml-5'>
                <CommentsList comments = {comment.replies}/>
            </div>
        </div>
    );
};

const CommentsContainer = () => {
  return (
    <div className='py-5 bg-neutral-200'>
        <h1 className='font-bold'>Comments: </h1>
        <CommentsList comments = {commentsData}/>
    </div>
  )
}

export default CommentsContainer