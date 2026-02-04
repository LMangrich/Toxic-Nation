import map from "../../assets/freepik__pixel-art-pixel-art-holographic-topographic-map-in__52275 1.webp"
import { CardMapWavingHandIcon, CardMapImagesIcon, CardMapProfileIcon, CardMapPaperIcon, CardMapChatIcon } from "../../components/Icons/Icons"

const legendItems = [
  { color: 'bg-toxic-green border-toxic-green', label: 'Unexplored', textColor: 'text-[#D6F264]' },
  { color: 'bg-toxic-green border-toxic-green', label: 'Visited', textColor: 'text-[#D6F264]' },
  { color: 'bg-toxic-pink border-toxic-pink', label: 'Secrets', textColor: 'text-toxic-pink' },
];

const barcodeVertical = Array(6).fill(null);
const barcodeHorizontal = Array(3).fill(null);

export const DiscoverMapSection = () => {
  return (
    <section className="px-16 py-9"> 
      <div className="mx-auto text-center">
          {/* <h2 className="absolute text-[64px] font-nemesys">
            Discover the hidden secrets
          </h2> */}
          <div className="relative max-w-[1200px] max-h-[870px] mx-auto">
              {/* Borda superior */}
              <div className="absolute inset-0 border-t-2 border-highlight-toxic-green/40 scale-[94.5%]" />
              <div className="absolute inset-0 border-t-2 border-highlight-toxic-green/40 scale-x-[93.8%] scale-y-[93.5%]" />

              {/* Borda inferior*/}
              <div className="absolute bottom-[2.8%] left-[15.5%] right-[0.55%] h-0 border-t-2 border-highlight-toxic-green/40 scale-[94.5%]" />
              <div className="absolute bottom-[3.2%] left-[15.2%] right-[0.5%] h-0 border-t-2 border-highlight-toxic-green/40 scale-x-[93.8%] scale-y-[93.5%]" />
              <div className="absolute bottom-[2.7%] left-[17.65%] h-[6px] w-0 border-l-2 border-highlight-toxic-green/40 scale-x-[93.8%] scale-y-[93.5%]" />

              {/* Borda lateral esquerda */}
              <div className="absolute left-[2.7%] top-[0.5%] bottom-[10.9%] w-0 border-l-2 border-highlight-toxic-green/40 scale-[94.5%]" />
              <div className="absolute left-[3%] top-[0.3%] bottom-[10.4%] w-0 border-l-2 border-highlight-toxic-green/40 scale-x-[93.8%] scale-y-[93.5%]" />
              <div className="absolute bottom-[13.2%] left-[2.7%] h-0 w-[5px] border-b-2 border-highlight-toxic-green/40 scale-x-[93.8%] scale-y-[93.5%]" />

              {/* Borda lateral direita */}
              <div className="absolute right-0 top-[0.2%] inset-0 border-r-2 border-highlight-toxic-green/40 scale-[94.5%]" />
              <div className="absolute right-0 top-[0.2%] bottom-[0.2%] left-[2%] inset-0 border-r-2 border-highlight-toxic-green/40 scale-x-[93.8%] scale-y-[94%]" />

            <img src={map} 
                alt="Map Placeholder" 
                className="max-w-[1200px] max-h-[870px] w-full h-full object-cover"
            />
            
            {/* Fade gradients */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute left-0 top-0 w-7 h-full bg-gradient-to-r from-black to-transparent" />
              <div className="absolute right-0 top-0 w-7 h-full bg-gradient-to-l from-black to-transparent" />
            </div>

            {/* Map Icons */}
            <CardMapProfileIcon className="absolute top-[18%] left-[15%] hover:scale-110 transition-transform cursor-pointer h-auto" />
            <CardMapWavingHandIcon className="absolute top-[22%] left-[43%] hover:scale-110 transition-transform cursor-pointer h-auto" />
            <CardMapWavingHandIcon className="absolute top-[16%] left-[60%] hover:scale-110 transition-transform cursor-pointer h-auto" />
            <CardMapPaperIcon className="absolute top-[18.5%] left-[72%] hover:scale-110 transition-transform cursor-pointer h-auto" />
            <CardMapChatIcon className="absolute top-[25%] right-[10%] hover:scale-110 transition-transform cursor-pointer h-auto" />
            <CardMapWavingHandIcon className="absolute top-[37%] left-[30%] hover:scale-110 transition-transform cursor-pointer h-auto" />
            <CardMapImagesIcon className="absolute bottom-[35%] left-[32%] hover:scale-110 transition-transform cursor-pointer h-auto" />
            <CardMapWavingHandIcon className="absolute bottom-[25%] right-[26%] hover:scale-110 transition-transform cursor-pointer h-auto" />

            {/* Legend Box */}
            

            <div className="absolute bottom-[10%] right-[8%] bg-[#24523B66]/40 border-2 border-toxic-green p-4 shadow-[4px_4px_4px_0px_#91FF2240,-2px_-2px_4px_0px_#91FF2240]">              <div className="absolute right-0 top-0 -translate-y-2 translate-x-1.5 h-4 w-4 bg-toxic-green" />
              <div className="absolute left-0 top-0 -translate-y-2 -translate-x-1.5 h-4 w-4 bg-toxic-green" />
              <div className="absolute right-0 bottom-0 translate-y-2 translate-x-1.5 h-4 w-4 bg-toxic-green" />
              <div className="absolute left-0 bottom-0 translate-y-2 -translate-x-1.5 h-4 w-4 bg-toxic-green" />
            <div className="space-y-2 text-left">
                {legendItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className={`w-4 h-4 ${item.color} border`}></div>
                    <span className={`${item.textColor} text-16 font-cabin`}>{item.label}</span>
                  </div>
                ))}
                <div className="text-[#F597B9] text-12 md:text-16 font-cabin mt-2 md:mt-3">
                  Found 0/1
                </div>
                <div className="mt-3 pt-2 border-t border-toxic-green/30">
                  <div className="w-full h-2 bg-black border border-toxic-green">
                    <div className="h-full bg-toxic-green" style={{ width: '0%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Left Barcode */}
            <div className="absolute bottom-[2.8%] left-[2.8%]">
              <div className="flex gap-1">
                <div className="flex flex-row gap-1.5">
                  {barcodeVertical.map((_, i) => (
                    <div key={i} className="w-2.5 h-20 bg-toxic-green"></div>
                  ))}
                </div>
                <div className="flex flex-col gap-1.5 self-end">
                  {barcodeHorizontal.map((_, i) => (
                    <div key={i} className="w-20 h-2.5 bg-toxic-green"></div>
                  ))}
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}

//arrynmar esse pr dps