import pixel_art from '../../assets/pixel_art.png';

export const StayConnectedSection = () => {
  return (
    <section className="relative max-w-7xl mx-auto px-16 py-20 overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `url(${pixel_art})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-[64px] md:text-[64px] font-nemesys text-white mb-8 tracking-wider">
          STAY CONNECTED
        </h2>

        <p className="text-18 md:text-24 font-cabin text-white mb-12">
          wishlist our game, contribute to the evolution of Toxic Nation
        </p>

        <div className="max-w-3xl mx-auto">
          <div className='bg-[#50606d] rounded-sm overflow-hidden'>
            <div className="flex items-center justify-between px-6 py-4 bg-[#3d4e5c]">
              <div className="flex items-center gap-3">
                <h3 className="text-20 font-bold font-cabin text-white">Toxic Nation</h3>
                <span className="text-14 font-cabin text-white/60">On steam</span>
              </div>
              <div>
                <svg className="w-10 h-10 text-[#7a95ac]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
            </div>

            <div className="flex gap-4 p-6">
              <div className="flex-shrink-0 w-44 h-28 bg-black rounded-sm overflow-hidden">
                <img 
                  src={pixel_art} 
                  alt="Game screenshot"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <p className="text-13 font-cabin text-white/90 leading-relaxed">
                  Toxic Nation is a 2D pixel-art platformer that blends Metroidvania exploration with base expansion and resource management. Set in the year 2185, after biological and nuclear conflicts rendered the Earth's surface uninhabitable, humanity was forced to survive in vast underground cities built from scrap and forgotten technology.
                </p>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex gap-2">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <span className="text-white/60 text-14">⊞</span>
                    </div>
                    <div className="w-6 h-6 flex items-center justify-center">
                      <span className="text-white/60 text-14">◐</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="text-16 font-cabin text-white bg-[#5c7a3b] px-4 py-2 rounded-sm">
                      Comin soon
                    </div>
                    <button className="bg-[#5c7e35] hover:bg-[#6a9140] text-white font-cabin font-bold px-5 py-2 rounded-sm transition-colors">
                      + Wishlist on Steam
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
