import Footer from "./Footer"
import Header from "./Header"

function AddDoctor({token,onLogout,role}){
    return(
        <div className="flex flex-col bg-gray-200 justify-center h-full items-center rounded-lg">
            <Header token={token} onLogout={onLogout} role={role} />

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
              <form action="" className="">
                <div className="flex flex-col gap-2">
                     <div className="w-full bg-purple-50 rounded-lg shadow h-20 hover: bg-purple-100">
                    <label  className="block text-xl font-semibold">Doctor's Name:</label>
                    <div className="">
                        <input  className= "h-10 text-center w-full" type="text" placeholder="Enter Doctor's name" />
                    </div>
             
                </div>
                <div className="bg-blue-50 rounded-lg shadow h-20">
                    <label  className="block text-xl font-semibold">Specialist:</label>
                    <div className="">
                        <input  className= "h-10 text-center  w-full" type="text" placeholder="Enter Specialization Degree" />
                    </div>
                </div>
                   <div className="bg-orange-50 rounded-lg shadow h-20">
                    <label  className="block text-xl font-semibold">Experience:</label>
                    <div className="">
                        <input  className= "h-10 text-center w-full" type="number" placeholder="Doctor's Exeperience" />
                    </div>
                </div>
                     <div className="bg-green-50 rounded-lg shadow h-20">
                    <label  className="block text-xl font-semibold">Fees:</label>
                    <div className="">
                        <input  className= "h-10 text-center w-full" type="number" placeholder="Prescription Charge" />
                    </div>
                </div>
                 <div className="bg-purple-50 rounded-lg shadow h-20">
                    <label  className="block text-xl font-semibold">Doctor's Image:</label>
                    <div className="">
                        <input  className= "h-10 text-center w-full" type="text" placeholder="Choose Your Picture" />
                    </div>
                </div>
                 <div className="bg-red-50 rounded-lg shadow h-20">
                    <label  className="block text-xl font-semibold">Address:</label>
                    <div className="">
                        <input  className= "h-10 text-center w-full" type="text" placeholder="Enter Address" />
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

export default AddDoctor