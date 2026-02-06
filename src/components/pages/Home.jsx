import React, { useState } from 'react'
import Home_table from './Home_table'
import { toast, ToastContainer } from 'react-toastify'

export default function Home() {
  let [user, setUser] = useState([])
  let [editData,setEditData]=useState(null)
  let [editIndex,setEditIndex]=useState(-1)

  let saveUser = (e) => {
    e.preventDefault()

    let checkemail=user.find((obj)=>obj.uemail==e.target.uemail.value)
    let checkphone=user.find((obj)=>obj.uphone==e.target.uphone.value)
    if(checkemail){
      return toast.error("Email already exit ")
    }
     if(checkphone){
      return toast.error("Phone number already exit ")
    }
    let obj = {
      uname: e.target.uname.value,
      uemail: e.target.uemail.value,
      uphone: e.target.uphone.value,
      umsg: e.target.umsg.value,
    }
   

    setUser([...user,obj])
    toast.success("User added successfully")
     e.target.reset()
  }

  //filter ->result
  //Find -->One Result ->object
  return (
    <div>
      <ToastContainer/>
      <section className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-[30%_auto] gap-8">

          {/* Left Side – Form */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Contact Form</h2>

            <form className="space-y-4" onSubmit={saveUser}>
              <input
                type="text"
                placeholder="Name"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" name="uname"
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
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 cursor-pointer"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right Side – Table */}
          <Home_table  subodh={user} setUser={setUser} setEditData={setEditData} setEditIndex={setEditIndex} />

        </div>
      </section>

    </div>
  )
}
