import { useEffect, useState } from "react"
import Header from "./Header"
import { apiRequest } from "../api";
import React from "react";
import Footer from "./Footer"
import { Navigate, useNavigate } from "react-router";

function Clinic({token,onLogout,role}){
    const [doctor,setDoctor]=useState([]);
    const navigate = useNavigate();
    const [doctorLength,setDoctorLength] = useState("");


    useEffect(()=>{
        fetchDoctor();
    },[token]);

    const fetchDoctor=async()=>{
        try{
            const res=await apiRequest("/diagnostic/user/getAllDoctors","GET",null,token);
            setDoctor(res);
            console.log(res.length);
            setDoctorLength(res.length);
            console.log(res);
        }
        catch(err){
            console.log("error in  fetch messaage not");
        }
    };


    return(

        <div className="bg-gray-100 " >
            <Header token={token} onLogout={onLogout} role={role}/>
            <main className=" mt-30 ml-20 mr-20 shadow ">

                {doctor.map((s)=>(
                <div key={s.id} className=" rounded-lg mb-10 ">
                    <div className="flex flex-col bg-white flex  rounded mb-1 gap-10 w-full h-80 ">
                        <div className="flex  h-full  gap-10">

                        <div className="bg-white ">
                            <img src={s.imageUrl}
                             alt="preview" 
                             className="h-75 ml-5 mt-3 w-75 mr-5 p-2 rounded-full object-cover"
                             />
                        </div>

                        <div className="flex flex-col ">
                            <div className="flex flex-col mt-10 p-5">
                                <span className="text-blue-800   font-semibold font-serif text-4xl">{s.name}</span>
                                <div className="flex gap-2">
                                    <span className="font-semibold">Experience :</span>
                                    <span className="text-purple-700 font-semibold">{s.experience}</span>
                                    <span className="font-semibold">, </span>
                                    <span className="font-semibold">Specialist :</span>
                                    <span className="text-red-400">{s.specialist}</span>
                                </div>
                                <span className="font-mono mt-2 text-xl font-sans">{s.location}</span>
                            </div>
                            <div className="flex flex-col ml-5 ">
                                <div className="flex gap-1">
                                    <span className="font-semibold">Consultant Fees : </span>
                                    <span className="text-green-500">₹{s.fees}</span>
                                </div> 
                            </div>

                            <div className="flex ">
                            <div className=" mb-15 mr-4 p-2 ml-5 mt-10  ">
                               <button className=" bg-green-400 transition   ease-in-out hover:-translate-y-1 rounded hover:bg-green-500 text-white w-50 h-11 px-4 py-2 " onClick={() =>navigate("/bookings") }>
                                Book Now
                                </button>
                            </div>
                            <div className=" mr-4 p-2 ml-5 mt-10 mb-15">
                               <button className="bg-cyan-500 transition   ease-in-out hover:-translate-y-1  text-white hover:bg-cyan-400 rounded w-50 h-11 ">Contact Center</button>
                            </div>
                            </div>
                        </div>

                    </div>
                    </div>   

                    
   
                </div>

              ))}

            </main>

            <section>
                <div className="flex justify-center h-25 ">
                    <div className="w-10 h-full  ">
                    <button className="border  w-10 h-10 bg-blue-500 hover:bg-blue-700 ">
                        {"<"}
                    </button>
                   </div>




                    <div className="w-10 h-full  ">
                    <button className="border w-10 h-10 bg-blue-500 hover:bg-blue-700">
                        {">"}
                    </button>
                   </div>
                </div>
            </section>
            <Footer/>
        </div>



    )
}

export default Clinic