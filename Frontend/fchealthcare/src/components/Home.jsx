import { useNavigate } from "react-router"
import Header from "./Header";
import Footer from "./Footer";

import bgImg4 from "../assets/bgimg4.jpeg";







function Home({token,onLogout,role}){
    const navigate=useNavigate();
    return(
        <div className="flex flex-col">
            <Header token={token} onLogout={onLogout} role={role}/>
            {/* Home Section */}
            <main className="ml-10 mr-10 mt-40">

                        <div  className="p-10 h-100 text-wrap w-full "
                         style={{
                         backgroundImage: `url(${bgImg4})`,
                         backgroundSize: "cover",
                         backgroundPosition: "center",
                         backgroundRepeat: "no-repeat",}}>
                            <div className="flex flex-col  w-180 gap-10 ">
                                <div className=""><p className=" text-5xl font-serif text-left font-italic">We hope they encourage you to see the silver lining as you or your loved one heals.</p></div>
                                <div className="w-2/3 mt-4 h-26 text-left "><p className="text-white h-26 text-3xl text-left  overflow-hidden text-clip font-mono"> “I will love the light for it shows me the way, yet I will endure the darkness because it shows me the stars.” —Og Mandino “Nothing is impossible. The word itself says, ‘I’m Possible!’” —Audrey Hepburn</p></div>
                            </div>
                        </div>         

                      <div className=" flex bg-gradient-to-r  from-blue-50 to-blue-200 font-serif h-16 justify-center items-center w-full text-center mt-5">
                         <div className="text-4xl font-serif">OUR SERVICES</div>
                      </div>

                    

                <div className="flex flex-col mt-2 gap-10 p-5">   
                    <div className="flex gap-8 justify-center">

                        <div className="flex flex-col w-60 h-auto bg-blue-50 shadow rounded-lg transition delay-150 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 ">
                            <div className="p-2 ">
                                <img
                                 src="https://i.pinimg.com/736x/2f/63/5c/2f635cf35219c2607cd7a084da8999a7.jpg"
                                 className="w-full h-50 rounded-lg "
                                alt="" />
                            </div>
                            <div className="p-2 ">
                                <div className="text-center font-bold font-serif text-xl">Find Doctor Near You</div>
                                <div className="text-center font-semibold text-sm">
                                    <span>Confirmed appointments</span>
                              
                                </div>
                                <div className="mt-3">
                                    <p  className=" text-pretty text-center"></p>
                                </div>
                            </div>
                        </div>

                          <div className="flex flex-col w-60 h-auto bg-blue-50 shadow rounded-lg transition delay-150 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 ">
                            <div className="p-2 ">
                                <img
                                 src="https://arthdiagnostics.com/wp-content/uploads/2024/02/Arth-Diagnostics-Best-Diagnostics-Centre-in-Udaipur.jpg"
                                 className="w-full h-50 rounded-lg "
                                alt="" />
                            </div>
                            <div className="p-2">
                                <div className="text-center font-bold font-serif text-xl">CheckUp Your Health</div>
                                <div className="text-center font-semibold text-sm">
                                    <span>From best DiagnosticCenter</span>
                               
                                </div>
                                <div className="mt-3">
                                    <p  className=" text-pretty text-center"> </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col w-60 h-auto bg-blue-50 shadow rounded-lg transition delay-150 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 ">
                            <div className="p-2 ">
                                <img
                                 src="https://c8.alamy.com/comp/2C7A6FP/book-your-medical-appointment-online-using-a-mobile-app-doctor-sitting-at-desk-in-the-background-and-wearing-a-face-mask-2C7A6FP.jpg"
                                 className="w-full h-50 rounded-lg "
                                alt="" />
                            </div>
                            <div className="p-2">
                                <div className="text-center font-bold font-serif text-xl">Easy And Instant Booking</div>
                                <div className="text-center font-semibold text-sm">
                                    <span>In minimum cost and fastest booking</span>
                                    
                                </div>
                                <div className="mt-3">
                                    <p  className=" text-pretty text-center"></p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col w-60 h-auto bg-blue-50 shadow rounded-lg transition delay-150 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 ">
                            <div className="p-2 ">
                                <img
                                 src="https://cdn2.vectorstock.com/i/1000x1000/85/51/doctor-video-call-consultation-vector-27278551.jpg"
                                 className="w-full h-50 rounded-lg "
                                alt="" />
                            </div>
                            <div className="p-2">
                                <div className="text-center font-bold font-serif text-xl">Instant Video Consultation</div>
                                <div className="text-center font-semibold text-sm">
                                    <span>connect with in 60sec</span>
                                  
                                </div>
                                <div className="mt-3">
                                    <p  className=" text-pretty text-center"></p>
                                </div>
                            </div>
                        </div>
                    </div>  

                   <div className="p-4 ">
                    <h1 className="text-4xl font-bold ">Available Medicine</h1>
                    <div className="flex gap-10 p-8">

                      <div className="flex flex-col  h-40 w-40    rounded-lg ">
                        <div className= "h-30 w-full  ">
                            <img 
                             src="https://medias.pourlascience.fr/api/v1/images/view/618bdaaad286c24de4078466/wide_1000-webp/image.jpg"  
                             className="h-full w-full"
                             alt="img" />
                        </div>
                        <div className="w-full h-10 ">
                            <button className="w-full h-full bg-orange-400  ">Buy 200</button>
                        </div>
                     </div>

                    <div className="flex flex-col  h-40 w-40 rounded-lg ">
                        <div className= "h-30 w-full   ">
                            <img 
                             src="https://www.janaxapharmaceuticals.com/wp-content/uploads/2024/12/Jancedol-40.jpg"  
                             className="h-full w-full"
                             alt="img" />
                        </div>
                        <div className="w-full h-10 ">
                            <button className="w-full h-full bg-orange-400 ">Buy 200</button>
                        </div>
                    </div>

                    <div className="flex flex-col  h-40 w-40 rounded-lg ">
                        <div className= "h-30 w-full ">
                            <img 
                             src="https://www.fcremedies.com/wp-content/uploads/2022/01/MAPRED-40-INJECTION.jpg"  
                             className="h-full w-full"
                             alt="img" />
                        </div>
                        <div className="w-full h-10 ">
                            <button className="w-full h-full bg-orange-400 ">Buy 200</button>
                        </div>
                    </div>

                    <div className="flex flex-col  h-40 w-40 rounded-lg ">
                        <div className= "h-30 w-full">
                            <img 
                             src="https://assets.newatlas.com/dims4/default/e369cd3/2147483647/strip/true/crop/3840x2160+0+0/resize/2880x1620!/format/webp/quality/90/?url=https%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Fa3%2F90%2F3324f72b418ca03037e103ed0214%2Fdepositphotos-817198500-xl.jpg"  
                             className="h-full w-full"
                             alt="img" />
                        </div>
                        <div className="w-full h-10 ">
                            <button className="w-full h-full bg-orange-400 ">Buy 200</button>
                        </div>
                    </div>

                    <div className="flex flex-col  h-40 w-40 rounded-lg">
                        <div className= "h-30 w-full ">
                            <img 
                             src="https://www.mehrith.com/wp-content/uploads/2023/08/REAL-SAP.jpg"  
                             className="h-full w-full"
                             alt="img" />
                        </div>
                        <div className="w-full h-10 ">
                            <button className="w-full h-full bg-orange-400 ">Buy 200</button>
                        </div>
                    </div>

                    <div className="flex flex-col  h-40 w-40 rounded-lg ">
                        <div className= "h-30 w-full ">
                            <img 
                             src="https://assets.medpagetoday.net/media/images/96xxx/96431_m.jpg"  
                             className="h-full w-full "
                             alt="img" />
                        </div>
                        <div className="w-full h-10 ">
                            <button className="w-full h-full bg-orange-400 ">Buy 200</button>
                        </div>
                    </div>


                    <div className="flex flex-col  h-40 w-40 rounded-lg ">
                        <div className= "h-30 w-full ">
                            <img 
                             src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i7.8OIvTeYwM/v1/1200x800.jpg"  
                             className="h-full w-full"
                             alt="img" />
                        </div>
                        <div className="w-full h-10 ">
                            <button className="w-full h-full bg-orange-400 ">Buy 200</button>
                        </div>
                    </div>

                    <div className="flex  justify-center items-center text-xl font-bold w-20">
                        <button>See All</button>
                    </div>




                    </div>
                   </div>


                    <div className="p-4 ">
                    <h1 className="text-4xl font-bold ">Available Tests</h1>
                    <div className="flex gap-10 p-8">

                      <div className="flex flex-col  h-40 w-40    rounded-lg ">
                        <div className= "h-30 w-full  ">
                            <img 
                             src="https://www.shutterstock.com/image-photo/radiologist-consults-patient-before-undergoing-260nw-2480666789.jpg"  
                             className="h-full w-full"
                             alt="img" />
                        </div>
                        <div className="w-full h-10 ">
                            <button className="w-full h-full bg-orange-400  ">Book MRI</button>
                        </div>
                     </div>

                    <div className="flex flex-col  h-40 w-40 rounded-lg ">
                        <div className= "h-30 w-full   ">
                            <img 
                             src="https://media.istockphoto.com/id/1415662882/photo/male-patient-lying-on-bed-while-female-nurse-adjusting-modern-x-ray-machine-for-scanning-his.jpg?s=612x612&w=0&k=20&c=YPy1QHRU0nkpSmKj2gOQw6maPHp7L177qgKI7G1Fstw="  
                             className="h-full w-full"
                             alt="img" />
                        </div>
                        <div className="w-full h-10 ">
                            <button className="w-full h-full bg-orange-400 ">Book X-Ray</button>
                        </div>
                    </div>

                    <div className="flex flex-col  h-40 w-40 rounded-lg ">
                        <div className= "h-30 w-full ">
                            <img 
                             src="https://www.scripps.org/sparkle-assets/images/blood_test_samples_1200x750-59cd6b99366c6e716576ccd68351ed39.jpg"  
                             className="h-full w-full"
                             alt="img" />
                        </div>
                        <div className="w-full h-10 ">
                            <button className="w-full h-full bg-orange-400 ">Book Blood Test</button>
                        </div>
                    </div>

                    <div className="flex flex-col  h-40 w-40 rounded-lg ">
                        <div className= "h-30 w-full">
                            <img 
                            src="https://media.istockphoto.com/id/988475264/photo/sample-blood-collection-tube-with-hiv-test-label.jpg?s=612x612&w=0&k=20&c=GcfP8jy6CqmqGW8mTGzvy8kj6NfW4y8Gi1RP-slBASo="
                             className="h-full w-full"
                             alt="img" />
                        </div>
                        <div className="w-full h-10 ">
                            <button className="w-full h-full bg-orange-400 ">Book HIV Test</button>
                        </div>
                    </div>

                    <div className="flex flex-col  h-40 w-40 rounded-lg">
                        <div className= "h-30 w-full ">
                            <img 
                             src="https://bookmerilab.com/blog/wp-content/uploads/2017/11/Ultrasound-NT-Scan.jpg"  
                             className="h-full w-full"
                             alt="img" />
                        </div>
                        <div className="w-full h-10 ">
                            <button className="w-full h-full bg-orange-400 ">Book Ultrasound</button>
                        </div>
                    </div>

                    <div className="flex flex-col  h-40 w-40 rounded-lg ">
                        <div className= "h-30 w-full ">
                            <img 
                             src="https://da4e1j5r7gw87.cloudfront.net/wp-content/uploads/sites/4783/2021/11/Side-perspective-of-an-eye-doctor-using-a-microscope-and-slit-lamp-to-view-a-patients-eye.png"  
                             className="h-full w-full "
                             alt="img" />
                        </div>
                        <div className="w-full h-10 ">
                            <button className="w-full h-full bg-orange-400 ">Book Eye Test</button>
                        </div>
                    </div>


                    <div className="flex flex-col  h-40 w-40 rounded-lg ">
                        <div className= "h-30 w-full ">
                            <img 
                             src="https://media.post.rvohealth.io/wp-content/uploads/2023/10/doctor-patient-endoscopy-medical-procedure-732x549-thumbnail-732x549.jpg"  
                             className="h-full w-full"
                             alt="img" />
                        </div>
                        <div className="w-full h-10 ">
                            <button className="w-full h-full bg-orange-400 ">Book Endoscopy</button>
                        </div>
                    </div>

                    <div className="flex  justify-center items-center text-xl font-bold w-20">
                        <button>See All</button>
                    </div>




                    </div>
                   </div>


                    <div className="flex flex-col gap-4 p-4 ">
                        <div >
                            <span className="text-4xl font-bold ">Consult top doctors online for any health concern</span> <br />
                            <span className="text-md font-semibold">Private online consultations with verified doctors in all specialists</span>
                        </div>

                        <div className="flex gap-2 mt-12 justify-center">
                            <div className="flex flex-col ">
                                <div>
                                <img 
                                src="https://www.practostatic.com/consult/consult-home/symptoms_icon/irregular-painful+period.png" 
                                className="h-35  "
                                alt="" />
                                </div>

                                <div className="font-semibold text-center w-full ">
                                    <p className="text-center w-2/3">Periode doubt or Pregnancy</p>
                                </div>
                            
                            </div>

                            <div>
                               <div>
                                <img 
                                src="https://www.practostatic.com/consult/consult-home/symptoms_icon/Acne.png" 
                                className="h-35"
                                alt="" />
                                </div>

                                <div className="font-semibold w-full">
                                    <p className="text-center w-2/3">Acne ,Pimple or Skin Issue</p>
                                </div>
                            </div>

                            <div>
                              <div>
                                <img 
                                src="https://www.practo.com/consult/static/images/top-speciality-sexology.svg" 
                                className="h-35"
                                alt="" />
                                </div>

                                <div className="font-semibold w-full">
                                    <p className="text-center w-2/3">Performance issues in bed</p>
                                </div>
                            </div>

                            <div>
                              <div>
                                <img 
                                src="https://www.practostatic.com/consult/consult-home/symptoms_icon/coughing.png" 
                                className="h-35"
                                alt="" />
                                </div>

                                <div className="font-semibold w-full ">
                                    <p className="text-center w-2/3">Cold,cough or fever</p>
                                </div>
                            </div>

                            <div className="ml-12">
                             <div >
                                <img 
                                src="https://www.practo.com/consult/static/images/top-speciality-pediatric.svg" 
                                className="h-35"
                                alt="" />
                                </div>

                                <div className="font-semibold w-full ">
                                    <p className="text-center w-2/3">Child not feeling well</p>
                                </div>
                            </div>

                            <div className="ml-12"> 
                              <div >
                                <img 
                                src="https://www.practostatic.com/acred/search-assets/2/12-mental-wellness.png" 
                                className="h-35"
                                alt="" />
                                </div>

                                <div className="font-semibold w-full">
                                    <p className="text-center w-2/3">Depression or anxiety</p>
                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center h-50 w-150 ml-110 mt-12 shadow">
                        <div className="text-4xl font-serif font-bold text-center">What our users have to say</div>
                        <div className="mt-5">
                            <p className="font-semibold text-xl text-center">Very helpful. Far easier than doing same things on computer. Allows quick and easy search with speedy booking. Even maintains history of doctors visited.</p>
                        </div>

                    </div>

                </div>
            

                
            </main>

            <section>
                 <div className=" flex bg-gradient-to-t  from-blue-300 to-blue-500 text-white h-100 w-full p-5 justify-center gap-20">
                    <div className="flex flex-col gap-1  ">
                        <div className="font-bold text-2xl mb-2"> Practo</div>
                        <div>About Us</div>
                        <div>Service</div>
                        <div>Contact Us</div>
                    </div> 

                    <div className="flex flex-col gap-1  " >
                        <div className="font-bold text-2xl mb-2">For Patients</div>
                        <div>Search For Doctors</div>
                        <div>Search For Clinics</div>
                        <div>Search For Diagnostic Center</div>
                        <div>Read Health Article</div>
                    </div> 
                    
                    <div className="flex flex-col gap-1  ">
                        <div className="font-bold text-2xl mb-2">More</div>
                        <div>Help</div>
                        <div>Developers</div>
                        <div>Privacy Policy</div>
                        <div>Terms & Conditions</div>
                        <div>HealthCare Directory</div>
                    </div> 

                    <div className="flex flex-col gap-1  ">
                        <div className="font-bold text-2xl mb-2">Social Media</div>
                        <div>WhatsApp</div>
                        <div>Facebook</div>
                        <div>Instagram</div>
                        <div>Youtube</div>
                        <div>GitHub</div>
                    </div> 
                 </div>
            </section>

            <Footer/>





        </div>
    )
}

export default Home