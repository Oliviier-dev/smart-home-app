import React from 'react'
import App from '../assets/1 15 (1).svg'
import {FaApple, FaGooglePlay } from 'react-icons/fa'

function DownloadApp() {
  return (
    <div className='flex items-center flex-col md:flex-row'>
        <div className="flex flex-col space-y-4 pl-0 md:pl-24 text-center md:text-left order-2 md:order-none">
            <h3 className="text-xl pt-8 md:pt-0 flex items-center justify-center md:justify-start md:text-5xl font-semibold w-full xl:w-4/6">
                Download App
            </h3>
            <p className="text-gray-700 w-full px-4 md:px-0 flex items-center justify-center md:justify-start md:w-9/12 mx-auto md:mx-0">
                Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.
            </p>
            <div className="flex gap-4 md:gap-8 pt-2 text-sm w-full justify-center md:justify-start items-center pb-12">
                <button className="flex items-center justify-center gap-2 bg-black text-white w-36 md:w-48 px-0 md:px-6 py-3 rounded-xl shadow hover:bg-gray-800 transition-colors">
                    <FaApple className="mr-2 w-6 h-6" />
                    <div className="text-center">
                        <span className="font-bold">App Store</span>
                    </div>
                </button>

                <button className="flex items-center justify-center gap-2 bg-black text-white w-36 md:w-48 px-0 md:px-6 py-3 rounded-xl shadow hover:bg-gray-800 transition-colors">
                    <FaGooglePlay className="mr-2 w-6 h-6" />
                    <div className="text-center">
                        <span className="font-bold">Google Play</span>
                    </div>
                </button>
            </div>
        </div>
        <img src={App} className='pr-0 lg:pr-56 md:pr-20  object-cover w-2/9 md:w-2/11 lg:w-2/9 mt-0 lg:mt-10 order-1 md:order-none' />
    </div>
  )
}

export default DownloadApp
