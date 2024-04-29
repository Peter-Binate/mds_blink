
export default function Presentation() {
  return (
    <div className="mx-auto mb-12 md:p-12  w-11/12 md:w-3/4">
      <h2 className="text-center uppercase text-3xl font-bold mb-20">
        blink l'application qui&nbsp;...&nbsp;!
      </h2>
      <div className="flex flex-col md:flex-row md:items-center md:mb-8">
        <div className="flex-1 md:pl-10">
          <h3 className="mb-2 capitalize text-xl">titre paragraphe</h3>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus odio risus, nec bibendum diam ornare ut. Donec vehicula eleifend purus sed malesuada. Sed ullamcorper augue vel sem pretium luctus. Etiam vulputate, libero vel interdum consequat, ex leo rutrum leo, in eleifend purus eros euismod tortor. Donec eu purus quis augue fermentum ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus odio risus, nec bibendum diam ornare ut. Donec vehicula eleifend purus sed malesuada.
          </p>
        </div>
        <div className="flex-1 pr-10 md:pl-7 md:order-1">
          <img 
            src="https://cdn.pixabay.com/photo/2016/11/18/13/23/action-1834465_1280.jpg" 
            alt="man-run" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="flex-1  md:order-2">
          <h3 className="mb-2 capitalize text-xl">titre paragraphe</h3>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus odio risus, nec bibendum diam ornare ut. Donec vehicula eleifend purus sed malesuada. Sed ullamcorper augue vel sem pretium luctus. Etiam vulputate, libero vel interdum consequat, ex leo rutrum leo, in eleifend purus eros euismod tortor. Donec eu purus quis augue fermentum ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus odio risus, nec bibendum diam ornare ut. Donec vehicula eleifend purus sed malesuada.
          </p>
        </div>
        <div className="flex-1 md:pl-10 md:pr-7 md:order-1">
          <img 
            src="https://cdn.pixabay.com/photo/2023/10/04/14/15/man-8293794_1280.jpg" 
            alt="man-run" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}