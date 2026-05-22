import ProgramCards from "../components/OurPrograms/ProgramCards";
import { Dumbbell, HeartPulse, Users, Flower2 } from "lucide-react";

const programs = [
    {
        icon: Dumbbell,
        title: "Strength Training",
        description:
            "Build strength and increase muscle performance with guided workouts.",
        color: "blue"
    },
    {
        icon: HeartPulse,
        title: "Cardio Fitness",
        description:
            "Improve endurance and cardiovascular health with dynamic routines.",
        color: "orange"
    },
    {
        icon: Users,
        title: "Personal Coaching",
        description:
            "Train with expert guidance tailored to your goals.",
        color: "blue"
    },
    {
        icon: Flower2,
        title: "Yoga & Mobility",
        description:
            "Increase flexibility, balance and recovery through mindful movement.",
        color: "orange"
    }
];

function OurPrograms() {
    return (
        <section
            id="programs"
            className="relative w-full min-h-screen pt-30"
        >
            <div className="flex flex-col items-center mb-20">

                <div className="flex items-center text-5xl font-semibold text-white leading-normal">
                    <span>Our</span>

                    <span className="bg-linear-to-r from-[#316ef2] via-[#e58ff2] to-[#fd8003] bg-clip-text text-transparent ml-3">
                        Programs
                    </span>
                </div>

                <p className="mt-5 text-center text-gray-400 max-w-xl">
                    Expertly designed programs tailored to improve strength,
                    endurance, flexibility, and overall wellness.
                </p>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 justify-items-center">
                {programs.map((program, index) => (
                    <ProgramCards
                        key={index}
                        icon={program.icon}
                        title={program.title}
                        description={program.description}
                        color={program.color}
                    />
                ))}
            </div>
        </section>
    );
}

export default OurPrograms;