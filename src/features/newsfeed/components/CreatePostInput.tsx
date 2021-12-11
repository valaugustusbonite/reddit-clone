import { axios } from 'lib/axios';
import React, { useState } from 'react'
import { useAddPost } from '../api/newsfeed.query';
import '../styles/create_post_input.scss';
import { Post } from '../types/post.type';

const CreatePostInput = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [body, setBody] = useState('');
  const [post, setPost] = useState<Post>({
    id: '',
    title: '',
    subtitle: '',
    body: ''
  });

  const addPost = useAddPost();

  

  const onSubmit = () => {
    

  setPost({
    ...post,
    id: '',
    title: title,
    subtitle: subtitle,
    body: body,
  })

    //addPost.mutate(post);

    axios.post('/api/post/create', post, {
      method: 'PUT'
    });

    //e.preventDefault();
  }

  return (
    <>
      <form className='form-container'>
          <input type="text" id="title" name="title" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
          <input type="text" id="subtitle" name="subtitle" placeholder="Subtitle" onChange={(e) => setSubtitle(e.target.value)} />
          <input type="text" id="body" name="body" placeholder="Text" onChange={(e) => setBody(e.target.value)}/>
          <input type="submit" value="Submit" /* onClick={onSubmit}  */onSubmit={onSubmit}/>
      </form>
    </>
  )
}

export default CreatePostInput
