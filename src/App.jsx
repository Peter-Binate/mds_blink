// import Header from './Header'
import Navbar from './Navbar'
import Banner from './Banner'
import Presentation from './Presentation'
import Features from './Features'
import Stats from './Stats'
import Contact from './Contact'
import 'tailwindcss/tailwind.css';

export default function App() {
  return (
    <div>
      <Navbar />
      <Banner/>
      <Presentation />
      <Features />
      <Stats />
      <Contact />
    </div>  
  );
}