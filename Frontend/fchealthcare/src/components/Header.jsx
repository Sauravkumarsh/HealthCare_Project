import { useState } from "react";
import { useNavigate } from "react-router"



function Header({token,onLogout,role}) {
    const navigate=useNavigate();
    const [showProfile,setShowProfile]=useState(false);
    return (
        <div className="flex flex-col fixed top-0 right-0 left-0 ">
            <header className="bg-gradient-to-t  from-blue-200 to-blue-400 text-white ">
            <div className="flex  w-full h-18 justify-between items-center gap-50">
                <div className=" w-350 ">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/d/de/Practo_New_Logo.png" 
                  className="w-25 h-10 mt-1 ml-5" 
                  alt="Logo" />
                </div>


                
                        <div className="flex p-5  justify-center h-20   ">
                            <div className=" w-35 bg-white text-black h-full">
                                <select name="Location" id="" className="border h-full w-full  ">
                                    <option className="" value="Patna">Patna</option>
                                </select>
                            </div>
                            <div className="w-120 bg-white h-full text-black">
                                <input type="text" className=" w-full h-full text-center" placeholder="Search doctors,clinics,hospitals,etc" />
                            </div>
                            <div className=" w-20 bg-white h-full">
                                <button className="bg-blue-500 w-full h-full">search</button>
                            </div>
                        </div> 


                {!token && (
                    <div className= "flex-1 text-right mr-6  ">
                    <button
                    className= "duration-150 ease-in w-30 bg-blue-400 text-sm  hover:text-lg text-white  h-8 rounded text-semibold" onClick={()=>navigate('/login')}>Login/Signup</button>
                </div>
                )}

                {token && (
                 <div className="mr-10 mt-2 ">
                    <button onClick={()=>setShowProfile(true)}>
                        <img 
                        src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg" 
                        className="w-44 h-10 rounded-full border object-cover mx-auto md:mx-0  md:mb-0" 
                        alt="profile" />
                    </button>
                 </div>
                )}

            </div>
            </header>
            {showProfile &&(
              <div className="fixed inset-0  bg-opacity-40 flex flex-row-reverse items-center mb-105  z-50">
                <div className="rounded-xl p-8 w-full max-w-md relative">
                    <div className="flex flex-col bg-white h-49 w-70 mx-34 rounded-lg">
                        <div className="p-5 border rounded font-semibold hover:bg-gray-200">
                            <button onClick={()=> navigate("/profile")}>
                                Profile
                            </button>
                        </div>
                        <div className="p-5 border rounded font-semibold hover:bg-gray-200">
                            <button>
                                Booking Details
                            </button>
                        </div >
                        <div className="p-5 border rounded font-semibold hover:bg-gray-200">
                            <button  onClick={onLogout} >
                                Logout
                            </button>
                        </div>
                    </div>
                  <button className='absolute top-2 right-2 text-gray-900 bg-white rounded-full w-8 h-8 flex items-center justify-center text-2xl'
                    onClick={()=>setShowProfile(false)}>X
                  </button>
                </div>
              </div>
            )}


            <div className="flex flex-col h-12 bg-purple-100 justify-center items-center">
                  <div className="mx-auto container flex   ">
                    {role==="USER" ?(
                        <div className="mx-auto container flex gap-15 ml-10 justify-center">
                    <div  ><button className="hover:text-black  hover:bg-blue-300 font-semibold text-lg w-18 h-8 rounded-lg" onClick={()=>navigate("/home")}>Home</button></div>
                    <div ><button className="hover:text-black  hover:bg-blue-300 font-semibold text-lg w-25 h-8 rounded-lg " onClick={()=>navigate("/diagnostics")}>Book Tests</button></div>
                    <div ><button className="hover:text-black  hover:bg-blue-300 font-semibold text-lg w-28 h-8 rounded-lg" onClick={()=>navigate("/clinics")}>Find Doctors</button></div>
                    <div><button className="hover:text-black hover:bg-blue-300 font-semibold text-lg w-34 h-8 rounded-lg" onClick={()=>navigate("/medicines")}>Medicines</button></div>
                    <div><button className="hover:text-black hover:bg-blue-300 font-semibold text-lg w-28 h-8 rounded-lg" onClick={()=>navigate("/about")}>Read Article</button></div>
                   <div><button className="hover:text-black hover:bg-blue-300 font-semibold text-lg w-32 h-8 rounded-lg" onClick={()=>navigate("/about")}>Security&Help</button></div>
                    <div><button className="hover:text-black hover:bg-blue-300 font-semibold text-lg w-24 h-8 rounded-lg" onClick={()=>navigate("/about")}>About Us</button></div>
                    
                        </div>
                    ):role==="admin"?(
                     <div className="mx-auto container flex gap-15 ml-10 justify-center">
                    <div ><button className="hover:text-black  hover:bg-blue-300 font-semibold text-lg " onClick={()=>navigate("/home")}>Home</button></div>
                    <div ><button className="hover:text-black  hover:bg-blue-300 font-semibold text-lg " onClick={()=>navigate("/addTest")}>Add Test</button></div>
                    <div ><button className="hover:text-black  hover:bg-blue-300 font-semibold text-lg" onClick={()=>navigate("/addDoctor")}>Add Doctors</button></div>
                    <div><button className="hover:text-black hover:bg-blue-300 font-semibold text-lg" onClick={()=>navigate("/about")}>About Us</button></div>
                        </div>
                    ):(
                     <div className="mx-auto container flex gap-15 ml-10 justify-center">
                    <div ><button className="hover:text-black  hover:bg-blue-300 font-semibold text-lg rounded-lg" onClick={()=>navigate("/home")}>Home</button></div>
                    <div ><button className="hover:text-black  hover:bg-blue-300 font-semibold text-lg " onClick={()=>navigate("/diagnostics")}>Book Tests</button></div>
                    <div ><button className="hover:text-black  hover:bg-blue-300 font-semibold text-lg" onClick={()=>navigate("/clinics")}>Find Doctors</button></div>
                    <div><button className="hover:text-black hover:bg-blue-300 font-semibold text-lg" onClick={()=>navigate("/medicines")}>Medicines</button></div>
                    <div><button className="hover:text-black hover:bg-blue-300 font-semibold text-lg" onClick={()=>navigate("/about")}>About Us</button></div>
                        </div>

                    )}

                 </div>
            </div>

        </div>
    )
}
export default Header