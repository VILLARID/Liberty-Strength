import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { useRef, useState } from "react";

function TestimonialsCards({ testimonials }) {

    const scrollRef = useRef(null);
    const [active, setActive] = useState(0);

    const scroll = (direction) => {

        if (!scrollRef.current) return;

        const width = scrollRef.current.clientWidth;

        const newIndex =
            direction === "left"
                ? Math.max(active - 1, 0)
                : Math.min(active + 1, testimonials.length - 1);

        setActive(newIndex);

        scrollRef.current.scrollTo({
            left: width * newIndex,
            behavior: "smooth"
        });

    };

    return (
        <div className="w-full">

            <div ref={scrollRef} className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide pb-3">

                {testimonials.map((item, index) => (

                    <div
                        key={index}
                        className="relative min-w-full snap-center rounded-3xl border border-white/10 bg-linear-to-br from-[#316ef2]/20 via-[#e58ff2]/15 to-[#fd8003]/20 backdrop-blur-md p-5"
                    >

                        <div className="absolute top-0 right-0 w-20 h-20 rounded-full blur-3xl bg-[#316ef2]/20" />

                        <Quote
                            size={32}
                            className="absolute top-4 right-4 text-white/10"
                        />

                        <div className="flex gap-1">

                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    size={13}
                                    fill="currentColor"
                                    className="text-yellow-400"
                                />
                            ))}

                        </div>

                        <p className="mt-4 text-sm leading-6 text-gray-200">
                            {item.text}
                        </p>

                        <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-3">

                            <div className="w-10 h-10 rounded-full bg-linear-to-r from-[#316ef2] via-[#e58ff2] to-[#fd8003]" />

                            <div>

                                <h4 className="text-sm font-semibold text-white">
                                    {item.name}
                                </h4>

                                <p className="text-xs text-gray-300">
                                    {item.role}
                                </p>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

            <div className="flex justify-center items-center gap-4 mt-6">

                <button
                    onClick={() => scroll("left")}
                    className="w-11 h-11 rounded-full border border-white/10 bg-white/5 text-white flex items-center justify-center"
                >
                    <ChevronLeft size={18} />
                </button>

                {/* Dots */}
                <div className="flex items-center gap-2">

                    {testimonials.map((_, index) => (

                        <div
                            key={index}
                            className={`rounded-full transition-all duration-300 ${
                                active === index
                                    ? "w-6 h-2 bg-white"
                                    : "w-2 h-2 bg-white/30"
                            }`}
                        />

                    ))}

                </div>

                <button
                    onClick={() => scroll("right")}
                    className="w-11 h-11 rounded-full bg-linear-to-r from-[#316ef2] via-[#e58ff2] to-[#fd8003] text-white flex items-center justify-center"
                >
                    <ChevronRight size={18} />
                </button>

            </div>

        </div>
    );
}

export default TestimonialsCards;