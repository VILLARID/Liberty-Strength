import TestimonialsCards from "../components/Testimonials/TestimonialsCards";

function Testimonials() {

    const testimonials = [
        {
            name: "Michael Brown",
            role: "Member for 2 years",
            text: "The trainers here completely changed my routine. I feel stronger and healthier than ever."
        },
        {
            name: "Sarah Wilson",
            role: "Member for 1 year",
            text: "Amazing environment and people. I actually enjoy going to the gym now."
        },
        {
            name: "Daniel Smith",
            role: "Member for 8 months",
            text: "I lost weight, gained confidence, and made new friends here."
        }
    ];

    return (
        <section
            id="testimonials"
            className="relative w-full px-5 pt-30 pb-24 overflow-hidden"
        >

            {/* Background effects */}
            <div className="absolute top-20 -left-20 w-60 h-60 rounded-full blur-3xl bg-[#316ef2]/10" />

            <div className="absolute bottom-10 -right-20 w-60 h-60 rounded-full blur-3xl bg-[#e58ff2]/10" />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-52 h-52 rounded-full blur-3xl bg-[#fd8003]/5" />

            {/* Header */}
            <div className="relative flex flex-col items-center mb-14">

                <div className="flex justify-center items-center text-3xl font-semibold">

                    <span className="text-white mr-2">
                        What Our
                    </span>

                    <span className="bg-linear-to-r from-[#316ef2] via-[#e58ff2] to-[#fd8003] bg-clip-text text-transparent">
                        Members Say
                    </span>

                </div>

                <p className="mt-5 text-center text-gray-400 max-w-sm">
                    Real stories from real people who transformed their lives with us
                </p>

            </div>

            {/* Testimonials */}
            <div className="relative">
                <TestimonialsCards testimonials={testimonials} />
            </div>

        </section>
    );
}

export default Testimonials;