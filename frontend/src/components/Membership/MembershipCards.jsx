import { Zap } from "lucide-react";

function MembershipCard({
    plan,
    price,
    data = [],
    popular = false
}) {
    return (
        <div
            className={`group relative overflow-visible rounded-3xl border text-white
            transition-all duration-500 hover:scale-[1.03]

            ${
                popular
                    ? "bg-linear-to-br from-[#316ef2]/30 via-[#e58ff2]/20 to-[#fd8003]/30 border-white/20 shadow-2xl shadow-[#316ef2]/20"
                    : "bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/8"
            }`}
        >

            {/* Most Popular */}
            {popular && (
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 z-20">

                    <div className="
                    flex items-center gap-2
                    px-5 py-2
                    rounded-full
                    bg-white text-black
                    text-sm font-semibold
                    shadow-lg
                    ">

                        <Zap
                            size={15}
                            className="text-[#316ef2]"
                        />

                        <span>Most Popular</span>

                    </div>

                </div>
            )}

            {/* Glow */}
            <div
                className={`absolute -top-10 -right-10 w-44 h-44 rounded-full blur-3xl
                ${
                    popular
                        ? "bg-[#316ef2]/30"
                        : "bg-white/5"
                }`}
            />

            {/* Content */}
            <div
                className={`
                relative
                ${popular ? "pt-14" : "pt-10"}
                px-8
                pb-8
                min-h-[540px]
                flex
                flex-col
                `}
            >

                {/* Plan */}
                <h3 className="text-3xl font-semibold">
                    {plan}
                </h3>

                {/* Price */}
                <div className="mt-5">

                    <span className="
                    text-6xl
                    leading-none
                    font-bold
                    bg-linear-to-r
                    from-[#316ef2]
                    via-[#e58ff2]
                    to-[#fd8003]
                    bg-clip-text
                    text-transparent
                    ">
                        ${price}
                    </span>

                    <span className="
                    text-gray-300
                    ml-2
                    text-lg
                    ">
                        /month
                    </span>

                </div>

                {/* Divider */}
                <div className="my-8 h-px bg-white/10" />

                {/* Features */}
                <div className="flex flex-col gap-6 flex-1">

                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4"
                        >

                            <div
                                className={`
                                flex items-center justify-center
                                min-w-8 h-8 rounded-full border

                                ${
                                    popular
                                        ? "bg-[#316ef2]/20 border-[#316ef2]/50 text-[#6da3ff]"
                                        : "bg-white/10 border-white/20"
                                }
                                `}
                            >

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 h-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={3}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>

                            </div>

                            <p className="text-gray-300 leading-relaxed">
                                {item}
                            </p>

                        </div>
                    ))}

                </div>

            </div>

        </div>
    );
}

export default MembershipCard;