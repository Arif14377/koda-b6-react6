import { useEffect, useState } from 'react'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import PostDetail from './pages/PostDetail'
import Dashboard from './pages/Dashboard'

function App() {
  const [data, setData] = useState([])
  
  useEffect(()=>{
    async function getData() {
      const respon = await fetch("/data.json")
      const data = await respon.json()
      setData(data)
    }
    getData()
  }, [])
  
  const router = createBrowserRouter([
    { path: "/",
      element: <Home data={data}/>
    },
    { path: "/:userName/:slug",
      element: <PostDetail data={data}/>
    },
    {
      path: "/dashboard",
      element: <Dashboard/>
    }
  ])
  return (
      <>
        <RouterProvider router={router}/>
      </>
  )
}
export default App
