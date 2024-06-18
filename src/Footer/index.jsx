import logo from "../assets/images/logo.png";
import facebookIcon from "../assets/images/facebook.png";
import xIcon from "../assets/images/x.png";
import instagramIcon from "../assets/images/instagram.png";
import linkedinIcon from "../assets/images/linkedin.png";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-white border-t-4 border-blue-500 py-8">
      <div className="container mx-auto px-4 lg:px-32 grid grid-cols-1 lg:grid-cols-3 gap-8 text-center lg:text-left">
        <div className="flex flex-col items-center lg:items-start">
          <img src={logo} alt="Blink Sport" className="h-20 mb-4" />
        </div>
        <div className="flex flex-col items-center lg:items-center lg:mt-4">
          <h3 className="font-bold mb-2">RÉSEAUX</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=61558737524356"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebookIcon} alt="Facebook" className="h-8" />
            </a>
            <a
              href="https://x.com/blinksport_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={xIcon} alt="X" className="h-8" />
            </a>
            <a
              href="https://www.instagram.com/blinksport_app/followers/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagramIcon} alt="Instagram" className="h-8" />
            </a>
            <a
              href="https://www.linkedin.com/company/blinksport"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="h-8" />
            </a>
          </div>
        </div>
        <div className="flex justify-between items-end">
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="font-bold mb-2">SUPPORT</h3>
            <Link to="/contact">Nous contacter</Link>
            <a href="mailto:votreadresse@mail.fr">blinksportapp@gmail.com</a>
          </div>
          <div className="flex flex-col items-center lg:items-start lg:ml-16 ">
            <Link to="/mention-legal" className=" text-sm md:ml-4">
              Mentions légales
            </Link>
            <Link
              to="/condition-utilisation"
              className=" text-sm md:ml-4 w-max"
            >
              Conditions d'utilisation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
