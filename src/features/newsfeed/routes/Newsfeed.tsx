import CreatePostInput from '../components/CreatePostInput';
import NewsfeedListView from '../components/NewsfeedListView';
import '../styles/newsfeed.scss';

const Newsfeed = () => {
  return (
    <div className='newsfeed-container'>
      <div className='list-container'>
      <CreatePostInput />
      <NewsfeedListView />
      </div>
    </div>
  )
}

export default Newsfeed;
