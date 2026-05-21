import { Menu, X } from "lucide-react";
import { useState } from "react";

import logo from "../../assets/Logo/logo_ls.png";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { name: "Home", href: "#home" },
        { name: "Programs", href: "#programs" },
        { name: "Trainers", href: "#trainers" },
        { name: "Pricing", href: "#pricing" },
        { name: "Gallery", href: "#gallery" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <>
            <nav className="fixed w-full bg-black py-5 px-5 z-10">

                <div className="flex justify-between items-center">

                    {/* Logo */}
                    <div className="flex items-center gap-5 text-white">

                        <img
                            src={logo}
                            alt="Logo"
                            className="size-15"
                        />

                        <div className="flex flex-col">

                            <h2 className="text-xl font-semibold">
                                Liberty Strength
                            </h2>

                            <span className="text-gray-400 text-sm">
                                TRANSFORM YOUR LIFE
                            </span>

                        </div>

                    </div>

                    {/* Mobile Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? (
                            <X className="text-white" />
                        ) : (
                            <Menu className="text-white" />
                        )}
                    </button>

                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="flex flex-col gap-13 mt-13 text-white">

                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}

                        {/* Button */}
                        <button className="w-full py-3 rounded-xl text-white text-lg font-semibold bg-linear-to-r from-[#2563eb] via-[#ff3ea5] to-[#ff2d2d] shadow-[0_0_25px_rgba(255,62,165,0.45)] hover:shadow-[0_0_35px_rgba(255,62,165,0.65)] hover:scale-[1.03] active:scale-[0.97] transition-all duration-300">
                            Join Now
                        </button>

                    </div>
                )}

            </nav>
        </>
    );
}

export default Navbar;