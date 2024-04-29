// import Header from './Header'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Navbar from './Navbar'
import Banner from './Banner'
import Presentation from './Presentation'
import Features from './Features'
import Stats from './Stats'
import History from './History'
import Contact from './Contact'
import 'tailwindcss/tailwind.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: 
      <>
        <Navbar />
        <div className="bg-sky-200">
          <Banner/>
          <Presentation />
          <Features />
          <Stats />
        </div>
      </>
  },
  {
    path: "/history",
    element: 
    <div>
      <Navbar />
      <History />
    </div>
  },
  {
    path: "/contact",
    element: 
    <div>
      <Navbar />
      <Contact />
    </div>
  }
])

export default function App() {
  return <RouterProvider router={router} />
}