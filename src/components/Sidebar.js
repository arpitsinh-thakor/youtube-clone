import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

export const Sidebar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  if(!isMenuOpen) return null; //early return

  return (
    <div className="p-2 m-2 shadow-lg">
      <div className='p-1'>
        <h1 className='font-bold'>Substriptions</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>Shorts</li>
          <li>Videos</li>
          <li>Live</li>
        </ul>
      </div>

      <div className='p-1'>
        <h1 className='font-bold'>Substriptions</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
      </div>

      <div className='p-1'>
        <h1 className='font-bold'>Watch Later</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
      </div>
    </div>
  )
}
