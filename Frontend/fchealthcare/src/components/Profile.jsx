import Header from "./Header"
import rapidoBg from "../assets/rapidobg.png";



function Profile({token,onLogout,role}) {
    return(
        <div>
            <Header token={token} onLogout={onLogout} role={role}/>
            <div
             className="flex  flex-col w-full h-full justify-center items-center  "
              style={{
                backgroundImage: `url(${rapidoBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",}} >

                <div className="w-270 bg-purple-200 ">
                    <div className="flex flex-col ">
                        <div className="h-20 ml-5 mt-10 text-2xl font-bold">My Profile </div>
                        <div className="flex w-full">
                            <div className="bg-green-50 w-1/3">
                              <div className="p-5 ml-15">
                                  <img 
                                    src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg" 
                                    className="w-50 h-50 rounded-full border object-cover mx-auto md:mx-0  md:mb-0" 
                                    alt="profile" />
                              </div>
                              <div className="ml-27  text-2xl font-semibold ">
                                Ayush Kumar
                              </div>
                              <div className="p-5 flex flex-col text-lg font-semibold gap-4 ">
                                <div >
                                    kumarsaurav2905@gmail.com
                                </div>
                                <hr className=" my-2"/>
                                <div>
                                    6200996072
                                </div>
                                <hr className="my-2" />
                                <div>
                                    Rastriya Ganj Phulwari Sharif Patna
                                </div>
                              </div>
                            </div>
                            <div className="w-2/3 bg-orange-50">Right</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile