import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import OurImpact from "./pages/OurImpact";
import OurPrograms from "./pages/OurPrograms";
import Trainers from "./pages/Trainers";

function App() {
    return (
        <>
            <Navbar />

            <Home />

            <div className="relative overflow-hidden">

                {/* Background global */}
                <div className="absolute inset-0 bg-[linear-gradient(135deg,#0a1224_0%,#13203d_45%,#2a1812_100%)]"></div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Glow */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-700/10 rounded-full blur-[150px]"></div>

                <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-[150px]"></div>

                {/* Pages */}
                <div className="relative z-10">
                    <OurImpact />
                    <OurPrograms />
                    <Trainers />
                </div>

            </div>
        </>
    );
}

export default App;