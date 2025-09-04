'use client'
import React from 'react'
import dynamic from 'next/dynamic'

// Dynamically import Earth so it's only rendered on the client
const Earth = dynamic(() => import('./Earth'), {
  ssr: false,
  loading: () => <p>Loading 3D Earth...</p>,
})

const EarthMain = () => {
  return (
    <main className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-0">
      {/* Left Text Section */}
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          Tap into the world’s local payments network
        </h2>
        <p className="text-gray-600">
          Airwallex’s proprietary local payments network offers you a faster, more
          cost-effective, and transparent alternative to legacy banking...
        </p>

        <div className="grid grid-cols-2 gap-6 pt-6">
          <div>
            <h3 className="text-2xl font-bold text-orange-500">60+</h3>
            <p className="text-gray-600 text-sm">
              countries where you can collect funds like a local
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-pink-500">120+</h3>
            <p className="text-gray-600 text-sm">
              countries to which you can make local transfers
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-purple-600">$200B+</h3>
            <p className="text-gray-600 text-sm">
              global payments processed annually
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-purple-500">180+</h3>
            <p className="text-gray-600 text-sm">
              countries from which you can accept payments
            </p>
          </div>
        </div>
      </div>

      {/* Right Earth Section */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <Earth />
      </div>
    </main>
  )
}

export default EarthMain
