import React from 'react'
import IconTextButton from '../../../components/Buttons/IconTextButton/IconTextButton';
import '../styles/newsfeed_card.scss';
import VoteArea from './VoteArea';
import * as FiIcons from 'react-icons/fi';
import UserLink from '../../../components/UserLink/UserLink';

interface NewsfeedCardProps {
  title: string;
  content: string;
}

const NewsfeedCard = (props: NewsfeedCardProps) => {
  return (
    <div className='card-container'>
      <div className='top-area'>
        <UserLink />
      </div>
      <div className='body-area'>
        <h1>{props.title}</h1>
        <h5>{props.content}</h5>
      </div>
      <div className='footer-area'>
        <VoteArea />
        <IconTextButton icon={<FiIcons.FiMessageSquare size='1.3rem'/>} buttonLabel='Comments'/>
      </div>
    </div>
  )
}

export default NewsfeedCard

