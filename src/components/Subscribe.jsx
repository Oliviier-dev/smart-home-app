import React from 'react'

const Subscribe = () => {
  return (
    <div className="flex justify-center items-center w-full mt-0 md:mt-14">
    <div className="bg-blue-600 text-white rounded-none lg:rounded-lg shadow-lg p-10 max-w-4xl w-full sm:w-auto flex flex-row flex-wrap items-center justify-center">
        <div className="w-full sm:w-3/4 mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Subscribe to get updated</h2>
            <p className="text-lg leading-relaxed">
                Stay updated with our latest news and offers by subscribing to our
                newsletter. Don't miss out!
            </p>
        </div>
        
        <button className="flex justify-center items-center bg-blue-600 text-white border-2 border-white py-3 px-6 rounded-md text-lg transition duration-300 hover:bg-blue-500 w-full sm:w-auto">
            <span>Get Started</span>
        </button>
    </div>
</div>

  )
}

export default Subscribe
