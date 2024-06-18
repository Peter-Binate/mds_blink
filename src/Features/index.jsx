import handiBasket from "../assets/images/handisport.png";

export default function Features() {
  return (
    <>
      <div className="bg-[#0F0EDD]">
        <h1 className="text-3xl text-center text-white uppercase font-bold pt-24 mb-20">
          Les premières étapes
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-4 px-2 lg:grid-rows-4 gap-5 lg:px-48">
          <div className="lg:col-start-1 lg:col-end-5 lg:row-start-1 lg:row-end-2 flex flex-col lg:flex-row items-stretch p-4 rounded-lg order-1">
            <div className="bg-orange-500 flex items-center justify-center w-full lg:w-4/12 p-6 rounded-t-lg lg:rounded-l-lg">
              <span className="text-white text-6xl lg:text-9xl">1</span>
            </div>
            <div className="p-6 flex flex-col justify-center bg-white flex-1 rounded-b-lg lg:rounded-r-lg lg:rounded-b-none">
              <h3 className="text-xl font-bold mb-2">Création de profil</h3>
              <p className="text-base">
                Créez votre profil en quelques minutes ! Ajoutez vos
                informations personnelles, définissez vos objectifs sportifs, et
                partagez ce qui vous motive. Votre profil est le point de départ
                de votre aventure avec BlinkSport.
              </p>
            </div>
          </div>

          <div className="lg:mt-0 lg:col-start-3 lg:col-end-5 lg:row-start-2 lg:row-end-4 p-4 rounded-lg order-4 flex items-stretch flex-col">
            <div className="bg-orange-500 flex items-center justify-center w-full h-48 lg:h-72 p-6 rounded-t-lg">
              <span className="text-white text-6xl lg:text-9xl font-bold">
                3
              </span>
            </div>
            <div className="p-6 flex flex-col justify-center bg-white flex-1 rounded-b-lg">
              <h3 className="text-xl font-bold mb-2">
                Proposez ou rechercher une activité
              </h3>
              <p className="text-base">
                Explorez les activités sportives disponibles près de chez vous.
                BlinkSport vous propose des événements et des sessions
                d'entraînement adaptés à vos préférences et à votre
                localisation, pour que vous puissiez toujours trouver l'occasion
                parfaite de bouger.
              </p>
            </div>
          </div>

          <div className="order-2 lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-2 p-4 rounded-lg flex flex-col lg:flex-row items-stretch">
            <div className="bg-orange-500 flex items-center justify-center w-full lg:w-5/12 p-6 rounded-t-lg lg:rounded-l-lg lg:rounded-t-none">
              <span className="text-white text-6xl lg:text-9xl font-bold">
                2
              </span>
            </div>
            <div className="p-6 flex flex-col justify-center bg-white flex-1 rounded-b-lg lg:rounded-r-lg lg:rounded-b-none">
              <h3 className="text-xl font-bold mb-2">
                Choisissez vos sports favoris
              </h3>
              <p className="text-base">
                Sélectionnez vos sports préférés. Que vous aimiez le football,
                la natation, le yoga ou la course à pied, BlinkSport s'adapte à
                vos passions pour vous proposer des expériences sur mesure.
              </p>
            </div>
          </div>

          <div className="order-3 lg:col-start-1 lg:col-end-3 lg:row-start-3 lg:row-end-4 p-4 rounded-lg flex items-center flex-col">
            <img
              src={handiBasket}
              alt="image_de_femme_jouant_au_basket"
              className="w-full lg:w-auto"
            />
          </div>

          <div className="lg:col-start-1 lg:col-end-5 lg:row-start-4 lg:row-end-5 flex flex-col lg:flex-row items-stretch p-4 rounded-lg order-5 mb-24">
            <div className="bg-orange-500 flex items-center justify-center w-full lg:w-4/12 p-6 rounded-t-lg lg:rounded-l-lg lg:rounded-t-none">
              <span className="text-white text-6xl lg:text-9xl font-bold">
                4
              </span>
            </div>
            <div className="p-6 flex flex-col justify-center bg-white flex-1 rounded-b-lg lg:rounded-r-lg lg:rounded-b-none ">
              <h3 className="text-xl font-bold mb-2">
                Rejoignez la communauté !
              </h3>
              <p className="text-base">
                Intégrez une communauté dynamique de sportifs passionnés.
                Connectez-vous avec des amis, trouvez des partenaires
                d'entraînement et partagez vos réussites. Avec BlinkSport,
                chaque entraînement devient une expérience collective et
                enrichissante.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
