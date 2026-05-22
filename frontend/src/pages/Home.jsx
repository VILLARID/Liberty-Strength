import { ArrowRight } from "lucide-react";
import background from "../assets/Home/background.jpg";

function Home() {
    return (
        <section id="home" className="relative w-full h-screen">

            {/* Background */}
            <img
                src={background}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">

                {/* Hero presentation */}
                <div>
                    <span className="text-sm uppercase tracking-widest text-gray-400">
                        Premium Fitness Experience
                    </span>
                </div>

                {/* Title */}
                <div className="flex flex-col text-5xl font-semibold leading-tight">
                    <span>Transform Your Body,</span>

                    <span className="bg-linear-to-r from-[#316ef2] via-[#e58ff2] to-[#fd8003] bg-clip-text text-transparent">
                        Transform Your Life
                    </span>
                </div>

                {/* Presentation */}
                <div className="mt-6 text-gray-300 text-lg max-w-2xl leading-relaxed">
                    <p>
                        Join the elite community of athletes and fitness enthusiasts.
                        <br />
                        State-of-the-art equipment, expert trainers,
                        <br />
                        and results that speak for themselves.
                    </p>
                </div>

                {/* Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row gap-4">

                    {/* Primary Button */}
                    <button className="flex items-center justify-center gap-2 bg-blue-600 px-7 py-4 rounded-xl font-semibold text-white shadow-lg hover:scale-105 transition">
                        Start Today
                        <ArrowRight size={18} />
                    </button>

                    {/* Secondary Button */}
                    <button className="flex items-center justify-center px-7 py-4 rounded-xl font-semibold border border-white/30 text-white hover:bg-white/10 transition">
                        View Memberships
                    </button>

                </div>

            </div>

        </section>
    );
}

export default Home;