import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider,} from 'react-router-dom'
import Home from './Component/Home/Home.jsx'
import About from './Component/About/About.jsx'
import BlogList from './Component/Bloglist/BlogList.jsx'
import BlogPost from './Component/Blogpost/BlogPost.jsx'
import NotFound from './Component/Notfound/NotFound.jsx'

const router = createBrowserRouter([
    {
      path:'/',
      element:<App/>,
      children:[
        {
          path:"",
          element:<Home/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/blogs",
          element:<BlogList/>
        },
        {
          path:"/blogs/:id",
          element:<BlogPost/>
        },
        {
          path:"*",
          element:<NotFound/>
        }
      ]
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
