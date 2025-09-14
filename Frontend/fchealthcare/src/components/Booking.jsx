import Header from "./Header"
import rapidoBg from "../assets/rapidobg.png";
import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import { apiRequest } from "../api";




function Booking({token,onLogout,role}) {
    const [paymentMode, setPaymentMode] = useState("Cash");
    const [error, setError] = useState("");
    const [success,setSuccess] = useState("");
 


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

    
    const handleBooking=async(e)=>{
        e.preventDefault();  
        try{

            await apiRequest(`/diagnostic/user/booking/${id}`,"POST",content,token);
        }catch(err){
            console.log(err);
        }
    };



    return (
        <div>
            <Header token={token} onLogout={onLogout} role={role}/>
            <main className="mt-40 ml-25 mr-25">
              <div className="flex w-full ">
                <div className="flex flex-col rounded-lg shadow w-1/3 p-5 ">
                <div className=" flex flex-col justify-center items-center">

                  <div>
                  <img 
                  src="https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small_2x/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg" 
                  className="h-40 w-40 rounded-full "
                  alt="" />
                  </div>
                  <div className="font-bold text-2xl mt-2">Dr. Ayush Raj</div>

                </div>

                <div className="flex gap-5 ml-8 mt-4">
                  <div className="font-semibold text-xl">Specialist</div>
                  <div className="ml-11 font-semibold text-xl">:</div>
                  <div>NeuroSurgeon</div>
                </div>

                <div className="flex gap-5 ml-8 mt-2">
                  <div className="font-semibold text-xl">Experience</div>
                  <div className="ml-8 font-semibold text-xl">:</div>
                  <div>10 Years</div>
                </div>

                <div className="flex gap-5 ml-8 mt-2">
                  <div className="font-semibold text-xl">Consultant Fees :</div>
                  <div className="text-green-500">₹ 700</div>
                </div>


                <div className="flex gap-5 ml-8 mt-2 w-full">
                  <div className="font-semibold text-xl w-1/3  ">Address</div>
                  <div className="ml-12 font-semibold text-xl">:</div>
                  <div> 
                    <p  className=" w-2/3">
                      Rastriya Ganj , Phulwari Sharif ,Patna ,Pincode-801505
                    </p>
                  </div>
                </div>
                </div>


                <div className=" flex flex-col  w-2/3 ml-12 p-5 rounded-lg shadow">
                <label className="text-2xl font-semibold mb-5 ml-65">Patient's Details</label>
                 <form action="" className="ml-7">
                    <div className="flex gap-7 mb-5 ">
                      <div>
                        <label className="text-xl font-semibold">Patient's Name:
                        </label></div>
                      <div className="w-120">
                        <input 
                        type="text"
                        className="border w-full" />
                      </div>
                    </div>

                    <div className="flex gap-11 mb-5">
                      <div>
                        <label className="text-xl font-semibold">Date Of Birth:
                        </label></div>
                      <div className="w-120 text-center">
                        <input 
                        type="date"
                        className="border w-full items-center" />
                      </div>
                    </div>


                    <div className="flex gap-32 mb-5">
                      <div>
                        <label className="text-xl font-semibold">Age:
                        </label></div>
                      <div className="w-120">
                        <input 
                        type="text"
                        className="border w-full" />
                      </div>
                    </div>


                    <div className="flex gap-10 mb-5">
                      <div>
                        <label className="text-xl font-semibold">Select Gender:
                        </label></div>
                      <div className=" flex w-120 gap-5">
                         <input type="radio" name="gender" value="male" /> Male
                         <input type="radio" name="gender" value="female"/> Female
                         <input type="radio" name="gender" value="other"/> Other
                       
                      </div>
                    </div>

                    <div className="flex gap-5 mb-5">
                      <div>
                        <label className="text-xl font-semibold">Mobile Number:
                        </label></div>
                      <div className="w-120">
                        <input 
                        type="number"
                        className="border w-full" />
                      </div>
                    </div>


                    <div className="flex gap-23">
                      <div>
                        <label className="text-xl font-semibold">Address:
                        </label></div>
                      <div className="w-120">
                        <input 
                        type="text"
                        className="border w-full" />
                      </div>
                    </div>

                    <div className="flex gap-10 justify-center mt-10 font-semibold items-center">
                        <div>
                            <button className="bg-blue-500 rounded-lg h-12 w-35">Add to cart</button>
                        </div>
                        <div>
                            <button className="bg-green-500 rounded-lg h-12 w-35">Consult Now</button>
                        </div>
                    </div>


                 </form>
                </div>
              </div>

              <div className="flex flex-col gap-5 ml-35 mr-35 mt-10 mb-10">

                    <div className="flex flex-col shadow  rounded-lg bg-gray-50 h-50 w-full ">
                        <div className="flex mt-4 ml-4 gap-3">
                            <div className="">
                                <img 
                                src="https://static.vecteezy.com/system/resources/previews/024/354/252/non_2x/businessman-isolated-illustration-ai-generative-free-photo.jpg" 
                                className="w-10 h-10 rounded-full border"
                                alt="" /></div>
                            <div className="mt-2 font-serif">Ayush Raj</div>
                            <div className="mt-2 ml-5">⭐⭐⭐⭐⭐</div>
                        </div>

                        <div className="text-center mt-5  ">
                            <p className="">Value for money....but storage capacity is too less....
                                   ● Previous I used Drinkprime purifier....it reduces TDS of my tap water (800ppm) to 20 ppm but this reduces upto 50ppm....
                                   ● In flipkart nothing mention about extra filter, but when instalation guy came, he told about extra filter cost around Rs: 1100, if flipkart mentioned that same thing then it's convenient for buyers.
                            </p>
                        </div>

                    </div>

                    <div className="flex flex-col shadow  rounded-lg bg-gray-50 h-50 w-full ">
                        <div className="flex mt-4 ml-4 gap-3">
                            <div className="">
                                <img 
                                src="https://static.vecteezy.com/system/resources/previews/024/354/252/non_2x/businessman-isolated-illustration-ai-generative-free-photo.jpg" 
                                className="w-10 h-10 rounded-full border"
                                alt="" /></div>
                            <div className="mt-2 font-serif">Satyam Kumar</div>
                            <div className="mt-2 ml-5">⭐⭐⭐⭐⭐</div>
                        </div>

                        <div className="text-center mt-5  ">
                            <p className="">Value for money....but storage capacity is too less....
                                   ● Previous I used Drinkprime purifier....it reduces TDS of my tap water (800ppm) to 20 ppm but this reduces upto 50ppm....
                                   ● In flipkart nothing mention about extra filter, but when instalation guy came, he told about extra filter cost around Rs: 1100, if flipkart mentioned that same thing then it's convenient for buyers.
                            </p>
                        </div>

                    </div>

                    <div className="flex flex-col shadow  rounded-lg h-50 w-full bg-gray-50 ">
                        <div className="flex mt-4 ml-4 gap-3">
                            <div className="">
                                <img 
                                src="https://static.vecteezy.com/system/resources/previews/024/354/252/non_2x/businessman-isolated-illustration-ai-generative-free-photo.jpg" 
                                className="w-10 h-10 rounded-full border"
                                alt="" /></div>
                            <div className="mt-2 font-serif">Saurav Kumar</div>
                            <div className="mt-2 ml-5">⭐⭐⭐⭐⭐</div>
                        </div>

                        <div className="text-center mt-5  ">
                            <p className="">Value for money....but storage capacity is too less....
                                   ● Previous I used Drinkprime purifier....it reduces TDS of my tap water (800ppm) to 20 ppm but this reduces upto 50ppm....
                                   ● In flipkart nothing mention about extra filter, but when instalation guy came, he told about extra filter cost around Rs: 1100, if flipkart mentioned that same thing then it's convenient for buyers.
                            </p>
                        </div>

                    </div>
              </div>

              <div className=" p-4 mt-5 " >
                    <h1 className="text-3xl font-serif font-semibold  ">Related Doctor's</h1>
                    <div className="flex gap-10 mt-5   justify-center items-center ">

                      <div className="flex flex-col  h-70 w-50  rounded-lg ">
                        <div className= "h-40 w-full  ">
                            <img 
                             src="https://da4e1j5r7gw87.cloudfront.net/wp-content/uploads/sites/4783/2021/11/Side-perspective-of-an-eye-doctor-using-a-microscope-and-slit-lamp-to-view-a-patients-eye.png"  
                             className="h-full w-full"
                             alt="img" />
                        </div>
                        <div className="w-full h-20 text-center font-serif">
                            Eye Tests 
                        </div>
                        <div className="w-full h-10 ">
                            <button className="w-full h-full bg-orange-400  ">Book Now </button>
                        </div>
                     </div>

                    <div className="flex flex-col  h-70 w-50 rounded-lg ">
                        <div className= "h-40 w-full   ">
                            <img 
                             src="https://media.istockphoto.com/id/988475264/photo/sample-blood-collection-tube-with-hiv-test-label.jpg?s=612x612&w=0&k=20&c=GcfP8jy6CqmqGW8mTGzvy8kj6NfW4y8Gi1RP-slBASo="  
                             className="h-full w-full"
                             alt="img" />
                        </div>
                         <div className="w-full h-20 text-center">
                            HIV Tests
                        </div>
                        <div className="w-full h-10 ">
                            <button className="w-full h-full bg-orange-400 ">Book Now </button>
                        </div>
                    </div>

                    <div className="flex flex-col  h-70 w-50 rounded-lg ">
                        <div className= "h-40 w-full ">
                            <img 
                             src="https://www.scripps.org/sparkle-assets/images/blood_test_samples_1200x750-59cd6b99366c6e716576ccd68351ed39.jpg"  
                             className="h-full w-full"
                             alt="img" />
                        </div>
                         <div className="w-full h-20 text-center">
                            Blood Tests
                        </div>
                        <div className="w-full h-10 ">
                            <button className="w-full h-full bg-orange-400 ">Book Now </button>
                        </div>
                    </div>

                    <div className="flex flex-col  h-70 w-50 rounded-lg ">
                        <div className= "h-40 w-full">
                            <img 
                            src="https://www.scripps.org/sparkle-assets/images/blood_test_samples_1200x750-59cd6b99366c6e716576ccd68351ed39.jpg"
                             className="h-full w-full"
                             alt="img" />
                        </div>
                         <div className="w-full h-20 text-center">
                            Blood Tests
                        </div>
                        <div className="w-full h-10 ">
                            <button className="w-full h-full bg-orange-400 ">Book Now </button>
                        </div>
                    </div>

                    <div className="flex flex-col  h-70 w-50 rounded-lg">
                        <div className= "h-40 w-full ">
                            <img 
                             src="https://www.shutterstock.com/image-photo/radiologist-consults-patient-before-undergoing-260nw-2480666789.jpg"  
                             className="h-full w-full"
                             alt="img" />
                        </div>
                         <div className="w-full h-20 text-center">
                            MRI Scan
                        </div>
                        <div className="w-full h-10 ">
                            <button className="w-full h-full bg-orange-400 ">Book Now </button>
                        </div>
                    </div>


                    <div className="flex  justify-center items-center text-xl font-bold w-20">
                        <button>See All</button>
                    </div>

                    </div>
                </div>



              

              
                <div className=" p-4 mt-5 " >
                    <h1 className="text-3xl font-serif font-semibold ">Available Tests</h1>
                    <div className="flex gap-10 mt-5   justify-center items-center ">

                      <div className="flex flex-col  h-70 w-50  rounded-lg ">
                        <div className= "h-40 w-full  ">
                            <img 
                             src="https://da4e1j5r7gw87.cloudfront.net/wp-content/uploads/sites/4783/2021/11/Side-perspective-of-an-eye-doctor-using-a-microscope-and-slit-lamp-to-view-a-patients-eye.png"  
                             className="h-full w-full"
                             alt="img" />
                        </div>
                        <div className="w-full h-20 text-center font-serif">
                            Eye Tests 
                        </div>
                        <div className="w-full h-10 ">
                            <button className="w-full h-full bg-orange-400  ">Book Now </button>
                        </div>
                     </div>

                    <div className="flex flex-col  h-70 w-50 rounded-lg ">
                        <div className= "h-40 w-full   ">
                            <img 
                             src="https://media.istockphoto.com/id/988475264/photo/sample-blood-collection-tube-with-hiv-test-label.jpg?s=612x612&w=0&k=20&c=GcfP8jy6CqmqGW8mTGzvy8kj6NfW4y8Gi1RP-slBASo="  
                             className="h-full w-full"
                             alt="img" />
                        </div>
                         <div className="w-full h-20 text-center">
                            HIV Tests
                        </div>
                        <div className="w-full h-10 ">
                            <button className="w-full h-full bg-orange-400 ">Book Now </button>
                        </div>
                    </div>

                    <div className="flex flex-col  h-70 w-50 rounded-lg ">
                        <div className= "h-40 w-full ">
                            <img 
                             src="https://www.scripps.org/sparkle-assets/images/blood_test_samples_1200x750-59cd6b99366c6e716576ccd68351ed39.jpg"  
                             className="h-full w-full"
                             alt="img" />
                        </div>
                         <div className="w-full h-20 text-center">
                            Blood Tests
                        </div>
                        <div className="w-full h-10 ">
                            <button className="w-full h-full bg-orange-400 ">Book Now </button>
                        </div>
                    </div>

                    <div className="flex flex-col  h-70 w-50 rounded-lg ">
                        <div className= "h-40 w-full">
                            <img 
                            src="https://www.scripps.org/sparkle-assets/images/blood_test_samples_1200x750-59cd6b99366c6e716576ccd68351ed39.jpg"
                             className="h-full w-full"
                             alt="img" />
                        </div>
                         <div className="w-full h-20 text-center">
                            Blood Tests
                        </div>
                        <div className="w-full h-10 ">
                            <button className="w-full h-full bg-orange-400 ">Book Now </button>
                        </div>
                    </div>

                    <div className="flex flex-col  h-70 w-50 rounded-lg">
                        <div className= "h-40 w-full ">
                            <img 
                             src="https://www.shutterstock.com/image-photo/radiologist-consults-patient-before-undergoing-260nw-2480666789.jpg"  
                             className="h-full w-full"
                             alt="img" />
                        </div>
                         <div className="w-full h-20 text-center">
                            MRI Scan
                        </div>
                        <div className="w-full h-10 ">
                            <button className="w-full h-full bg-orange-400 ">Book Now </button>
                        </div>
                    </div>


                    <div className="flex  justify-center items-center text-xl font-bold w-20">
                        <button>See All</button>
                    </div>

                    </div>
                </div>




            </main>
            <Footer/>



    </div>
    )
}
export default Booking