import { useState, useRef } from "react"
import Footer from "./Footer"
import Header from "./Header"
import { apiRequest } from "../api.jsx";
import { useNavigate } from "react-router";
import rapidoBg from "../assets/rapidobg.png";



function AddDoctor({token,onLogout,role}){
    const [name,setName] = useState("");
    const [experience,setExperience] = useState("");
    const [specialist,setSpecialist] = useState("");
    const [fees,setFees] = useState("");
    const [location,setLocation] = useState("");
    const [imageUrl,SetImageUrl] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const fileInputRef = useRef(null);
    const navigate = useNavigate();

    const handleImageChange = (file) => {
      if (file && file.type.startsWith("image/")) {
      SetImageUrl(file);
      setError("");
      } else {
      setError("Please select a valid image file");
      }
    };

    const handleFileInput = (e) => {
      const file = e.target.files[0];
      if (file) handleImageChange(file);
    };

    const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!imageUrl) {
      setError("Please select an image");
      return;
    }
    setLoading(true);
    try {
        await apiRequest("/diagnostic/admin/addClinic", "POST", { name,location,specialist,experience,imageUrl,fees }, token);
        navigate("/home");
    } catch (err) {
      setError("Failed to create post");
    }
    setLoading(false);
  };

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
              <form onSubmit={handleSubmit} className="">
                <div className="flex flex-col gap-2">
                     <div className="w-full bg-purple-50 rounded-lg shadow h-20 hover: bg-purple-100">
                    <label  className="block text-xl font-semibold">Doctor's Name:</label>
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
                    <label  className="block text-xl font-semibold">Specialist:</label>
                    <div className="">
                        <input 
                         className= "h-10 text-center  w-full" 
                         type="text" 
                         value={specialist}
                         onChange={(e) => setSpecialist(e.target.value)}
                         required
                         placeholder="Enter Specialization Degree" />
                    </div>
                </div>
                   <div className="bg-orange-50 rounded-lg shadow h-20">
                    <label  className="block text-xl font-semibold">Experience:</label>
                    <div className="">
                        <input 
                          className= "h-10 text-center w-full" 
                          type="text" 
                          value={experience}
                           onChange={(e) => setExperience(e.target.value)}
                          required
                          placeholder="Doctor's Exeperience" />
                    </div>
                </div>
                     <div className="bg-green-50 rounded-lg shadow h-20">
                    <label  className="block text-xl font-semibold">Fees:</label>
                    <div className="">
                        <input  
                         className= "h-10 text-center w-full" 
                         type="number" 
                         value={fees}
                         onChange={(e) => setFees(e.target.value)}
                         required         
                         placeholder="Prescription Charge" />
                    </div>
                </div>
                 <div className="bg-purple-50 rounded-lg shadow h-20">
                    <label  className="block text-xl font-semibold">Doctor's Image:</label>
                    <div className="">
                        <input 
                          className="ml-25 " 
                          ref={fileInputRef }
                          type="file" id="myFile" 
                          name="filename"
                          accept="image/*"
                          onChange={handleFileInput}/>
                    </div>
                </div>
                 <div className="bg-red-50 rounded-lg shadow h-20">
                    <label  className="block text-xl font-semibold">Address:</label>
                    <div className="">
                        <input 
                         className= "h-10 text-center w-full " 
                         type="text" 
                         value={location}
                          onChange={(e) => setLocation(e.target.value)}
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

export default AddDoctor