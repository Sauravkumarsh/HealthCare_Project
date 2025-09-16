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
        <div className="">
            <Header token={token} onLogout={onLogout}/>
            <main className=" ml-20 mr-20  mt-40 ">
                <div>
                  <div className="w-full h-60 bg-yellow-100 ">
                    <img 
                    src="https://www.shutterstock.com/image-vector/health-checkup-icon-set-medical-260nw-2221673931.jpg"   
                    className="w-full h-full"
                    alt="" />
                  </div>
                </div>

                <h1 className="mt-5  font-semibold font-sans text-3xl">Popular Tests</h1>
                <div className="flex  w-full  mt-5 mb-10 gap-8">
                    <div className="flex flex-col w-50 h-80  items-center rounded-lg shadow">
                      <div className="w-full h-46">
                        <img 
                        src="https://max-website20-images.s3.ap-south-1.amazonaws.com/Blood_Sugar_Test_2fa9b72bef.png" 
                        className="h-full w-full rounded-lg"
                        alt="" />
                      </div>
                      <div className="h-22">
                        <h2 className="font-serif text-center text-lg">Hemoglobin, Iron Test</h2>
                        <h2 className="text-red-400 text-center">Availavle home service</h2>
                        <h2 className="text-green-400 text-center">Only 500</h2>
                      </div>
                      <div className="w-full ">
                        <button className="h-12 w-full rounded bg-blue-400 text-lg text-white ">
                            Book Now 
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col w-50 h-80  items-center rounded-lg shadow">
                      <div className="w-full h-46">
                        <img 
                        src="https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2021/06/GettyImages-144857065_header-1024x575.jpg?w=1155&h=1528"
                        className="h-full w-full rounded-lg"
                        alt="" />
                      </div>
                      <div className="h-22">
                        <h2 className="font-serif text-center text-lg">Hemoglobin, Iron Test</h2>
                        <h2 className="text-red-400 text-center">Availavle home service</h2>
                        <h2 className="text-green-400 text-center">Only 500</h2>
                      </div>
                      <div className="w-full">
                        <button className="h-12 w-full rounded bg-blue-400 text-lg text-white">
                            Book Now 
                        </button>
                      </div>
                    </div>

                       <div className="flex flex-col w-50 h-80  items-center rounded-lg shadow">
                      <div className="w-full h-46">
                        <img 
                        src="https://media.istockphoto.com/id/580112456/photo/man-handing-container-with-urine-sample-to-a-doctor.jpg?s=612x612&w=0&k=20&c=U81mOE1Eh9QQQ0OLtdV31KzXzilHwAlXRPWD7X-Gm4g=" 
                        className="h-full w-full rounded-lg"
                        alt="" />
                      </div>
                      <div className="h-22">
                        <h2 className="font-serif text-center text-lg">Hemoglobin, Iron Test</h2>
                        <h2 className="text-red-400 text-center">Availavle home service</h2>
                        <h2 className="text-green-400 text-center">Only 500</h2>
                      </div>
                      <div className="w-full">
                        <button className="h-12 w-full rounded bg-blue-400 text-lg text-white">
                            Book Now 
                        </button>
                      </div>
                    </div>

                       <div className="flex flex-col w-50 h-80  items-center rounded-lg shadow">
                      <div className="w-full h-46">
                        <img 
                        src="https://www.shutterstock.com/image-photo/blood-pressure-examination-result-suggested-600nw-2424621221.jpg" 
                        className="h-full w-full rounded-lg"
                        alt="" />
                      </div>
                      <div className="h-22">
                        <h2 className="font-serif text-center text-lg">Hemoglobin, Iron Test</h2>
                        <h2 className="text-red-400 text-center">Availavle home service</h2>
                        <h2 className="text-green-400 text-center">Only 500</h2>
                      </div>
                      <div className="w-full">
                        <button className="h-12 w-full rounded bg-blue-400 text-lg text-white">
                            Book Now 
                        </button>
                      </div>
                    </div>

                       <div className="flex flex-col w-50 h-80  items-center rounded-lg shadow">
                      <div className="w-full h-46 ">
                        <img 
                        src="https://media.istockphoto.com/id/688386634/photo/female-patient-lying-for-an-mri-scan.jpg?s=612x612&w=0&k=20&c=QRn4mTY1qy5Bs6tCsf1OfYXdjeduCO0IAjDYEE1GHSE=" 
                        className="h-full w-full rounded-lg"
                        alt="" />
                      </div>
                      <div className="h-22">
                        <h2 className="font-serif text-center text-lg">Hemoglobin, Iron Test</h2>
                        <h2 className="text-red-400 text-center">Availavle home service</h2>
                        <h2 className="text-green-400 text-center">Only 500</h2>
                      </div>
                      <div className="w-full">
                        <button className="h-12 w-full rounded bg-blue-400 text-lg text-white">
                            Book Now 
                        </button>
                      </div>
                    </div>

                       <div className="flex flex-col w-50 h-80  items-center rounded-lg shadow">
                      <div className="w-full h-46">
                        <img 
                        src="https://previews.123rf.com/images/auremar/auremar1709/auremar170904814/85567121-young-male-doctor-using-ultrasound-scan-on-senior-male-patient.jpg" 
                        className="h-full w-full rounded-lg"
                        alt="" />
                      </div>
                      <div className="h-22">
                        <h2 className="font-serif text-center text-lg ">Hemoglobin, Iron Test</h2>
                        <h2 className="text-red-400 text-center">Availavle home service</h2>
                        <h2 className="text-green-400 text-center">Only 500</h2>
                      </div>
                      <div className="w-full">
                        <button className="h-12 w-full rounded bg-blue-400 text-lg text-white">
                            Book Now 
                        </button>
                      </div>
                    </div>

                </div>


                <h1 className="mt-5  font-semibold font-sans text-3xl">Group of Tests</h1>
                <div className="flex  w-full  mt-5 mb-10 gap-8">
                    <div className="flex flex-col w-50 h-70  items-center rounded-lg shadow">
                      <div className="w-full h-2/3">
                        <img 
                        src="https://max-website20-images.s3.ap-south-1.amazonaws.com/Blood_Sugar_Test_2fa9b72bef.png" 
                        className="h-full w-full rounded-lg"
                        alt="" />
                      </div>
                      <div>
                        <h2 className="font-serif text-center">Also Known as Hemoglobin, Iron Test</h2>
                      </div>
                      <div className="w-full">
                        <button className="h-12 w-full rounded bg-blue-400 text-lg text-white">
                            Book Now 
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col w-50 h-70  items-center rounded-lg shadow">
                      <div className="w-full h-2/3">
                        <img 
                        src="https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2021/06/GettyImages-144857065_header-1024x575.jpg?w=1155&h=1528"
                        className="h-full w-full rounded-lg"
                        alt="" />
                      </div>
                      <div>
                        <h2 className="font-serif text-center">Also Known as Hemoglobin, Iron Test</h2>
                      </div>
                      <div className="w-full">
                        <button className="h-12 w-full rounded bg-blue-400 text-lg text-white">
                            Book Now 
                        </button>
                      </div>
                    </div>

                       <div className="flex flex-col w-50 h-70  items-center rounded-lg shadow">
                      <div className="w-full h-2/3">
                        <img 
                        src="https://media.istockphoto.com/id/580112456/photo/man-handing-container-with-urine-sample-to-a-doctor.jpg?s=612x612&w=0&k=20&c=U81mOE1Eh9QQQ0OLtdV31KzXzilHwAlXRPWD7X-Gm4g=" 
                        className="h-full w-full rounded-lg"
                        alt="" />
                      </div>
                      <div>
                        <h2 className="font-serif text-center">Also Known as Hemoglobin, Iron Test</h2>
                      </div>
                      <div className="w-full">
                        <button className="h-12 w-full rounded bg-blue-400 text-lg text-white">
                            Book Now 
                        </button>
                      </div>
                    </div>

                       <div className="flex flex-col w-50 h-70  items-center rounded-lg shadow">
                      <div className="w-full h-2/3">
                        <img 
                        src="https://www.shutterstock.com/image-photo/blood-pressure-examination-result-suggested-600nw-2424621221.jpg" 
                        className="h-full w-full rounded-lg"
                        alt="" />
                      </div>
                      <div>
                        <h2 className="font-serif text-center ">Also Known as Hemoglobin, Iron Test</h2>
                      </div>
                      <div className="w-full">
                        <button className="h-12 w-full rounded bg-blue-400 text-lg text-white">
                            Book Now 
                        </button>
                      </div>
                    </div>

                       <div className="flex flex-col w-50 h-70  items-center rounded-lg shadow">
                      <div className="w-full h-2/3 ">
                        <img 
                        src="https://media.istockphoto.com/id/688386634/photo/female-patient-lying-for-an-mri-scan.jpg?s=612x612&w=0&k=20&c=QRn4mTY1qy5Bs6tCsf1OfYXdjeduCO0IAjDYEE1GHSE=" 
                        className="h-full w-full rounded-lg"
                        alt="" />
                      </div>
                      <div>
                        <h2 className="font-serif text-center">Also Known as Hemoglobin, Iron Test</h2>
                      </div>
                      <div className="w-full">
                        <button className="h-12 w-full rounded bg-blue-400 text-lg text-white">
                            Book Now 
                        </button>
                      </div>
                    </div>

                       <div className="flex flex-col w-50 h-70  items-center rounded-lg shadow">
                      <div className="w-full h-2/3">
                        <img 
                        src="https://previews.123rf.com/images/auremar/auremar1709/auremar170904814/85567121-young-male-doctor-using-ultrasound-scan-on-senior-male-patient.jpg" 
                        className="h-full w-full rounded-lg"
                        alt="" />
                      </div>
                      <div>
                        <h2 className="font-serif text-center">Also Known as Hemoglobin, Iron Test</h2>
                      </div>
                      <div className="w-full">
                        <button className="h-12 w-full rounded bg-blue-400 text-lg text-white">
                            Book Now 
                        </button>
                      </div>
                    </div>

                </div>

            </main>

            <Footer/>
        
        </div>
    )
}

export default Diagnostic