import React from 'react'
import { Link } from 'react-router-dom'

const blogs = [
    {id:1, title: 'first blog', content: 'this is my first blog'},
    {id:2, title: 'second blog', content: 'this is my second blog'}
]

export default function BlogList() {
  return (
    <div>
        <h1>blogs list</h1>
        <ul>
            {blogs.map((item)=>{
                return(
                <li>
                    <Link to={`/blogs/${item.id}`}>
                    {item.title}</Link>
                </li>
                )
            })}
        </ul>
    </div>
  )
}
