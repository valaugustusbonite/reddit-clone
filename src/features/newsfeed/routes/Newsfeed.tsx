import CreatePostInput from '../components/CreatePostInput';
import NewsfeedListView from '../components/NewsfeedListView';
import '../styles/newsfeed.scss';

const Newsfeed = () => {
  return (
    <div className='newsfeed-container'>
      <CreatePostInput />
      <NewsfeedListView />
    </div>
  )
}

export default Newsfeed;
