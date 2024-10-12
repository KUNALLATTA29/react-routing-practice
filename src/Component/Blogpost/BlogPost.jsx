import React from 'react';
import { useParams } from 'react-router-dom'; 

const blogs = [
  { id: 1, title: 'First Blog', content: 'This is my first blog post!' },
  { id: 2, title: 'Second Blog', content: 'This is my second blog post!' },
];

export default function BlogPost() {
  const { id } = useParams(); 
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <h2>Blog not found!</h2>; 
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
}
