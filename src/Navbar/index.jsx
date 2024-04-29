
export default function Navbar() {
  return (
    <div className="border-2 border-red-100 mx-auto md:my-6 md:flex md:items-center md:justify-between">
      <nav className="p-5 bg-white shadow w-full">
        <div className="border-2 border-red-100 md:w-64 md:mt-6 md:mx-auto md:my-0 cursor-pointer flex items-center justify-between">
          <span>
            <img className="w-64 border-2 border-red-500" src="https://www.creativefabrica.com/wp-content/uploads/2020/06/26/Sport-logo-running-logo-with-abstract-Graphics-4468205-1.jpg" alt="blink-logo" />
          </span>
          <span className="text-3xl cursor-pointer md:hidden block">
            X
            {/* <ion-icon name="menu" onClick="Menu"></ion-icon> */}
          </span>
        </div>
        <div className="md:flex md:justify-between md:items-center md:w-fit w-3/5 mx-auto border-2 border-red-500 bg-white md:flex md:items-center z-[-1] md:z-auto md:static md:w-auto absolute left-0 md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-1 top-[-400] transition-all ease-in duration-500 w-full">
          <ul className="md:flex md:justify-between md:items-center">
            <li className="mx-4 my-6 md:0">
              <a href="" className="text-xl uppercase hover:underline hover:underline-offset-4 duration-500">Présentation</a>
            </li>
            <li className="mx-4 my-6 md:0">
              <a href="" className="text-xl uppercase hover:underline hover:underline-offset-4 duration-500">notre histoire</a>
            </li>
            <li className="mx-4 my-6 md:0">
              <a href="" className="text-xl uppercase hover:underline hover:underline-offset-4 duration-500">nous contacter</a>
            </li>
            <li className="mx-4 my-6 md:0">
              <a href="" className="text-xl uppercase hover:underline hover:underline-offset-4 duration-500">faq</a>
            </li>
          </ul>
          <button className="uppercase bg-red-400 text-white font-[Poppins] duration-500 px-6  mx-4 hover:bg-red-500 rounded-full h-14">
              télécharger l'application
          </button>
        </div>
      </nav>
    </div>
  );
}