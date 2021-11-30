import React from 'react';
import '../styles/vote_button.scss';

interface VoteButtonProps {
  buttonIcon: React.ReactNode;
  onClick?: () => void;
}

const VoteButton = (props: VoteButtonProps) => {
  return (
    <>
      <button className='button' type='button' onClick={props.onClick}>{props.buttonIcon}</button>
    </>
  )
}

export default VoteButton;
