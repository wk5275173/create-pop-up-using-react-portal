import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'          //createRoot is React 18's API to create a root and render into a DOM node. This replaces the old ReactDOM.render().
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'


const router = createBrowserRouter([         //createBrowserRouter takes an array of route objects
  {
  path: '/',
  element: <App />,
  errorElement: <Error />,
  children: [
    {
      path:'/',
      element: <Home/>
    },
    {
      path: '/About',
      element: <About/>
    },
    {
      path: '/Contact',
      element: <Contact/>
    }
  ]
  }
])

createRoot(document.getElementById('root')).render(<RouterProvider router={router}/>)  //createRoot(...) → creates a React root at that node.//.render(<RouterProvider router={router} />) → mounts the app.//RouterProvider reads the current URL, matches it against router, and renders the correct element tree.//<RouterProvider router={router} />before = must be same and inside braces it can change

