import React from 'react'
import Home_table from './Home_table'

export default function Home() {
  return (
    <div>
      <section className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-[30%_auto] gap-8">

          {/* Left Side – Form */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Contact Form</h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" name="uname " 
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" name="uemail"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" name="uphone"
              />

              <textarea
                placeholder="Message"
                rows="4"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" name='umsg'
              ></textarea>

              <button
                type="button"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right Side – Table */}
          <Home_table/>

        </div>
      </section>

    </div>
  )
}
