import React from 'react'
import CircleAvatar from '../Avatar/CircleAvatar'
import './user_link.scss';

const UserLink = () => {
  return (
    <button className='user-link'>
      <div className='avatar-container'>
        <CircleAvatar />
        <h5>Val Bonite</h5>
      </div>
    </button>
  )
}

export default UserLink
