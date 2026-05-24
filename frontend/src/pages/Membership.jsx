import MembershipCard from "../components/Membership/MembershipCards";

function Membership() {

    const data = [
        {
            plan: "Basic",
            price: 29,
            data: [
                "Access to gym facilities",
                "Locker room access",
                "Free fitness assessment",
                "Mobile app access",
                "Community events"
            ]
        },
        {
            plan: "Premium",
            price: 49,
            data: [
                "Everything in Basic",
                "Group classes",
                "Personal trainer",
                "Nutrition guidance",
                "Priority support"
            ]
        },
        {
            plan: "Elite",
            price: 79,
            data: [
                "Everything in Premium",
                "Unlimited classes",
                "Private sessions",
                "Custom workout plans",
                "VIP access"
            ]
        }
    ];

    return (
        <section
            id="pricing"
            className="relative min-h-screen w-full px-6 pt-30"
        >

            {/* Header */}
            <div className="flex flex-col items-center mb-20">

                <h2 className="text-center text-white text-5xl font-semibold">
                    Choose Your <br />

                    <span className="bg-linear-to-r from-[#316ef2] via-[#e58ff2] to-[#fd8003] bg-clip-text text-transparent">
                        Membership
                    </span>
                </h2>

                <p className="mt-5 max-w-xl text-center text-gray-400">
                    Flexible plans designed to fit your lifestyle and fitness goals
                </p>

            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {
                    data.map((item, index) => (
                        <MembershipCard
                            key={index}
                            plan={item.plan}
                            price={item.price}
                            data={item.data}
                            popular={item.plan === "Premium"}
                        />
                    ))
                }

            </div>

        </section>
    );
}

export default Membership;