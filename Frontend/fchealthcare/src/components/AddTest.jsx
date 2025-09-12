import { useState } from "react";
import rapidoBg from "../assets/rapidobg.png";
import Footer from "./Footer"
import Header from "./Header"

function AddTest({token,onLogout,role}){
    const [address,setAddress]=useState("");
    const [name,setName]=useState("");
    const [testName,setTestName]=useState("");
    const [price,setPrice]=useState("");
    const [seats,setSeats]=useState("");
    return(
        <div 
          className="flex flex-col  justify-center h-full items-center rounded-lg"
          style={{
          backgroundImage: `url(${rapidoBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",}} 
        >
            <div className="w-full">
                <Header token={token} onLogout={onLogout} role={role} />
            </div>
            <div className=" flex flex-col  bg-white h-full w-190 text-center">
               <div className="">
                <div className= " flex h-30 bg-gray-500">
                <div className="flex w-full p-9 h-30 bg-yellow-50 font-bold font-serif text-2xl">
                    <div>
                        <img src="https://tse4.mm.bing.net/th/id/OIP.Wgdzy418e5uURfhncc3GLgAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"
                         className="h-15 mr-50" 
                         alt="" />
                    </div>
                    <div>Doctor Details</div>

                </div>
                </div>
          <div className="">
              <form  className="">
                <div className="flex flex-col gap-2">
                     <div className="w-full bg-purple-50 rounded-lg shadow h-20 hover: bg-purple-100">
                    <label  className="block text-xl font-semibold">Diagnostic's Center Name:</label>
                    <div className="">
                        <input 
                         className= "h-10 text-center w-full"
                         type="text"
                         value={name}
                         onChange={(e) => setName(e.target.value)}
                         required
                         placeholder="Enter Doctor's name" />
                    </div>
             
                </div>
                <div className="bg-blue-50 rounded-lg shadow h-20">
                    <label  className="block text-xl font-semibold">address:</label>
                    <div className="">
                        <input 
                         className= "h-10 text-center  w-full" 
                         type="text" 
                         value={address}
                         onChange={(e) => setAddress(e.target.value)}
                         required
                         placeholder="Enter Specialization Degree" />
                    </div>
                </div>
                   <div className="bg-orange-50 rounded-lg shadow h-20">
                    <label  className="block text-xl font-semibold">Test Name:</label>
                    <div className="">
                        <input 
                          className= "h-10 text-center w-full" 
                          type="text" 
                          value={testName}
                           onChange={(e) => setTestName(e.target.value)}
                          required
                          placeholder="Doctor's Exeperience" />
                    </div>
                </div>
                     <div className="bg-green-50 rounded-lg shadow h-20">
                    <label  className="block text-xl font-semibold">Price:</label>
                    <div className="">
                        <input  
                         className= "h-10 text-center w-full" 
                         type="number" 
                         value={price}
                         onChange={(e) => setPrice(e.target.value)}
                         required         
                         placeholder="Prescription Charge" />
                    </div>
                </div>

                 <div className="bg-red-50 rounded-lg shadow h-20">
                    <label  className="block text-xl font-semibold">Seats:</label>
                    <div className="">
                        <input 
                         className= "h-10 text-center w-full " 
                         type="number" 
                         value={seats}
                          onChange={(e) => setSeats(e.target.value)}
                          required
                         placeholder="Enter Address" />
                    </div>
                </div>
                <div className="w-full bg-blue-500 h-15 hover:bg-blue-700">
                    <button className="mt-4" type="submit">Submit</button>
                </div>
                </div>
              </form>
          </div>
               </div>
            </div>
            <div className="w-full">
                <Footer/>
            </div>
        </div>
    )
}

export default AddTest