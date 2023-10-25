import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info);
    const { snippet, statistics} = info;
    const { channelTitle, title, thumbnails} = snippet;

  return (
    <div className='w-48 p-2 m-2 bg-teal-200 shadow-lg rounded-lg'>
        <img 
            className='rounded-md'
            src={thumbnails.high.url} alt="thumbnail" />
        <ul>
            <li className='font-semibold'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
}

export default VideoCard