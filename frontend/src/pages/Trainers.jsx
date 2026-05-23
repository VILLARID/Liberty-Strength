import TrainersCard from "../components/Trainers/TrainersCards";

function Trainers() {

    const trainersData = [

        {
            title: "Michael Stone",
            subtitle: "Strength & Power Coach",
            image:
                "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=800",
            data: [
                "Powerlifting",
                "Strength",
                "HIIT",
                "8+ Years"
            ]
        },
        
        {
            title: "James Carter",
            subtitle: "Athletic Performance Trainer",
            image:
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800",
            data: [
                "Athletics",
                "Speed",
                "Agility",
                "9+ Years"
            ]
        },

        {
            title: "Olivia Bennett",
            subtitle: "Yoga & Wellness Coach",
            image:
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800",
            data: [
                "Yoga",
                "Meditation",
                "Flexibility",
                "7+ Years"
            ]
        }

    ];

    return (
        <section
            id="trainers"
            className="relative min-h-screen w-full px-6 pt-30"
        >

            {/* Header */}
            <div className="flex flex-col items-center mb-20">

                <h2 className="text-center text-white text-5xl font-semibold">

                    Meet Our <br />

                    <span className="bg-linear-to-r from-[#316ef2] via-[#e58ff2] to-[#fd8003] bg-clip-text text-transparent">
                        Expert Trainers
                    </span>

                </h2>

                <p className="mt-5 max-w-xl text-center text-gray-400">
                    Certified professionals dedicated to helping you achieve your fitness goals
                </p>

            </div>

            {/* Cards */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {trainersData.map((trainer, index) => (

                    <TrainersCard
                        key={index}
                        {...trainer}
                    />

                ))}

            </div>

        </section>
    );
}

export default Trainers;