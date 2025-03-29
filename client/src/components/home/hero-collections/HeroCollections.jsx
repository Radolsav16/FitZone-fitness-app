export default function HeroCollections(){
    return(
        <>
            <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {/* Card */}
              <div  className="group relative">
                <img
                  alt=""
                  src={'https://th.bing.com/th/id/OIP.Duxekj2U3jM8AIkadngs7AHaE8?rs=1&pid=ImgDetMain'}
                  className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                />
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href="">
                    <span className="absolute inset-0" />
                    Gym Essentials
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">All need products!</p>
              </div>

              <div  className="group relative">
                <img
                  alt=""
                  src={'https://th.bing.com/th/id/OIP.qHtuytg7ZaID7umEnLRo-AHaEK?w=1200&h=675&rs=1&pid=ImgDetMain'}
                  className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                />
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href="">
                    <span className="absolute inset-0" />
                    Home Workout Collection
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">Products for home trainings!</p>
              </div>

              <div  className="group relative">
                <img
                  alt=""
                  src={'https://th.bing.com/th/id/OIP.X84Hyf8h0Ye2i9fWPlr5NgHaE8?rs=1&pid=ImgDetMain'}
                  className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                />
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href="">
                    <span className="absolute inset-0" />
                    Tech & Accessories
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">Look Good While Training</p>
              </div>
     

     

          </div>


        
              {/* Card */}
          

        


        </div>
      </div>
    </div>
        </>
    )
}