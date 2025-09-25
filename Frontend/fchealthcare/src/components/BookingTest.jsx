import Header from "./Header"
import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import { apiRequest } from "../api";
import { useNavigate } from "react-router";






function BookingTest({token,onLogout,role}) {
    const [paymentMode, setPaymentMode] = useState("Cash");
    const [error, setError] = useState("");
    const [success,setSuccess] = useState("");
    const [show,setShow]=useState(true);
  const [name,setName] =useState("");
      const [dob,setDob] = useState("");  
      const [age, setAge] = useState("");
      const [address,setAddress] = useState("");
      const [contactNo,setContactNo] = useState("");
      const [gender,setGender] = useState("");
      const [userId,setUserId] = useState(2);
      const [slot,setSlot]=useState("");
      const[centerName,setCenterName]=useState("");
      const [service,setService] = useState(2);
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

    
    const handleSubmit=async(e)=>{
          e.preventDefault();
          try{
              await apiRequest(`/diagnostic/user/booking/${userId}`,"POST",{name,dob,age,address,contactNo,gender,slot,centerName,service,userId},token);
              navigate("/home");
          }
          catch(err){
              setError("Signup Failed");
          }
  
      }


    return (
        <div>
            <Header token={token} onLogout={onLogout} role={role}/>
            <main className="mt-40 ml-25 mr-25">
              <div className="flex w-full ">

              <div className="flex flex-col rounded-lg shadow w-1/3 p-5 ">
                
                <div className=" flex flex-col justify-center items-center">

                  <div>
                  <img 
                  src="https://max-website20-images.s3.ap-south-1.amazonaws.com/Blood_Sugar_Test_2fa9b72bef.png" 
                  className="h-60 w-60 rounded-full "
                  alt="" />
                  </div>
                  <div className="font-bold text-2xl mt-2">T3 T4 TSH</div>

                </div>

                <div className="flex gap-5 ml-8 mt-4">
                  <div className="font-semibold text-xl">Certified Labs</div>
                </div>

                <div className="flex gap-5 ml-8 mt-2">
                  <div className="font-semibold text-xl">Free Home Sample Pickup</div>
                </div>

                <div className="flex gap-5 ml-8 mt-2">
                  <div className="text-green-500 font-semibold text-lg">₹ 700</div>
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

                <div className="flex items-center justify-center gap-15 mb-5 ">
                  <div className="h-12 ">
                    <button onClick= {()=> setShow(true)} className={`h-full w-40 ${show===true ? "bg-blue-500":"bg-gray-200"} rounded-lg shadow`}>Patient's Details</button>
                  </div>
                  <div className="h-12"> 
                    <button  onClick= {()=> setShow(false)} className={`h-full w-40 ${show===true ? "bg-gray-200":"bg-blue-500"} rounded-lg shadow`}>Additional Details</button>
                  </div>
                </div>

                {show===true &&(
                 <form action="" className="ml-7 mt-10">
                   
                   <div className="flex flex-col justify-center items-center">
                      <div className="flex gap-7 mb-5 ">
                      <div>
                        <label className="text-xl font-semibold"> Patient's Name:
                        </label></div>
                      <div className="w-120">
                        <input 
                        type="text"
                        className="border w-full"
                         value={name}
                        onChange={(e) => setName(e.target.value)}
                        required  />
                      </div>
                    </div>

                    <div className="flex gap-11 mb-5">
                      <div>
                        <label className="text-xl font-semibold">Date Of Birth:
                        </label></div>
                      <div className="w-120 text-center">
                        <input 
                        type="date"
                        className="border w-full items-center"
                         value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        required  />
                      </div>
                    </div>


                    <div className="flex gap-32 mb-5">
                      <div>
                        <label className="text-xl font-semibold">Age:
                        </label></div>
                      <div className="w-120">
                        <input 
                        type="text"
                        className="border w-full"
                         value={age}
                        onChange={(e) => setAge(e.target.value)}
                        required  />
                      </div>
                    </div>


                    <div className="flex gap-10 mb-5">
                      <div>
                        <label className="text-xl font-semibold">Select Gender:
                        </label></div>
                      <div className=" flex w-120 gap-5">
                         <input type="radio" name="gender"   value={"male"} onChange={(e) => setGender(e.target.value)} required/> Male
                         <input type="radio" name="gender"   value={"female"} onChange={(e) => setGender(e.target.value)} required/> Female
                         <input type="radio" name="gender"   value={"other"} onChange={(e) => setGender(e.target.value)} required/> Other
                       
                      </div>
                    </div>


                    <div className="flex gap-10 justify-center mt-45 font-semibold items-center">
                        <div>
                            <button className="bg-blue-500 rounded-lg h-12 w-35">Add to cart</button>
                        </div>
                        <div>
                            <button onClick={()=>setShow(false)} className="bg-green-500 rounded-lg h-12 w-35">Next</button>
                        </div>
                    </div>
                   </div>

                 </form>
               )}

              {show===false &&(
                 <form onSubmit={handleSubmit} className="ml-7 mt-10 ">
                   
                   <div className="flex flex-col justify-center items-center">
                      <div className="flex gap-13 mb-5">
                      <div>
                        <label className="text-xl font-semibold">Center Name:
                        </label></div>
                      <div className="w-120">
                        <input 
                        type="text"
                        className="border w-full"
                          value={centerName}
                        onChange={(e) => setCenterName(e.target.value)}
                        required  />
                      </div>
                    </div>


                     <div className="flex gap-13 mb-5">
                      <div>
                        <label className="text-xl font-semibold">Select Service:
                        </label></div>
                      <div className=" flex w-120 gap-5">
                         <input type="radio" name="service" value={"Home Service"} onChange={(e) => setService(e.target.value)} required /> Home Service
                         <input type="radio" name="service" value={"In lab"} onChange={(e) => setService(e.target.value)} required/> In Lab
                      </div>
                    </div>

                    <div className="flex gap-7 mb-5">
                      <div>
                        <label className="text-xl font-semibold">Mobile Number:
                        </label></div>
                      <div className="w-120">
                        <input 
                        type="number"
                        className="border w-full"
                        value={contactNo}
                        onChange={(e) => setContactNo(e.target.value)}
                        required  />
                      </div>
                    </div>

                     <div className="flex gap-5 mb-5">
                      <div>
                        <label className="text-xl font-semibold">Date & Time Slot:
                        </label></div>
                      <div className="w-120">
                        <input 
                        type="datetime-local"
                        className="border w-full"
                        value={slot}
                        onChange={(e) => setSlot(e.target.value)}
                        required  />
                      </div>
                    </div>


                    <div className="flex gap-25">
                      <div>
                        <label className="text-xl font-semibold">Address:
                        </label></div>
                      <div className="w-120">
                        <input 
                        type="text"
                        className="border w-full" 
                          value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required />
                      </div>
                    </div>

                    <div className="flex gap-10 justify-center mt-35 font-semibold items-center">
                        <div>
                            <button className="bg-blue-500 rounded-lg h-12 w-35">Add to cart</button>
                        </div>
                        <div>
                            <button type="submit" className="bg-green-500 rounded-lg h-12 w-35">Book Now</button>
                        </div>
                    </div>
                   </div>
                  
                 </form>
                )}




                
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
export default BookingTest