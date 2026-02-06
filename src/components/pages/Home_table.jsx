import React from 'react'

export default function Home_table() {
  return (
    <div>
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
  )
}
