import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { categories } from "@/data/categories";

const navLinks = [
    {
        label: "Categories",
        path: "/categories",
    },
    {
        label: "Products",
        path: "/products",
    },
    {
        label: "Quality",
        path: "/quality",
    },
    {
        label: "Private Label",
        path: "/private-label",
    },
    {
        label: "Contact",
        path: "/contact",
    },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 left-0 right-0 z-50  bg-[#F5F1ECE0] backdrop-blur-md border-b border-black/5">
            <nav className="container relative">
                <div className="flex lg:h-15 h-12 items-center justify-between">
                    {/* Logo */}
                    <Link
                        to="/"
                        id="logo"
                    >
                        Origin Connect
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-5">
                        {navLinks.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={({ isActive }) =>
                                    `text-[12px] font-medium transition-all duration-300 uppercase tracking-[1px] ${isActive
                                        ? "text-black"
                                        : "text-[#7A7268] hover:text-black"
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </div>

                    {/* Desktop Button */}
                    <div className="hidden lg:block">
                        <button className="nav-btn">
                            ENQUIRE NOW
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden mobile-nav absolute top-12 left-0 right-0 bg-[#F5F1EC] border-t border-black/10 transition-all duration-300 ease-in-out ${isOpen
                        ? "translate-y-0 opacity-100 visible"
                        : "-translate-y-10 opacity-0 invisible"
                        }`}>
                    <div className="flex flex-col gap-3">
                        {navLinks.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                onClick={() => setIsOpen(false)}
                                className={`text-[11px] font-medium transition-all duration-300 uppercase tracking-[1px] text-[#7A7268] hover:text-black
                                    `}
                            >
                                {item.label}
                            </NavLink>
                        ))}

                        <button className="nav-btn">
                            ENQUIRE NOW
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;