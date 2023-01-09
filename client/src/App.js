import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Username from './components/Username'
import Register from './components/Register'
import Reset from './components/Reset'
import Recovery from './components/Recovery'
import Profile from './components/Profile'
import Password from './components/Password'
import PageNotFound from './components/PageNotFound'




const router = createBrowserRouter([
    {
        path: '/',
        element: <Username></Username>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/reset',
        element: <Reset></Reset>
    },
    {
        path: '/recovery',
        element: <Recovery></Recovery>
    },
    {
        path: '/profile',
        element: <Profile></Profile>
    },
    {
        path: '/password',
        element: <Password></Password>
    },
    {
        path: '*',
        element: <PageNotFound ></PageNotFound>
    },
])

const App = () => {
    return (
        <main>
            <RouterProvider router={router}></RouterProvider>
        </main>
    )
}

export default App