import React from 'react'

export default function Home() {
  return (
    <div>
      <section className="max-w-6xl mx-auto p-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

    {/* Left Side – Form */}
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Contact Form</h2>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          placeholder="Message"
          rows="4"
          className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
    <div className="bg-white shadow-lg rounded-lg p-6 ">
      <h2 className="text-xl font-semibold mb-4">User List</h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2 text-left">Name</th>
              <th className="border px-4 py-2 text-left">Email</th>
              <th className="border px-4 py-2 text-left">Phone</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border px-4 py-2">John Doe</td>
              <td className="border px-4 py-2">john@example.com</td>
              <td className="border px-4 py-2">9876543210</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border px-4 py-2">Jane Smith</td>
              <td className="border px-4 py-2">jane@example.com</td>
              <td className="border px-4 py-2">9123456789</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
      </section>

    </div>
  )
}
