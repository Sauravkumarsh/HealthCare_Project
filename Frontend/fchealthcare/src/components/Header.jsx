import { useNavigate } from "react-router"



function Header({token,onLogout}) {
    const navigate=useNavigate();
    return (
        <div className="flex flex-col ">
            <header className="bg-gradient-to-r  from-blue-500 to-purple-500 text-white">
            <div className="flex  w-full h-15 justify-between items-center gap-50">
                <div className=" w-350 ">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/d/de/Practo_New_Logo.png" 
                  className="w-25 h-10 mt-1 ml-5" 
                  alt="Logo" />
                </div>
                 <div className="mx-auto container flex gap-10 ml-10 ">
                    <div ><button className="hover:text-black  hover:underline font-semibold text-lg " onClick={()=>navigate("/diagnostics")}>Book Tests</button></div>
                    <div ><button className="hover:text-black  hover:underline font-semibold text-lg" onClick={()=>navigate("/clinics")}>Find Doctors</button></div>
                    <div><button className="hover:text-black hover:underline font-semibold text-lg" onClick={()=>navigate("/about")}>About Us</button></div>

                 </div>
                 {token && (
                    <div className= "flex-1 text-right  mr-6  ">
                    <button
                    className="border border-black w-28 hover:text-blue-400 h-8 rounded text-semibold " onClick={onLogout} >Logout</button>
                </div>
                )}
                {!token && (
                    <div className= "flex-1 text-right  mr-6  ">
                    <button
                    className="border border-black w-28 hover:text-blue-400 h-8 rounded text-semibold " onClick={()=>navigate('/login')}>Login/Signup</button>
                </div>
                )}

            </div>
            </header>
        </div>
    )
}
export default Header