const products = [
    {
        id: 122,
        name: 'My Friend info ',
        href: 'https://myfriendinfo.vercel.app/',
        imageSrc: 'https://i.ibb.co/d2Tnjg3/React-App-Google-Chrome-18-11-2023-08-04-03.png ',
        imageAlt: "Front of men's Basic Tee in black.",
        btun: 'Vist',
        
      },
    {
        id: 12,
        name: 'Self drive cars',
        href: 'https://aadhya-self-drive-cars.vercel.app/',
        imageSrc: 'https://i.ibb.co/xFPn1j8/Photos-18-11-2023-07-54-50.png ',
        imageAlt: "Front of men's Basic Tee in black.",
        btun: 'Vist',
        
      },
      
    {
        id: 1,
        name: 'Todos ',
        href: 'https://gshivatodos.ccbp.tech/',
        imageSrc: 'https://i.ibb.co/DCfRN40/gshivatodos-ccbp-tech-Google-Chrome-18-11-2023-07-09-05.png ',
        imageAlt: "Front of men's Basic Tee in black.",
        btun: 'Vist',
        
      },
      {
        id: 2,
        name: 'intrest calculater',
        href: 'https://intrstcalcshiva.ccbp.tech/',
        imageSrc: 'https://i.ibb.co/3vQVhLq/gshivatodos-ccbp-tech-Google-Chrome-18-11-2023-07-22-13.png',
        imageAlt: "Front of men's Basic Tee in black.",
        btun: 'Vist',
        
      },
      {
        id: 3,
        name: 'wikipida',
        href: 'https://shivagwikipida.ccbp.tech/',
        imageSrc: 'https://i.ibb.co/zSBbW4N/gshivatodos-ccbp-tech-Google-Chrome-18-11-2023-07-31-10.png',
        imageAlt: "Front of men's Basic Tee in black.",
        btun: 'Vist',
        
      },
      {
        id: 4,
        name: 'Boomb Defues',
        href: 'https://shivagattu1.ccbp.tech/',
        imageSrc: 'https://i.ibb.co/Db2btcm/Photos-18-11-2023-07-36-53.png',
        imageAlt: "Front of men's Basic Tee in black.",
        btun: 'Vist',
        
      },
      

    {
      id: 5,
      name: 'cat response',
      href: 'https://gattushivarspon.ccbp.tech/',
      imageSrc: 'https://i.ibb.co/0tpjbpj/Photos-18-11-2023-07-42-17.png',
      imageAlt: "Front of men's Basic Tee in black.",
      btun: 'Vist',
      
    },

    {
        id: 6,
        name: 'Num Genaretor',
        href: 'https://shivanext3nums.ccbp.tech/',
        imageSrc: 'https://i.ibb.co/m0xkFVY/Number-Input-Validation-Google-Chrome-18-11-2023-06-53-25.png',
        imageAlt: "Front of men's Basic Tee in black.",
        btun: 'Vist',
        
      },
  
  
    // More products...
  ]
  
  export default function ProtfolioSection() {
    return (
      <div className="bg-white bg-gradient-to-tr bg-gradient-to-t from-violet-500 to-cyan-200 to-sky-300 p-4 sm:py-32" id="protfolio">
        <div className="mx-auto max-w-7xl  px-6 lg:px-8">
          <div className=" text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900  sm:text-4xl">PortFolio</h2>
            </div>
          <div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 border-t border-gray-600 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"></div>
            
            
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
       
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-2xl text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  
                </div>
                <a href={product.href}>
                <button type="button"  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{product.btun}</button>
                 </a>
              </div>
            </div>
          ))}
        </div>
          </div>
        </div>
   
    )
  }
  