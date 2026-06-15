import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowBigLeft, ArrowRight, ArrowRightIcon, MoveRight } from "lucide-react";
import { categories } from "@/data/categories";

const navLinks = [
    {
        label: "About Us",
        path: "/aboutus",
        type: "link",
    },

    {
        label: "Products",
        path: "/products",
        type: "link",
    },

    {
        label: "Categories",
        type: "dropdown",
    },
    {
        label: "Services",
        path: "/services",
        type: "link",
    },
    {
        label: "Contact",
        path: "/contact",
        type: "link",
    },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 left-0 right-0 z-50 bg-[#F5F1ECE0] backdrop-blur-md border-b border-black/5">
            <nav className="container relative">

                <div className="flex lg:h-15 h-12 items-center justify-between">

                    <Link to="/" id="logo">
                        Origin Connect
                    </Link>

                    {/* Desktop Menu */}
                    {/* <div className="hidden lg:flex items-center gap-5">

                        <div className="category-dropdown">
                            <button className="category-dropdown-btn">
                                Categories
                                <ChevronDown size={14} />
                            </button>

                            <div className="category-dropdown-menu">
                                {categories.map((category) => (
                                    <Link
                                        key={category.id}
                                        to={`/categories/${category.slug}`}
                                        className="category-dropdown-item"
                                    >
                                        {category.slug}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {navLinks.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={({ isActive }) =>
                                    `text-[12px] uppercase tracking-[1px] transition-all duration-300 ${
                                        isActive
                                            ? "text-black"
                                            : "text-[#7A7268] hover:text-black"
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </div> */}
                    <div className="hidden lg:flex items-center gap-5">

                        {navLinks.map((item) => (

                            item.type === "dropdown" ? (

                                <div
                                    key={item.label}
                                    className="category-dropdown"
                                >

                                    <button className="category-dropdown-btn">
                                        {item.label}
                                        <ChevronDown size={14} />
                                    </button>

                                    <div className="category-dropdown-menu">

                                        {categories.map((category) => (

                                            <Link
                                                key={category.id}
                                                to={`/categories/${category.slug}`}
                                                className="category-dropdown-item"
                                            >
                                                {category.menuTitle || category.slug}
                                            </Link>

                                        ))}

                                    </div>

                                </div>

                            ) : (

                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `text-[12px] uppercase tracking-[1px] transition-all duration-300 ${isActive
                                            ? "text-black"
                                            : "text-[#7A7268] hover:text-black"
                                        }`
                                    }
                                >
                                    {item.label}
                                </NavLink>

                            )

                        ))}

                    </div>
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
                    className={`lg:hidden mobile-nav absolute top-12 left-0 right-0 bg-[#F5F1EC] border-t border-black/10 transition-all duration-300 ${isOpen
                        ? "translate-y-0 opacity-100 visible"
                        : "-translate-y-10 opacity-0 invisible"
                        }`}
                >
                    {/* <div className="flex flex-col gap-3">

                        <div className="mobile-category">
                            <p className="mobile-category-title">
                                Categories
                            </p>

                            <div className="mobile-category-list">
                                {categories.map((category) => (
                                    <Link
                                        key={category.id}
                                        to={`/categories/${category.slug}`}
                                        onClick={() => setIsOpen(false)}
                                        className="mobile-category-item"
                                    >
                                        {category.slug}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {navLinks.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                onClick={() => setIsOpen(false)}
                                className="text-[11px] uppercase tracking-[1px] text-[#7A7268]"
                            >
                                {item.label}
                            </NavLink>
                        ))}

                        <button className="nav-btn">
                            ENQUIRE NOW
                        </button>

                    </div> */}
                    <div className="flex flex-col gap-3">

                        {navLinks.map((item) => (

                            item.type === "dropdown" ? (

                                <div
                                    key={item.label}
                                    className="mobile-category"
                                >

                                    <p className="mobile-category-title">
                                        {item.label}
                                    </p>

                                    <div className="mobile-category-list">

                                        {categories.map((category) => (

                                            <Link
                                                key={category.id}
                                                to={`/categories/${category.slug}`}
                                                onClick={() => setIsOpen(false)}
                                                className="mobile-category-item"
                                            >
                                             <MoveRight size={16} />  <span>{category.menuTitle || category.slug}</span>
                                            </Link>

                                        ))}

                                    </div>

                                </div>

                            ) : (

                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className="text-[11px] uppercase tracking-[1px] text-[#7A7268]"
                                >
                                    {item.label}
                                </NavLink>

                            )

                        ))}

                    </div>
                </div>

            </nav>
        </header>
    );
};

export default Navbar;