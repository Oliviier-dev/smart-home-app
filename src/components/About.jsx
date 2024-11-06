import React from 'react'
import OurApp from '../assets/1 13.svg'
import OurApp2 from '../assets/1 12.svg'
import OurApp2mini from '../assets/1 11.svg'
import OurApp3 from '../assets/1 10.svg'
import OurApp3mini from '../assets/1 101.svg'

function About() {
  return (
    <div className="flex items-center justify-center flex-col py-6 text-black">
        <h1 className='font-bold text-5xl mt-8 mb-2'>About Us</h1>
        <div class="flex flex-col md:flex-row items-center justify-between py-4 mx-auto">
            <img src={OurApp} alt="Smart Home" class="object-cover w-2/9 order-1 mt-10 md:order-none" />
            <div class="flex flex-col  space-y-4 order-2 md:order-none text-center md:text-left">
                <h3 class="text-xl pt-8 md:pt-0 flex items-center justify-center md:text-5xl font-semibold w-full xl:w-4/6">Smart Home’s Smart Services</h3>
                <p class="text-gray-700 w-full px-4 flex items-center justify-center md:px-0 md:w-9/12 mx-auto md:mx-0">
                    Ye am depending propriety sweetness distrusts belonging collected. Smiling mention he in thought equally musical.
                    Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe
                    ferrars besides cottage.
                </p>
                <button class="bg-slate-950 text-white px-4 py-2 border-2 border-black rounded w-60 mx-auto md:mx-0 hover:bg-white hover:text-black">Learn More</button>
            </div>
        </div>

        <div class="flex flex-col md:flex-row items-center justify-between py-4 mx-auto">
            <div class="flex flex-col  space-y-4 order-2 md:order-none text-center md:text-left pl-0 md:pl-16">
                <h3 class="text-xl pt-8 md:pt-0 flex items-center justify-center md:text-5xl font-semibold w-full xl:w-4/6">What app can do to your Appliences?</h3>
                <p class="text-gray-700 w-full px-4 flex items-center justify-center md:px-0 md:w-9/12 mx-auto md:mx-0">
                    Ye am depending propriety sweetness distrusts belonging collected. Smiling mention he in thought equally musical.
                    Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe
                    ferrars besides cottage.
                </p>
                <button class="bg-white text-black border-2 border-black px-4 py-2 rounded w-60 mx-auto md:mx-0 hover:bg-slate-900 hover:text-white">Learn More</button>
            </div>
            <img src={OurApp2} alt="Smart Home" class="object-cover w-2/9 order-1 mt-10 md:order-none hidden md:block" />
            <img src={OurApp2mini} alt="Smart Home" class="object-cover w-2/9 order-1 mt-10 md:hidden" />
        </div>

        <div class="flex flex-col md:flex-row items-center gap-4 justify-between py-4 mx-auto">
            <img src={OurApp3} alt="Smart Home" class="object-cover w-2/9 order-1 mt-10 md:order-none hidden md:block" />
            <img src={OurApp3mini} alt="Smart Home" class="object-cover w-2/9 order-1 mt-10 md:hidden" />
            <div class="flex flex-col  space-y-4 order-2 md:order-none text-center md:text-left">
                <h3 class="text-xl pt-8 md:pt-0 flex items-center justify-center md:text-5xl font-semibold w-full xl:w-4/6">Control Electric Appliences</h3>
                <p class="text-gray-700 w-full px-4 flex items-center justify-center md:px-0 md:w-9/12 mx-auto md:mx-0">
                    Ye am depending propriety sweetness distrusts belonging collected. Smiling mention he in thought equally musical.
                    Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe
                    ferrars besides cottage.
                </p>
                <button class="bg-slate-950 text-white px-4 py-2 border-2 border-black rounded w-60 mx-auto md:mx-0 hover:bg-white hover:text-black">Learn More</button>
            </div>
        </div>
    </div>
  )
}

export default About
