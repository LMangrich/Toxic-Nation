import placeholderAvatar from '../../assets/image 58.png';

const teamMembers = [
  {
    role: 'ART DIRECTOR',
    name: 'Mateus Heinz',
    description: 'Leading the visual development with 10+ years in game art direction and concept design.',
    image: '/placeholder-avatar.png', // Replace with actual image path
  },
  {
    role: 'NARRATIVE',
    name: 'Livia Silva',
    description: 'Crafting the dystopian lore and interconnected story threads of the Toxic Nation universe.',
    image: '/placeholder-avatar.png',
  },
  {
    role: 'TECH ART',
    name: 'Helena Licheski',
    description: 'Bridging art and technology to create this unique interactive artbook experience.',
    image: '/placeholder-avatar.png',
  },
  {
    role: 'SOUND DESIGN',
    name: 'Lucca Kyuzans',
    description: 'Designing atmospheric soundscapes that bring the toxic world to life.',
    image: '/placeholder-avatar.png',
  },
];

export const CreativeTeamSection = () => {
  return (
    <section className="px-16">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-[64px] font-nemesys text-white mb-4 tracking-wider">
            CREATIVE TEAM
          </h2>
          <p className="text-18 font-semibold font-cabin text-white">
            Meet the talented individuals behind Toxic Nation
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-[92px]">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative"
            >
              {/* Card Container */}
              <div 
                className="relative bg-gradient-to-b from-[#4A6B3E] to-[#2D4229] border-2 border-toxic-green p-6"
                style={{
                  boxShadow: '4px 4px 4px 0px rgba(145, 255, 34, 0.25), -2px -2px 4px 0px rgba(145, 255, 34, 0.25)',
                }}
              >
                {/* Corner squares outside border */}
                <div className="absolute left-0 top-0 -translate-y-2 -translate-x-1.5 h-4 w-4 bg-toxic-green" />
                <div className="absolute right-0 bottom-0 translate-y-2 translate-x-1.5 h-4 w-4 bg-toxic-green" />
                
                {/* Role Tag */}
                <div className="bg-black/60 border border-toxic-green px-3 py-1 flex items-center gap-2 w-fit mb-4">
                  <div className="w-3 h-3 rounded-full border-2 border-toxic-green"></div>
                  <span className="text-12 font-cabin text-toxic-green uppercase tracking-wide">
                    {member.role}
                  </span>
                </div>

                {/* Avatar Image */}
                <div className="mb-4">
                  <img 
                    src={placeholderAvatar} 
                    alt={member.name}
                    className="w-full h-auto"
                  />
                </div>

                {/* Name */}
                <div className="bg-black/60 border border-toxic-green px-3 py-2 mb-4">
                  <h3 className="text-16 font-cabin text-white">{member.name}</h3>
                </div>

                {/* Description */}
                <p className="text-14 font-cabin text-white leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className='border-b border-toxic-green scale-x-[85%]'/>
        <div className='flex flex-row justify-between -translate-y-2'>
        <div className='flex flex-row gap-1 items-start'>
            <div className="h-4 w-4 bg-toxic-green" />
            <div className="h-4 w-4 bg-toxic-green" />
            <div className="h-4 w-4 bg-toxic-green" />
        </div>
        <div className='flex flex-row gap-1 self-end'>
            <div className="h-4 w-4 bg-toxic-green" />
            <div className="h-4 w-4 bg-toxic-green" />
            <div className="h-4 w-4 bg-toxic-green" />
        </div>
        </div>
      </div>
    </section>
  );
};
