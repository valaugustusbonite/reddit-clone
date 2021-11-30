import React from 'react'
import '../styles/create_post_input.scss';

const CreatePostInput = () => {
  return (
    <>
      <form className='form-container'>
          <input type="text" id="fname" name="firstname" placeholder="Title" />
          <input type="text" id="lname" name="lastname" placeholder="Text" />
          <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default CreatePostInput
