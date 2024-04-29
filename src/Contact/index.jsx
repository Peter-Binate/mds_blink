
export default function App() {
  return (
    <div className="lg:px-custom-padding">
        <h1 className="text-3xl text-center uppercase font-bold pt-20 mb-20">
            pour nous contacter !
        </h1>
        <div className="border-2 border-dark-100 bg-gray-400 h-96 w-11/12 mx-auto my-5"></div>
        <div className="mt-2 ml-16">
          <p>
            Email : blink@gmail.com
          </p>
          <p>Tel : 00 00 00 00 00</p>
        </div>

        <div className="mt-40 text-2xl mb-5 flex flex-col items-center">
          <p className="text-center px-2">Un probléme n’hésitez pas a nous contacter via notre FAQ !</p>
          <button className="mt-5 uppercase bg-red-400 text-white duration-500 w-4/5 lg:w-2/5 px-12 hover:bg-red-500 rounded-full h-16">
                  télécharger maintenant !
          </button>
        </div>

        <div className="mt-40 pb-40 flex flex-col items-center">
          <p className="text-2xl mb-5 text-center px-2">Vous pouvez aussi nous retrouvez sur nos réseaux sociaux !</p>

          <div className="flex justify-between flex-wrap w-7/12">
            <div className="border-2 border-dark-100 bg-gray-400 w-40 h-40 mx-auto my-5"></div>
            <div className="border-2 border-dark-100 bg-gray-400 w-40 h-40 mx-auto my-5"></div>
            <div className="border-2 border-dark-100 bg-gray-400 w-40 h-40 mx-auto my-5"></div>
            <div className="border-2 border-dark-100 bg-gray-400 w-40 h-40 mx-auto my-5"></div>
          </div>
        </div>
    </div>  
  );
}
