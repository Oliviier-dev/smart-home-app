import React from 'react'
import logo from '../assets/logos/Logo.svg'
import logo1 from '../assets/logos/Logo (1).svg'
import logo2 from '../assets/logos/Logo (2).svg'
import logo3 from '../assets/logos/Logo (3).svg'
import logo4 from '../assets/logos/Logo (4).svg'
import logo5 from '../assets/logos/Logo (5).svg'
import logo6 from '../assets/logos/Logo (6).svg'
import logo7 from '../assets/logos/Logo (7).svg'

function Clients() {
  return (
    <div className='flex items-center justify-center flex-col py-6 text-black'>
        <h2 className='font-bold text-5xl mt-8 mb-6'>Our Clients</h2>
        <p className='max-w-xs md:max-w-xl mx-auto text-gray-700 text-center mb-4'>Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.</p>
        
        <div className="w-4/5 mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                    <img src={logo} alt="Logo 1" />
                </div>
                <div>
                    <img src={logo1} alt="Logo 2" />
                </div>
                <div>
                    <img src={logo2} alt="Logo 3" />
                </div>
                <div>
                    <img src={logo3} alt="Logo 4" />
                </div>
                <div>
                    <img src={logo4} alt="Logo 4" />
                </div>
                <div>
                    <img src={logo5} alt="Logo 4" />
                </div>
                <div>
                    <img src={logo6} alt="Logo 4" />
                </div>
                <div>
                    <img src={logo7} alt="Logo 4" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Clients
