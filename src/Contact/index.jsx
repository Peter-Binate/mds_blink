
export default function App() {
  return (
    <div>
        <h1 className="text-3xl text-center uppercase font-bold mt-6 mb-20">
            pour nous contacter !
        </h1>
        <div className="border-2 border-dark-100 bg-gray-400 h-96 w-11/12 mx-auto my-5"></div>
        <div className="mt-2 ml-16">
          <p>
            Email : blink@gmail.com
          </p>
          <p>Tel : 00 00 00 00 00</p>
        </div>

        <div className="mt-20 flex flex-col items-center">
          <p>Un probléme n’hésitez pas a nous contacter via notre FAQ !</p>
          <button className="mt-5 uppercase bg-red-400 text-white font-[Poppins] duration-500 w-2/5 px-12 hover:bg-red-500 rounded-full h-16">
                  télécharger maintenant !
          </button>
        </div>

        <div className="mt-20 mb-40 flex flex-col items-center">
          <p>Vous pouvez aussi nous retrouvez sur nos réseaux sociaux !</p>

          <div className="flex justify-between flex-wrap w-9/12">
            <div className="border-2 border-dark-100 bg-gray-400 w-40 h-40 mx-auto my-5"></div>
            <div className="border-2 border-dark-100 bg-gray-400 w-40 h-40 mx-auto my-5"></div>
            <div className="border-2 border-dark-100 bg-gray-400 w-40 h-40 mx-auto my-5"></div>
            <div className="border-2 border-dark-100 bg-gray-400 w-40 h-40 mx-auto my-5"></div>
          </div>
        </div>
    </div>  
  );
}
