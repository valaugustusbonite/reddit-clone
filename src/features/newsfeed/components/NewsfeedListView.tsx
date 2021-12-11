import React from 'react'
import { useGetPosts } from '../api/newsfeed.query';
import { Post } from '../types/post.type';
import NewsfeedCard from './NewsfeedCard'

const NewsfeedListView = () => {

  const postquery = useGetPosts();
  const posts = postquery.data;

  if (postquery.isLoading) {
    return (
      <div className="w-full h-48 flex justify-center items-center">
        <h1>Loading</h1>
      </div>
    );
  }

  if (postquery.isError) {
    console.log(postquery.error);

    return (
      <div className="w-full h-48 flex justify-center items-center">
        <h1>Error</h1>
      </div>
    );
  }

  return (
    <>
    {
      posts?.map((post: Post) => <NewsfeedCard key={post.id} content={post.body} title={post.title} / >)
    }
    </>
  )
}

export default NewsfeedListView
