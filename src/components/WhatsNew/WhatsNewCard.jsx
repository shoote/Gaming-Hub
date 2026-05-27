const WhatsNewCard = ({ image, title, description, platforms }) => {
  return (
    <div className="bg-gray-400/5 rounded-xl p-3 sm:p-0 hover:bg-gray-400/10 transition-colors duration-300">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
        
        {/* Image Container Wrapping Fixed Aspect Wrapper */}
        <div className="w-full">
          <div className="w-full aspect-4/3 overflow-hidden rounded-xl shadow-md">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Content Container */}
        <div className="sm:col-span-2 px-2 pb-2 sm:p-4">
          
          {/* Separate Platform Boxes Wrapper */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            {platforms.map((platform, idx) => (
              <div 
                key={idx} 
                className="inline-flex py-1 px-3 items-center gap-1.5 bg-gray-400/20 text-xs font-medium text-white rounded-md"
              >
                {platform.icon}
                <span>{platform.name}</span>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold mb-2 tracking-wide">{title}</h2>
          <p className="text-sm text-white/70 line-clamp-3 leading-relaxed">{description}</p>
        </div>

      </div>
    </div>
  );
};

export default WhatsNewCard;
