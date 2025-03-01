import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import ViewPaste from './components/ViewPaste'
import PasteList from './components/PasteList'

const router = createBrowserRouter(
   [
    {
       path: "/",
       element:
        <div>
          <Navbar />
          <Home />
        </div>

    },
    {
      path: "/pastes",
      element:
        <div>
          <Navbar />
          <PasteList />
        </div>

    },
    {
       path: "/pastes/:id",
        element:
          <div>
            <Navbar />
            <ViewPaste />
          </div>
    }
   ]
)


function App() {

  return (
    <div>
         <RouterProvider router={router} />
    </div>
  )
}

export default App
 