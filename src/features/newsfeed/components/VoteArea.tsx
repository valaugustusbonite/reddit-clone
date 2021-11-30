import React from 'react'
import '../styles/vote_area.scss';
import VoteButton from './VoteButton';
import * as BiIcons from 'react-icons/bi';

const VoteArea = () => {
  return (
    <>
      <div className='vote-container'>
        <VoteButton buttonIcon={<BiIcons.BiUpArrow size='1.2rem'/>}/>
        <h5 className='count'>500</h5>
        <VoteButton buttonIcon={<BiIcons.BiDownArrow size='1.2rem'/>}/>
      </div>
    </>
  )
}

export default VoteArea;
