import React from 'react'
import DataContext from './context/DataContext'
import { useContext } from 'react';

const NewPost = () => {
  const {handleSubmit,postTitle,setPostTitle,postBody,setPostBody}=useContext(DataContext)
  return (
   <main className="NewPost">
    <h1>NewPost</h1>
    <form className="newPostForm" onSubmit={handleSubmit}>
    <label htmlFor="postTitle">Title:</label> 
    <input type="text"
          id="postTitle"
          required
          value={postTitle}
          onChange={(e)=>setPostTitle(e.target.value)}
     />
     <label htmlFor="postBody">Body</label>
     <textarea 
       id="postBody" 
       required
       value={postBody}
       onChange={(e)=>setPostBody(e.target.value)}/>
       <button type="submit">Submit</button>
    </form>
   </main>
  )
}

export default NewPost