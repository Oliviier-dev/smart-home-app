import React from 'react'
import HeroImage from '../assets/Hero Image.svg'
import Vector from '../assets/Vector 334.svg'
import Decorator from '../assets/Decorator.svg'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaApple, FaGooglePlay } from 'react-icons/fa';

function Hero() {
  return (
    <div className="flex flex-col items-center pt-4 lg:pt-16 h-fit text-white text-center">
        <div className="absolute text-xl left-12 bottom-2 hidden lg:flex transform -translate-y-1/2 flex-col gap-6">
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

        <h1 className="text-4xl md:text-8xl font-bold mb-2">
            Smart Home <span className="block text-2xl md:text-6xl">Application</span>
        </h1>
        <p className="max-w-3xl text-lg pt-4 md:text-xl mx-6 lg:mx-2">
            Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.
        </p>

        <img src={HeroImage} alt="smart home" />
        <img
            src={Vector}
            alt="vector"
            className="absolute hidden lg:block left-1/2 transform -translate-x-1/2 -z-10"
            style={{ top: 'calc(100% + 0rem)', maxWidth: '100vw' }}
        />
        <img
            src={Decorator}
            alt="vector"
            className="absolute hidden lg:block left-20 transform -translate-x-1/2 -z-10"
            style={{ top: 'calc(100% + 22rem)', maxWidth: '100vw' }}
        />

        <div className="flex gap-4 md:gap-8 pt-2 text-sm w-full justify-center items-center pb-12">
            {/* App Store Button */}
            <button className="flex items-center justify-center gap-0 md:gap-2 bg-black text-white w-36 md:w-48 px-0 md:px-6 py-3 rounded-xl shadow hover:bg-gray-800 transition-colors">
                <FaApple className="mr-2 w-6 h-6" />
                <div className="text-center">
                    <span className="font-bold">App Store</span>
                </div>
            </button>

            {/* Google Play Button */}
            <button className="flex items-center justify-center gap-0 md:gap-2 bg-black text-white w-36 md:w-48 px-0 md:px-6 py-3 rounded-xl shadow hover:bg-gray-800 transition-colors">
                <FaGooglePlay className="mr-2 w-6 h-6" />
                <div className="text-center">
                    <span className="font-bold">Google Play</span>
                </div>
            </button>
        </div>

    </div>
  )
}

export default Hero
