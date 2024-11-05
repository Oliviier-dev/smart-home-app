import React from 'react'
import LineBetweenHomeAbout from '../assets/Rectangle 2.svg'
import Ellipse from '../assets/Ellipse 1.svg'
import Ellipse2 from '../assets/Ellipse 2.svg'

function Navbar() {
  return (
    <div className="text-white w-4/5 mx-auto flex items-center justify-between py-8 relative">
        <div>
            <ul className="flex flex-row gap-6 cursor-pointer font-medium relative">
                <li className="hover:text-gray-300">Home</li>
                <img
                    src={LineBetweenHomeAbout}
                    className="absolute left-[calc(18%-0px)] top-[calc(50%-56px)] h-screen w-px"
                    alt="Line Divider"
                />
                <img
                    src={Ellipse}
                    className="absolute left-[calc(18%-14px)] top-[calc(50%+400px)] transform -translate-y-1/2"
                    alt="Centered SVG"
                />
                <li className="hover:text-gray-300">About</li>
                <li className="hover:text-gray-300">Testimonials</li>
                <li className="hover:text-gray-300">Contact</li>
            </ul>
        </div>

        <div>
            <h3 className="font-bold text-xl pr-24">SMART HOME</h3>
        </div>

        <div>
            <ul className="flex flex-row gap-6 cursor-pointer items-center relative">
                <li className="hover:text-gray-300">Login</li>
                <li>
                    <img
                        src={LineBetweenHomeAbout}
                        className="absolute left-[calc(18%+96px)] top-[calc(50%-56px)] h-screen transform -translate-x-1/2 w-px"
                        alt="Button Divider"
                    />
                    <img
                        src={Ellipse2}
                        className="absolute left-[calc(18%+80px)] top-[calc(50%+90px)] transform -translate-y-1/2"
                        alt="Centered SVG"
                    />
                    <button className='bg-white cursor-pointer text-black px-8 py-2 rounded shadow-[0px_4px_20px_rgba(0,0,0,0.25)] border-transparent border-2 transition duration-600 ease-in-out hover:bg-blue-500 hover:text-white hover:border-white'>Sign up</button>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
