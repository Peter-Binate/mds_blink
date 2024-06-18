export default function Presentation() {
  return (
    <div className="mx-auto mt-32 w-11/12 lg:w-3/4 lg:p-12">
      <div className="flex flex-col lg:flex-row lg:items-center mb-12">
        <div className="flex-1 lg:order-1 lg:pl-10">
          <h3 className="mb-4 text-xl capitalize">
            L’application qui vous motive !
          </h3>
          <p className="mb-4">
            Que vous soyez un sportif aguerri ou un débutant, notre application
            vous aide à repousser vos limites et à atteindre vos objectifs.
            Grâce à des défis personnalisés et des encouragements quotidiens,
            vous trouverez toujours une raison de vous dépasser.
          </p>
          <p>
            Les sportifs de BlinkSport vous accompagnent dans chaque étape de
            votre parcours sportif, transformant chaque effort en une victoire
            personnelle.
          </p>
        </div>
        <div className="flex-1 lg:order-2 lg:pl-10 mt-8 lg:mt-0">
          <img
            src="https://cdn.pixabay.com/photo/2023/10/04/14/15/man-8293794_1280.jpg"
            alt="man-run"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="flex-1 lg:pr-10 mb-8 lg:mb-0">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/18/13/23/action-1834465_1280.jpg"
            alt="man-run"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="flex-1 lg:pl-10">
          <h3 className="mb-4 text-xl capitalize">Vous réunis !</h3>
          <p className="mb-4">
            En rejoignant notre communauté, vous accédez à un réseau de sportifs
            passionnés, voyants et non-voyants, tous réunis par une même
            passion. Partagez vos réussites, trouvez des partenaires
            d'entraînement, et créez des liens solides grâce au sport.
          </p>
          <p>
            Avec nos réseaux sociaux intégrés et nos fonctionnalités
            communautaires, BlinkSport transforme chaque session d'entraînement
            en une expérience collective, renforçant les amitiés et les
            connexions humaines au-delà du terrain.
          </p>
        </div>
      </div>
    </div>
  );
}
