import React from 'react'
import profile1 from '../assets/profiles/image.svg'
import profile2 from '../assets/profiles/image (1).svg'
import profile3 from '../assets/profiles/image (2).svg'
import profile4 from '../assets/profiles/image (3).svg'
import slider1 from '../assets/slider11.png'
import slider2 from '../assets/slider22.png'

function Testimonials() {
  return (
    <div className="w-4/5 mx-auto">
        <div className='flex items-center justify-center flex-col py-6 text-black'>
            <h2 className='font-bold text-5xl mt-8 mb-6'>Testimonials</h2>
            <p className='max-w-xs md:max-w-xl mx-auto text-gray-700 text-center mb-4'>Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-4">
                <div className="flex flex-col items-start justify-around max-w-md mx-auto bg-[#E7EBEE] rounded-lg shadow-md p-6">
                    <p className="text-gray-700 mb-4">Our company does ongoing research with our target audience. This includes 30-45 minute phone interviews. It was difficult to conduct the interview, really listen, and ask good follow-up questions.</p>
                    <div className="flex items-center">
                        <img src={profile1} alt="Person" className="w-12 h-12 rounded-full object-cover mr-4" />
                        <div>
                            <h3 className="text-lg font-semibold">Cham</h3>
                            <p className="text-gray-500">Product Designer</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-start justify-around max-w-md mx-auto bg-[#E7EBEE] rounded-lg shadow-md p-6">
                    <p className="text-gray-700 mb-4">We meet new clients and more often than not establish long-term business relationships, all through Guru. The flexibility in how projects can be structured</p>
                    <div className="flex items-center">
                        <img src={profile2} alt="Person" className="w-12 h-12 rounded-full object-cover mr-4" />
                        <div>
                            <h3 className="text-lg font-semibold">Scopic Software</h3>
                            <p className="text-gray-500">Custom IT Solutions Firm</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-start justify-around max-w-md mx-auto bg-[#E7EBEE] rounded-lg shadow-md p-6">
                    <p className="text-gray-700 mb-4">It is easy to communicate with clients through their message system and their SafePay feature ensures that all funds are secured prior to any work being done.</p>
                    <div className="flex items-center">
                        <img src={profile3} alt="Person" className="w-12 h-12 rounded-full object-cover mr-4" />
                        <div>
                            <h3 className="text-lg font-semibold">Russell Lee</h3>
                            <p className="text-gray-500">Writer</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-start justify-around max-w-md mx-auto bg-[#E7EBEE] rounded-lg shadow-md p-6">
                    <p className="text-gray-700 mb-4">At SOLACE Engineers, we provide engineering solutions and other services on various freelancing platforms. Among them all, Guru is the best and our first choice to invite clients.</p>
                    <div className="flex items-center">
                        <img src={profile4} alt="Person" className="w-12 h-12 rounded-full object-cover mr-4" />
                        <div>
                            <h3 className="text-lg font-semibold">Solace Engineers Inc.</h3>
                            <p className="text-gray-500">Engineering Firm</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-row gap-10 mt-8 md:mt-14'>
                <img src={slider2} className='cursor-pointer' alt="" />
                <img src={slider1} className='cursor-pointer'  alt="" />
            </div>
        </div>    
    </div>
  )
}

export default Testimonials
