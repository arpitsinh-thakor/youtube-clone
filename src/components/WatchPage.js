import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {

    const [searchParams] = useSearchParams();


    const dispath = useDispatch();
    useEffect(()=>{
        dispath(closeMenu())
    }, []);

  return (
    <div>
        <iframe 
            className='p-3 m-3'
            width="560" height="315" 
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen></iframe>
    </div>
  )
}

export default WatchPage