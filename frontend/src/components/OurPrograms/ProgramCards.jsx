import { Users } from "lucide-react";

function ProgramCards({
    icon: Icon = Users,
    title,
    description,
    color = "blue"
}) {

    const styles = {
        blue: {
            iconBg: "bg-blue-500/15 border-blue-400/20",
            iconColor: "text-[#6ea8ff]",
            glow: "bg-blue-500/20",
            tag: "text-[#6ea8ff]"
        },
        orange: {
            iconBg: "bg-orange-500/15 border-orange-400/20",
            iconColor: "text-[#ff9b54]",
            glow: "bg-orange-500/20",
            tag: "text-[#ff9b54]"
        }
    };

    return (
        <div className="group relative w-96 p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden text-white hover:scale-105 hover:bg-white/10 transition-all duration-500">

            {/* Glow */}
            <div
                className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl ${styles[color].glow}`}
            />

            {/* Pattern */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-size[24px_24px]" />

            {/* Icon */}
            <div className="relative mb-6">
                <div className={`w-18 h-18 flex items-center justify-center rounded-2xl border ${styles[color].iconBg}`}>
                    <Icon className={`${styles[color].iconColor}`} size={34} />
                </div>
            </div>

            {/* Title */}
            <h3 className="relative text-2xl font-semibold mb-3">
                {title}
            </h3>

            {/* Description */}
            <p className="relative text-gray-400 leading-relaxed">
                {description}
            </p>

            {/* Tag */}
            <div className="relative mt-6">
                <span className={`px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm ${styles[color].tag}`}>
                    Explore Program
                </span>
            </div>

        </div>
    );
}

export default ProgramCards;