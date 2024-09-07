import React from 'react'

const NavBar = () => {
    return (
        <div className="flex justify-between items-center h-16 bg-[#ededed] py-16  w-[1440px]  mx-auto ">
            <div className="flex items-center gap-10 ">
                <h2 className="ml-0 text-2xl font-bold">Lando</h2>
                <ul className="flex gap-6">
                    <li className="cursor-pointer hover:text-blue-500">Home</li>
                    <li className="cursor-pointer hover:text-blue-500">Pricing</li>
                    <li className="cursor-pointer hover:text-blue-500">About Us</li>
                    <li className="cursor-pointer hover:text-blue-500">Contact</li>
                </ul>
            </div>

            <div className="flex items-center gap-6">
                <button className="font-semibold text-gray-600 hover:text-blue-500">Log in</button>
                <button className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600">
                    Sign up
                </button>
            </div>
        </div>
    )
    
}

export default NavBar;