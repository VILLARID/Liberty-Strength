function TrainersCards({
    image,
    title,
    subtitle,
    data = []
}) {

    return (
        <div className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 text-white transition-all duration-500 hover:scale-[1.03] hover:bg-white/8">

            {/* Glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl bg-white/5" />

            {/* Image */}
            <div className="relative h-80 overflow-hidden">

                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

            </div>

            {/* Content */}
            <div className="p-6">

                {/* Name */}
                <h3 className="text-2xl font-semibold truncate">
                    {title}
                </h3>

                {/* Specialization */}
                <p className="text-gray-400 mt-1 text-sm">
                    {subtitle}
                </p>

                {/* Mini tags */}
                <div className="flex flex-wrap gap-3 mt-6">

                    {data.map((item, index) => (

                        <div
                            key={index}
                            className="
                                px-4 
                                py-2 
                                rounded-xl 
                                bg-white/4
                                border 
                                border-white/10
                                text-gray-300
                                text-sm
                                backdrop-blur-sm
                            "
                        >
                            {item}
                        </div>

                    ))}

                </div>

            </div>

        </div>
    );
}

export default TrainersCards;