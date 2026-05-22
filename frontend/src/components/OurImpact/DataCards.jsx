import { Users, TrendingUp } from "lucide-react";

function DataCards({
    icon: Icon = Users,
    value,
    label,
    description,
    growth,
    color = "blue"
}) {

    const styles = {
        blue: {
            iconBg: "bg-blue-500/15 border-blue-400/20",
            iconColor: "text-[#6ea8ff]",
            textColor: "text-[#6ea8ff]",
            glow: "bg-blue-500/20"
        },
        orange: {
            iconBg: "bg-orange-500/15 border-orange-400/20",
            iconColor: "text-[#ff9b54]",
            textColor: "text-[#ff9b54]",
            glow: "bg-orange-500/20"
        }
    };

    return (
        <div className="relative overflow-hidden flex flex-col gap-6 w-96 p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 text-white hover:scale-105 hover:bg-white/10 transition duration-500">

            {/* Glow */}
            <div
                className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl ${styles[color].glow}`}
            />

            {/* Icon + Growth */}
            <div className="flex justify-between items-start">

                <div className={`rounded-2xl p-4 border ${styles[color].iconBg}`}>
                    <Icon className={`${styles[color].iconColor} size-10`} />
                </div>

                <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-green-400">
                    <TrendingUp size={14} />
                    <span>{growth}</span>
                </div>

            </div>

            {/* Number */}
            <div className="flex items-end gap-2">
                <span className={`text-5xl font-light tracking-tight ${styles[color].textColor}`}>
                    {value}
                </span>

                <span className={`text-4xl font-light ${styles[color].textColor}`}>
                    +
                </span>
            </div>

            {/* Main label */}
            <div>
                <h3 className="text-xl font-medium">
                    {label}
                </h3>

                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                    {description}
                </p>
            </div>

        </div>
    );
}

export default DataCards;