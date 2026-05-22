import { Users, Clock, Zap, Trophy } from "lucide-react";
import DataCards from "../components/OurImpact/DataCards";

function OurImpact() {

    const impactData = [
        {
            icon: Users,
            value: "5,000",
            label: "Active Members",
            description: "Athletes and fitness enthusiasts training every day.",
            growth: "12%",
            color: "blue"
        },
        {
            icon: Clock,
            value: "24",
            label: "Hours Access",
            description: "Train anytime with unrestricted gym access.",
            growth: "8%",
            color: "orange"
        },
        {
            icon: Zap,
            value: "100",
            label: "Training Programs",
            description: "Structured plans for strength, cardio and performance.",
            growth: "15%",
            color: "blue"
        },
        {
            icon: Trophy,
            value: "250",
            label: "Success Stories",
            description: "Members achieving goals and transforming results.",
            growth: "18%",
            color: "orange"
        }
    ];

    return (
        <section id="about" className="relative w-full min-h-screen pt-30">

            {/* Content */}
            <div className="relative z-10">

                <div className="flex flex-col gap-10 items-center text-white">

                    <span className="text-5xl font-semibold">
                        Our
                        <span className="bg-linear-to-r from-[#316ef2] via-[#e58ff2] to-[#fd8003] bg-clip-text text-transparent ml-3">
                            Impact
                        </span>
                    </span>

                    <span className="text-center text-gray-400">
                        Numbers that show our commitment to excellence and success
                    </span>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center mt-16">

                    {impactData.map((card, index) => (
                        <DataCards
                            key={index}
                            icon={card.icon}
                            value={card.value}
                            label={card.label}
                            description={card.description}
                            growth={card.growth}
                            color={card.color}
                        />
                    ))}

                </div>

            </div>

        </section>
    );
}

export default OurImpact;