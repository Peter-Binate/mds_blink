import { Link } from 'react-router-dom'
import { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import { GrClose } from "react-icons/gr"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="bg-white mx-auto md:my-6 md:flex md:items-center md:justify-between">
      <nav className="p-5 bg-white shadow w-full">
        <div className="md:w-64 md:mt-6 md:mx-auto md:my-0 cursor-pointer flex items-center justify-between">
          <span>
            <img className="w-64" src="https://www.creativefabrica.com/wp-content/uploads/2020/06/26/Sport-logo-running-logo-with-abstract-Graphics-4468205-1.jpg" alt="blink-logo" />
          </span>
          <span className="text-3xl cursor-pointer md:hidden block" onClick={toggleMenu}>
            {isMenuOpen ? <GrClose /> : <GiHamburgerMenu />}
          </span>
        </div>
        <div className={`md:flex md:justify-between md:items-center md:w-fit w-3/5 mx-auto bg-white md:flex md:items-center ${isMenuOpen ? 'z-[1] opacity-100' : 'z-[-1] opacity-0'} md:z-auto md:static md:w-auto absolute left-0 md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 top-[-400] transition-all ease-in duration-500 w-full`}>
          <ul className="md:flex md:justify-between md:items-center">
            <li className="mx-4 my-6 md:0">
              <Link to="/" className="text-xl uppercase hover:underline hover:underline-offset-4 duration-500">Présentation</Link>
            </li>
            <li className="mx-4 my-6 md:0">
              <Link to="/history" className="text-xl uppercase hover:underline hover:underline-offset-4 duration-500">notre histoire</Link>
            </li>
            <li className="mx-4 my-6 md:0">
              <Link to="/contact" className="text-xl uppercase hover:underline hover:underline-offset-4 duration-500">nous contacter</Link>
            </li>
            {/* <li className="mx-4 my-6 md:0">
              <Link to="/" className="text-xl uppercase hover:underline hover:underline-offset-4 duration-500">faq</Link>
            </li> */}
          </ul>
          <button className="uppercase bg-red-400 text-white font-[Poppins] duration-500 px-6  mx-4 hover:bg-red-500 rounded-full h-14">
              télécharger l'application
          </button>
        </div>
      </nav>
    </div>
  );
}