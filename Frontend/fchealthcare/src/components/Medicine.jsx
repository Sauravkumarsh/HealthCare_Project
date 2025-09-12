import Footer from "./Footer"
import Header from "./Header"
import bgImg1 from "../assets/d1.jpg";
import bgImg2 from "../assets/d2.jpg";
import bgImg3 from "../assets/d3.jpg";



function Medicine({token,onLogout,role}) {
    return (
        <div>
            <Header token={token} onLogout={onLogout} role={role}/>
            <main className="mt-40 ml-10 mr-15">
                <div className="flex justify-center items-center gap-15">

                    <div className="flex flex-col justify-center items-center bg-yellow-100 h-40 w-60 rounded-lg shadow"
                    style={{
                        backgroundImage: `url(${bgImg1})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",}}>
                        <span className="text-white text-center text-2xl font-serif">Get 20% Off on Buy Above ₹2000</span>
                    </div>

                    <div className="flex flex-col justify-center items-center bg-yellow-100 h-40 w-60 rounded-lg shadow"
                    style={{
                        backgroundImage: `url(${bgImg2})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",}}>
                        <p className=" mr-5 text-2xl font-serif ml-35 mb-14">Instant delivery</p>
                    </div>

                    <div className="flex flex-col justify-center items-center bg-yellow-100 h-40 w-60 rounded-lg shadow"
                    style={{
                        backgroundImage: `url(${bgImg3})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",}}>
                        <span className="text-white text-center text-3xl font-serif"></span>
                    </div>

                    <div className="flex flex-col justify-center items-center bg-yellow-100 h-40 w-60 rounded-lg shadow"
                    style={{
                        backgroundImage: `url(${bgImg1})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",}}>
                        <span className="text-white text-center text-3xl font-serif">Get 20% Off on Buy Above ₹2000</span>
                    </div>


                </div>
                
                <div className=" p-4 mt-5">
                    <h1 className="text-3xl font-serif font-semibold ">Baby Care Products</h1>
                    <div className="flex gap-10 mt-5 ">

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

                
                <div className="p-4 mt-5 ">
                    <h1 className="text-3xl font-serif font-semibold ">Women Care</h1>
                    <div className="flex gap-10 mt-5">

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

                <div className="p-4 mt-5 ">
                    <h1 className="text-3xl font-serif font-semibold ">Personal Care</h1>
                    <div className="flex gap-10 mt-5">

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

                <div className="p-4 mt-5 ">
                    <h1 className="text-3xl font-serif font-semibold ">Ayurveda</h1>
                    <div className="flex gap-10 mt-5">

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


                <div className="p-4 mt-5 ">
                    <h1 className="text-3xl font-serif font-semibold ">Home Essentials</h1>
                    <div className="flex gap-10 mt-5">

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


            </main>
            <Footer/>
        </div>
    )
}
export default Medicine