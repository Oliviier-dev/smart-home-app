import React from 'react'
import HeroImage from '../assets/Hero Image.svg'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaApple, FaGooglePlay } from 'react-icons/fa';

function Hero() {
  return (
    <div className="flex flex-col items-center pt-20 h-screen text-white text-center">
        <div className="absolute text-xl left-12 bottom-2 transform -translate-y-1/2 flex flex-col gap-6">
            <a href="#">
                <FaFacebookF />
            </a>
            <a href="#">
                <FaTwitter />
            </a>
            <a href="#">
                <FaInstagram />
            </a>
            <a href="#">
                <FaLinkedin />
            </a>
        </div>

        <h1 className="text-5xl md:text-8xl font-bold mb-2">
            Smart Home <span className="block text-4xl md:text-6xl">Application</span>
        </h1>
        <p className="max-w-3xl text-lg pt-4 md:text-xl">
            Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.
        </p>

        <img src={HeroImage} alt="" />

        <div className="flex gap-8 pt-2 text-sm w-full justify-center items-center pb-12">
            {/* App Store Button */}
            <button className="flex items-center bg-black text-white w-52 px-6 py-3 rounded-xl shadow hover:bg-gray-800 transition-colors">
                <FaApple className="mr-2 w-6 h-6" />
                <div className="text-left">
                    <span className="font-bold">Download on the</span><br />
                    <span className="font-bold">App Store</span>
                </div>
            </button>

            {/* Google Play Button */}
            <button className="flex items-center bg-black text-white w-48 px-6 py-3 rounded-xl shadow hover:bg-gray-800 transition-colors">
                <FaGooglePlay className="mr-2 w-6 h-6" />
                <div className="text-left">
                    <span className="font-bold">Get it on</span><br />
                    <span className="font-bold">Google Play</span>
                </div>
            </button>
        </div>

    </div>
  )
}

export default Hero
