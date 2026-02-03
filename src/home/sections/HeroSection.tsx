import Button from '../../components/Button/Button';
import background_image from '../../assets/background_image.webp'

const HeroSection = () => {
  return (
    <section className="relative px-16 py-12 border-b border-toxic-green overflow-hidden">
        <div 
          className="max-w-6xl mx-auto absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: `url(${background_image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        <div className='relative z-10 max-w-6xl mx-auto grid grid-cols-2 gap-12 w-full items-start'>
            <div className="max-w-lg">
            <h2 className="max-w-md text-48 font-cabin font-semibold leading-tight mb-4">
                Where light cannot reach, hope must carve its own path.
            </h2>
            
            <p className="text-16 mb-8 max-w-sm">
                An interactive artbook experience - Explore a dystopian narrative through concept art, stories, and secrets about the game.
            </p>

            <div className="flex flex-wrap gap-4">
                <Button variant="primary" className="">
                Non-Linear Exploration
                </Button>
                <Button variant="primary">
                Exclusive Content
                </Button>
                <Button variant="secondary">
                Hidden Secrets
                </Button>
            </div>
            </div>

            <div className="w-full">
            <div className="relative aspect-video max-w-[381px] h-[284px] rounded-lg overflow-hidden border-2 border-gray-800">
                <div className="w-full h-full bg-gradient-to-b from-green-400/20 to-purple-900/20 flex items-center justify-center">
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 w-20 h-20 rounded-full border-4 border-white flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-l-[20px] border-l-white border-y-[12px] border-y-transparent ml-1" />
                </div>
                </div>
            </div>
            </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
            <h1 className="mt-20 text-[144px] text-left text-toxic-green font-hitobito font-semibold mb-4">
                Toxic Nation
            </h1>

            <div className='max-w-5xl flex flex-row justify-between'>
                <span className='font-hitobito text-20 text-toxic-green/40'>
                    Team TN
                </span>

                <span className='font-hitobito text-20 text-toxic-green/40'>
                    All rights reserved
                </span>
            </div>
        </div>
    </section>
  );
};

export default HeroSection;
