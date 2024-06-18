import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Presentation from "./Presentation";
import Features from "./Features";
import Citation from "./Citation";
import Contact from "./Contact";
import Footer from "./Footer";
import "tailwindcss/tailwind.css";
import "./assets/fonts/Luciole-Regular.ttf";
import LegalMentions from "./LegalMentions";
import Condition from "./Condition/Condition";

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
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Banner />
              <Citation />
              <Presentation />
              <Features />
            </div>
          </div>
          <Footer />
        </div>
      </>
    ),
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
    ),
  },
  {
    path: "/mention-legal",
    element: (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <LegalMentions />
        </div>
        <Footer />
      </div>
    ),
  },
  {
    path: "/condition-utilisation",
    element: (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Condition />
        </div>
        <Footer />
      </div>
    ),
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
