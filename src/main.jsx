import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.css'
import './index.css'
import ErrorPage from './error.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Users from './components/Users/Users';
import UserDetails from './components/userDetails/UserDetails';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';


// import Home from './components/Home/Home.jsx'
// import Header from './components/Header/Header.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element:<Home></Home> ,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: '/user/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>
      },
      {
        path: '/posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path: '/post/:postId',
        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails></PostDetails>
      }
    ]
    
  },
  // {
  //   path: '/about',
  //   element: <div>I am in the about part</div>
  // },
  // {
  //   path: '/contact',
  //   element: <div>Contact me right now!</div>
  // },
  // {
  //   path: '/home',
  //   element: <Home></Home>
  // },
  // {
  //   path: '/header',
  //   element: <Header></Header>
  // }
  
  

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
