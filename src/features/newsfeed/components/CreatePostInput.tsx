import React, { useState } from 'react'
import { useAddPost } from '../api/newsfeed.query';
import '../styles/create_post_input.scss';
import { v4 as uuidv4 } from 'uuid';

const CreatePostInput = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [body, setBody] = useState('');
  const { mutate: addPost }= useAddPost();

  const addNewPost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const post = {
      id: uuidv4(),
      title,
      subtitle,
      body,
    }

    addPost(post);
  }

  return (
    <>
      <form className='form-container' onSubmit={addNewPost}>
          <input type="text" id="title" name="title" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
          <input type="text" id="subtitle" name="subtitle" placeholder="Subtitle" onChange={(e) => setSubtitle(e.target.value)} />
          <input type="text" id="body" name="body" placeholder="Text" onChange={(e) => setBody(e.target.value)}/>
          <input type="submit" value="Submit"  />
      </form>
    </>
  )
}

export default CreatePostInput
