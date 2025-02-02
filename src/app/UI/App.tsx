import { useState } from 'react'
import styles from './App.module.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../../pages/Home/UI/Home'

function App() {

  const router = createBrowserRouter([
    {
    path: '/',
    element: <Home/>
    },
    {
      path: '/about',
      element: <Home/>
    }
])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
