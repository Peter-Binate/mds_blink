import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './Navbar';
import Banner from './Banner';
import Presentation from './Presentation';
import Features from './Features';
import Stats from './Stats';
import History from './History';
import Contact from './Contact';
import Footer from "./Footer";
import 'tailwindcss/tailwind.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <div className="flex flex-col"> 
          <div className="flex-grow">
            <div
              style={{
                backgroundImage: `url('/images/white_background/white_background.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <Banner />
              <Presentation />
              <Features />
              <Stats />
            </div>
          </div>
          <Footer />
        </div>
      </>
    )
  },
  {
    path: "/history",
    element: (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <History />
        </div>
        <Footer />
      </div>
    )
  },
  {
    path: "/contact",
    element: (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Contact />
        </div>
        <Footer />
      </div>
    )
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
