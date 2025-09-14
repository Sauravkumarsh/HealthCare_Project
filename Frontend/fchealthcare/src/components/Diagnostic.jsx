import { useEffect, useState } from "react"
import Header from "./Header"
import { apiRequest } from "../api";
import React from "react";
import Footer from "./Footer"
import { Navigate, useNavigate } from "react-router";


function Diagnostic({token,onLogout}){
    const [center,setCenter]=useState([]);
    const navigate = useNavigate();


    useEffect(()=>{
        fetchCenter();
    },[token]);

    const fetchCenter=async()=>{
        try{
            const res=await apiRequest("/diagnostic/user/getAllCenter","GET",null,token);
            setCenter(res);
            console.log(res);
        }
        catch(err){
            console.log("error in  fetch messaage not");
        }
    };

    

    return(
        <div className="bg-gray-100">
            <Header token={token} onLogout={onLogout}/>
            <main className="mt-30 ml-20 mr-20 shadow  ">

                {center.map((s)=>(
                <div key={s.id} className=" rounded-lg mb-10">
                    <div className="flex flex-col bg-white flex  rounded mb-1 gap-10 w-full h-80  ">
                        <div className="flex  h-full gap-10">

                        <div className="bg-white">
                            <img src="https://picsum.dev/image/15/view"
                             alt="preview" 
                             className="h-75 ml-5 mt-3 w-75 mr-5 p-2 rounded-full object-cover"
                             />
                        </div>

                        <div className="flex flex-col ">
                            <div className="flex flex-col mt-10 p-5">
                                <span className="text-blue-800   font-semibold font-serif text-4xl">{s.name}</span>
                                <span className="font-mono mt-2 text-xl">{s.address}</span>
                            </div>
                            <div className="flex flex-col ml-5 ">
                                {s.tests.map((t)=>(
                                <div key={t.id} className="">
                                    <span className="font-semibold">{t.name} :</span> <span className="text-green-500">₹{t.price}</span>
                                </div> 

                                ))}

    
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
            <Footer/>
        </div>
    )
}

export default Diagnostic