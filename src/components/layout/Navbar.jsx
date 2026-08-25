import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, MoveRight } from "lucide-react";
import logo from "@/assets/images/logoOC.svg";
import useLanguage from "@/hooks/useLanguage";

const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }
};
const Navbar = () => {
    const { navbarData, categoriesBanner } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Categories page or any category detail page
    const isCategoriesActive =
        location.pathname === "/categories" ||
        location.pathname.startsWith("/categories/");
    const navLinks = navbarData.links.map((item) => {
        if (item.type !== "dropdown") return item;
        return {
            ...item,
            children: Object.entries(categoriesBanner).map(([slug, value]) => ({
                label: value.menuTitle,
                path: `/categories/${slug}`,
            })),
        };
    });
    return (
        <header className="sticky top-0 left-0 right-0 z-50 bg-[#FFF] backdrop-blur-md border-b border-black/5">
            <nav className="container relative">
                <div className="flex lg:h-15 h-12 items-center justify-between">
                    {/* <Link to="/" id="logo">
                        Origin Connect
                    </Link> */}
                    <Link
                        to="/"
                        className="navbar-logo"
                    >
                        <img
                            src={logo}
                            alt={navbarData.logo.alt}
                            className="navbar-logo-image"
                        />
                        <div className="navbar-logo-content">
                            <span className="navbar-logo-title" id="logo">
                                {navbarData.logo.title}
                            </span>
                        </div>
                    </Link>
                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-5">
                        {navLinks.map((item) => (
                            item.type === "scroll" ? (
                                <button
                                    key={item.label}
                                    onClick={() => scrollToSection(item.sectionId)}
                                    className="nav-link text-[12px] uppercase tracking-[1px] transition-all duration-300 text-[#7A7268] hover:text-black cursor-pointer"
                                >
                                    {item.label}
                                </button>
                            ) :
                                item.type === "dropdown" ? (
                                    <div key={item.label} className="category-dropdown">
                                        <Link
                                            to={item.path}
                                            className={`category-dropdown-btn nav-link ${isCategoriesActive ? "active" : ""
                                                }`}
                                        >
                                            {item.label}
                                            <ChevronDown
                                                size={14}
                                                aria-hidden="true"
                                            />
                                        </Link>
                                        <div className="category-dropdown-menu">
                                            {item.children?.map((child) => (
                                                <Link
                                                    key={child.path}
                                                    to={child.path}
                                                    className="category-dropdown-item"
                                                >
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )
                                    : (
                                        <NavLink
                                            key={item.path}
                                            to={item.path}
                                            className={({ isActive }) =>
                                                `nav-link text-[12px] uppercase tracking-[1px] ${isActive
                                                    ? "active text-black"
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
                        <Link to={'/contact'} className="nav-btn" type="button">
                            {navbarData.enquireButton}
                        </Link>
                    </div>
                    {/* Mobile Toggle */}
                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden"
                        aria-label={
                            isOpen
                                ? "Close navigation menu"
                                : "Open navigation menu"
                        }
                        aria-expanded={isOpen}
                    >
                        {isOpen ? (
                            <X size={20} aria-hidden="true" />
                        ) : (
                            <Menu size={20} aria-hidden="true" />
                        )}
                    </button>
                </div>
                {/* Mobile Menu */}
                <div
                    className={`lg:hidden mobile-nav absolute top-12 left-0 right-0 bg-[#F5F1EC] border-t border-black/10 transition-all duration-300 ${isOpen
                        ? "translate-y-0 opacity-100 visible"
                        : "-translate-y-10 opacity-0 invisible"
                        }`}
                >
                    <div className="flex flex-col gap-3">
                        {navLinks.map((item) => (
                            item.type === "scroll" ? (
                                <button
                                    type="button"
                                    key={item.label}
                                    onClick={() => {
                                        scrollToSection(item.sectionId);
                                        setIsOpen(false);
                                    }}
                                    className="text-[11px] cursor-pointer uppercase tracking-[1px] text-[#7A7268] text-left"
                                >
                                    {item.label}
                                </button>
                            )
                                :
                                item.type === "dropdown" ? (
                                    <div key={item.label} className="mobile-category">

                                        <Link
                                            to={item.path}
                                            onClick={() => setIsOpen(false)}
                                            className="mobile-category-title"
                                        >
                                            {item.label}
                                        </Link>

                                        <div className="mobile-category-list">
                                            {item.children?.map((child) => (
                                                <Link
                                                    key={child.path}
                                                    to={child.path}
                                                    onClick={() => setIsOpen(false)}
                                                    className="mobile-category-item"
                                                >
                                                    <MoveRight
                                                        size={16}
                                                        aria-hidden="true"
                                                    />
                                                    <span>{child.label}</span>
                                                </Link>
                                            ))}
                                        </div>

                                    </div>
                                )
                                    : (

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