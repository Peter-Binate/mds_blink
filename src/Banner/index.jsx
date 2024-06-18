import logo from "../assets/images/logo.png";

export default function Banner() {
  return (
    <div className="text-center md:px-custom-padding">
      <h2 className=" text-6xl font-bold pt-20 mb-14">Découvrez Blinksport</h2>
      <p className="text-xl px-5 md:px-10 text-justify">
        L’application qui offre à chacun la possibilité de repousser ses limites
        et trouver sa place dans la communauté sportive. BlinkSport facilite la
        mise en relation entre sportifs et bénévoles, en favorisant une
        communauté axée sur l'inclusion et le partage d'expériences sportives
        enrichissantes.
      </p>
      <div className="w-full mt-10 lg:flex lg:justify-center lg:items-center">
        <div className="md:h-64 w-2/5 mx-auto my-5">
          <img
            src={logo}
            alt="Blink Sport"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="h-fit mx-auto flex flex-col items-center">
          <a href="https://blinksport-app.s3.eu-west-3.amazonaws.com/BlinkSport.apk">
            <button className="font-semibold mt-10 md:mb-5 uppercase border-4 text-xl px-16 border-[#FF5C00] text-[#FF5C00] duration-50 py-7 hover:bg-[#FF5C00] hover:text-white transition duration-300 rounded-full h-24">
              télécharger BlinkSport
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
