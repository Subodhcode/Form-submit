
import React from 'react'

export default function Home_table({ subodh, setUser,editData, setEditData, setEditIndex }) {

  let deleteRow = (index) => {

    if (confirm("Are u sure")) {
      let filterData = subodh.filter((obj, i) => i != index)
      setUser(filterData)
    }

    // alert(index)
  }
  //user==array

  let EditRow = (currentIndex) => {
    setEditIndex(currentIndex)
    setEditData( subodh.find((obj,index)=>index==currentIndex))
  }
  return (
    <div>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">User List</h2>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2 text-left">Sr.No</th>
                <th className="border px-4 py-2 text-left " defaultValue={editData ? editData.uname : ''}>Name</th>
                <th className="border px-4 py-2 text-left" defaultValue={editData ? editData.uemail : ''}>Email</th>
                <th className="border px-4 py-2 text-left" defaultValue={editData ? editData.uphone : ''}>Phone</th>
                <th className="border px-4 py-2 text-left" defaultValue={editData ? editData.umsg : ''}>Message</th>
                <th className="border px-4 py-2 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {subodh.length >= 1 ? (
                subodh.map((obj, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{index + 1}</td>
                    <td className="border px-4 py-2">{obj.uname}</td>
                    <td className="border px-4 py-2">{obj.uemail}</td>
                    <td className="border px-4 py-2">{obj.uphone}</td>
                    <td className="border px-4 py-2">{obj.umsg}</td>
                    <td className="border px-4 py-2">
                      <div className="flex gap-2">
                        <button onClick={() => EditRow(index)} className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600 cursor-pointer">
                          { editData ? "update" :"save"}
                        </button>
                        <button
                          onClick={() => deleteRow(index)} className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 cursor-pointer">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="text-center py-4" colSpan={5}>
                    No Data Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
