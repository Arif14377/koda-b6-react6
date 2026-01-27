import { useState } from 'react'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import PostDetail from './pages/PostDetail'

function App() {
  const router = createBrowserRouter([
    { path: "/",
      element: <Home/>
    },
    { path: "/:username/:slug",
      element: <PostDetail/>
    }
  ])
  return <RouterProvider router={router}/>
}
export default App
