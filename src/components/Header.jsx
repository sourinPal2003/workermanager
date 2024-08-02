import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-white border-b border-solid border-b-[#e7ebf3] px-6 lg:px-10 py-3 w-full">
            <div className="flex items-center justify-between max-w-screen-xl mx-auto">
                <div className="flex items-center gap-4 text-[#0e121b]">
                    <div className="size-4">
                        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    </div>
                    <h2 className="text-[#0e121b] text-lg font-bold leading-tight tracking-[-0.015em]">MangEmp</h2>
                </div>
                <div className="flex flex-1 justify-end lg:gap-8">
                    <div className="hidden lg:flex items-center gap-9">
                        <Link to="" className="text-[#0e121b] text-sm font-medium leading-normal">
                            Manage Employees
                        </Link>
                        <Link to="add-work" className="text-[#0e121b] text-sm font-medium leading-normal">
                            Add Work
                        </Link>
                        <Link to="add-employee" className="text-[#0e121b] text-sm font-medium leading-normal">
                            Add Employee
                        </Link>
                        
                    </div>
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden flex items-center justify-center h-10 w-10 rounded-lg bg-[#e7ebf3] text-[#0e121b] text-sm font-bold leading-normal"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </div>
                {isMenuOpen && (
                    <div className="lg:hidden absolute top-16 right-0 left-0 bg-white shadow-lg py-2 px-4">
                        <a href="#" className="block py-1 text-[#0e121b] text-sm font-medium">
                            Data Catalog
                        </a>
                        <a href="#" className="block py-1 text-[#0e121b] text-sm font-medium">
                            Jobs
                        </a>
                        <a href="#" className="block py-1 text-[#0e121b] text-sm font-medium">
                            Workspace
                        </a>
                        <a href="#" className="block py-1 text-[#0e121b] text-sm font-medium">
                            API
                        </a>
                        <a href="#" className="block py-1 text-[#0e121b] text-sm font-medium">
                            Model
                        </a>
                        <a href="#" className="block py-1 text-[#0e121b] text-sm font-medium">
                            Docs
                        </a>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
