import React from 'react'

const Footer = () => {
  return (
    <footer className="text-black py-8 mt-16 flex flex-row items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
                <h3 className="text-xl font-semibold mb-4">Smart Home</h3>
                <p className="text-gray-400 mb-4">
                    Stay ahead with the latest in smart home technology. Discover solutions that can automate your home, save energy, and provide enhanced security.
                </p>
                <div className="flex items-center space-x-4 w-full max-w-full">
                    <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 w-11/12 sm:w-64 rounded-md bg-white border-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Register
                    </button>
                </div>
            </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Categories</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-black">Electronics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-black">Home Appliances</a></li>
              <li><a href="#" className="text-gray-400 hover:text-black">Furniture</a></li>
              <li><a href="#" className="text-gray-400 hover:text-black">Kitchenware</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">About</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-black">Our Story</a></li>
              <li><a href="#" className="text-gray-400 hover:text-black">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-black">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-black">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-black">Facebook</a></li>
              <li><a href="#" className="text-gray-400 hover:text-black">Twitter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-black">Instagram</a></li>
              <li><a href="#" className="text-gray-400 hover:text-black">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
