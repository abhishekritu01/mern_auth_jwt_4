import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Username from './components/Username'
import Register from './components/Register'
import Reset from './components/Reset'
import Recovery from './components/Recovery'
import Profile from './components/Profile'
import Password from './components/Password'
import PageNotFound from './components/PageNotFound'



//auth middleware
import { AuthorizeUser ,ProtectRoute} from './middleware/auth'


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
        element: <AuthorizeUser><Profile /></AuthorizeUser> 
    },
    {
        path: '/password',
        element: <ProtectRoute> <Password /></ProtectRoute>
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