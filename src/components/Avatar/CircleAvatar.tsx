import React from 'react'
import './circle_avatar.scss';
import dummyAvatar from '../../assets/images/dummy_avatar.png';

const CircleAvatar = () => {
  return (
    <div>
      <img alt='Avatar' src={dummyAvatar}></img>
    </div>
  )
}

export default CircleAvatar
