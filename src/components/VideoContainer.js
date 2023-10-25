import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/contants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const[videos, setVidoes] = useState([]);

  useEffect(()=>{
    getVidoes();
  }, []);

  const getVidoes = async() =>{
    const data  = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    // console.log(json);
    setVidoes(json.items);
  };

  return (
    <div className='flex flex-wrap'>
      {
        videos.map((video) => (
          
            <Link key = {video.id} to={"/watch?v=" + video.id}>
                <VideoCard info = {video}/>
            </Link>
        ))
      }
    </div>
  )
}

export default VideoContainer