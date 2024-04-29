
export default function Banner() {
  return (
    <div className="text-center border border-black md:px-custom-padding">
      <h2 className="uppercase text-3xl font-bold">phrase d'accroche ou slogan</h2>
      <h3 className="mt-10 mb-4 capitalize text-xl">titre paragraphe</h3>
      <p className="px-5 md:px-10">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus odio risus, nec bibendum diam ornare ut. Donec vehicula eleifend purus sed malesuada. Sed ullamcorper augue vel sem pretium luctus. Etiam vulputate, libero vel interdum consequat, ex leo rutrum leo, in eleifend purus eros euismod tortor. Donec eu purus quis augue fermentum ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus odio risus, nec bibendum diam ornare ut. Donec vehicula eleifend purus sed malesuada.
      </p>
      <div className="border-2 border-dark-100 bg-gray-400 h-64 w-11/12 mx-auto my-5"></div>
      <button className="mb-5 uppercase bg-red-400 text-white font-[Poppins] duration-500 w-2/5 px-12 hover:bg-red-500 rounded-full h-16">
              télécharger maintenant !
      </button>
    </div>
  );
}