import Footer from "./Footer"
import Header from "./Header"
import bgImg1 from "../assets/d1.jpg";
import bgImg2 from "../assets/d2.jpg";
import bgImg3 from "../assets/d3.jpg";
import { useNavigate } from "react-router";



function Medicine({token,onLogout,role}) {
    const navigate =useNavigate();
    return (
        <div >
            <Header token={token} onLogout={onLogout} role={role}/>
            <section className="mt-30 w-full fixed top-0 right-0 left-0">
                <hr />
                <div className=" flex bg-purple-950 h-8  justify-center items-center w-full text-white  gap-15">
                    <div  ><button className="hover:text-black  hover:bg-blue-300 font-semibold text-lg w-40 h-8 rounded-lg" >General Medicine</button></div>
                    <div ><button className="hover:text-black  hover:bg-blue-300 font-semibold text-lg w-30 h-8 rounded-lg " >Women Care</button></div>
                    <div ><button className="hover:text-black  hover:bg-blue-300 font-semibold text-lg w-28 h-8 rounded-lg" >Ayurveda</button></div>
                    <div><button className="hover:text-black hover:bg-blue-300 font-semibold text-lg w-34 h-8 rounded-lg" >Baby care</button></div>
                    <div><button className="hover:text-black hover:bg-blue-300 font-semibold text-lg w-35 h-8 rounded-lg" >Home Essentials</button></div>
                </div>
            </section>

            <main className="mt-55 ml-10 mr-10">
                

                <div className="flex items-center justify-center w-full h-25 mb-20">
                    <img src="https://images.apollo247.in/images/category/cc_banner_ts_new.jpg?tr=q-80,f-webp,w-1250,dpr-1,c-at_max" alt="" />
                </div>


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
                
                <div className=" p-4 mt-5 " >
                    <h1 className="text-3xl font-serif font-semibold ml-14 ">Baby Care Products</h1>
                    <div className="flex gap-10 mt-5   justify-center items-center ">

                      <div className="flex flex-col  h-70 w-50  rounded-lg ">
                        <div className= "h-40 w-full  ">
                            <img 
                             src="https://medias.pourlascience.fr/api/v1/images/view/618bdaaad286c24de4078466/wide_1000-webp/image.jpg"  
                             className="h-full w-full"
                             alt="img" />
                        </div>
                        <div className="w-full h-20 text-center font-serif">
                            Paracetamol (Panadol, Calpol, Alvedon) 
                        </div>
                        <div className="w-full h-10 ">
                            <button className="w-full h-full bg-orange-400  " onClick={()=>navigate("/buy")}>Buy 200</button>
                        </div>
                     </div>

                    <div className="flex flex-col  h-70 w-50 rounded-lg ">
                        <div className= "h-40 w-full   ">
                            <img 
                             src="https://i0.wp.com/www.nelsonikenna.com/wp-content/uploads/2022/05/antidepressant_tablets_in_box_1200x800px.jpg"  
                             className="h-full w-full"
                             alt="img" />
                        </div>
                         <div className="w-full h-20 text-center">
                            Disease
                        </div>
                        <div className="w-full h-10 ">
                            <button className="w-full h-full bg-orange-400 ">Buy 200</button>
                        </div>
                    </div>

                    <div className="flex flex-col  h-70 w-50 rounded-lg ">
                        <div className= "h-40 w-full ">
                            <img 
                             src="https://www.fcremedies.com/wp-content/uploads/2022/01/MAPRED-40-INJECTION.jpg"  
                             className="h-full w-full"
                             alt="img" />
                        </div>
                         <div className="w-full h-20 text-center">
                            Disease
                        </div>
                        <div className="w-full h-10 ">
                            <button className="w-full h-full bg-orange-400 ">Buy 200</button>
                        </div>
                    </div>

                    <div className="flex flex-col  h-70 w-50 rounded-lg ">
                        <div className= "h-40 w-full">
                            <img 
                            src="https://media.istockphoto.com/id/1181471590/photo/generic-paracetamol-tablets.webp?b=1&s=170667a&w=0&k=20&c=laSeV3sygwHAW0rcPLk0pgmzE1qhtb8gMiTRa7sadek="
                             className="h-full w-full"
                             alt="img" />
                        </div>
                         <div className="w-full h-20 text-center">
                            Disease
                        </div>
                        <div className="w-full h-10 ">
                            <button className="w-full h-full bg-orange-400 ">Buy 200</button>
                        </div>
                    </div>

                    <div className="flex flex-col  h-70 w-50 rounded-lg">
                        <div className= "h-40 w-full ">
                            <img 
                             src="https://www.mehrith.com/wp-content/uploads/2023/08/REAL-SAP.jpg"  
                             className="h-full w-full"
                             alt="img" />
                        </div>
                         <div className="w-full h-20 text-center">
                            Disease
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

                <div className=" p-4 mt-5 " >
                    <h1 className="text-3xl font-serif font-semibold ml-14 ">Women Care</h1>
                    <div className="flex gap-10 mt-5   justify-center items-center ">

                      <div className="flex flex-col  h-70 w-50  rounded-lg ">
                        <div className= "h-40 w-full  ">
                            <img 
                             src="https://medias.pourlascience.fr/api/v1/images/view/618bdaaad286c24de4078466/wide_1000-webp/image.jpg"  
                             className="h-full w-full"
                             alt="img" />
                        </div>
                        <div className="w-full h-20 text-center font-serif">
                            Paracetamol (Panadol, Calpol, Alvedon) 
                        </div>
                        <div className="w-full h-10 ">
                            <button className="w-full h-full bg-orange-400  ">Buy 200</button>
                        </div>
                     </div>

                    <div className="flex flex-col  h-70 w-50 rounded-lg ">
                        <div className= "h-40 w-full   ">
                            <img 
                             src="https://i0.wp.com/www.nelsonikenna.com/wp-content/uploads/2022/05/antidepressant_tablets_in_box_1200x800px.jpg"  
                             className="h-full w-full"
                             alt="img" />
                        </div>
                         <div className="w-full h-20 text-center">
                            Disease
                        </div>
                        <div className="w-full h-10 ">
                            <button className="w-full h-full bg-orange-400 ">Buy 200</button>
                        </div>
                    </div>

                    <div className="flex flex-col  h-70 w-50 rounded-lg ">
                        <div className= "h-40 w-full ">
                            <img 
                             src="https://www.fcremedies.com/wp-content/uploads/2022/01/MAPRED-40-INJECTION.jpg"  
                             className="h-full w-full"
                             alt="img" />
                        </div>
                         <div className="w-full h-20 text-center">
                            Disease
                        </div>
                        <div className="w-full h-10 ">
                            <button className="w-full h-full bg-orange-400 ">Buy 200</button>
                        </div>
                    </div>

                    <div className="flex flex-col  h-70 w-50 rounded-lg ">
                        <div className= "h-40 w-full">
                            <img 
                            src="https://media.istockphoto.com/id/1181471590/photo/generic-paracetamol-tablets.webp?b=1&s=170667a&w=0&k=20&c=laSeV3sygwHAW0rcPLk0pgmzE1qhtb8gMiTRa7sadek="
                             className="h-full w-full"
                             alt="img" />
                        </div>
                         <div className="w-full h-20 text-center">
                            Disease
                        </div>
                        <div className="w-full h-10 ">
                            <button className="w-full h-full bg-orange-400 ">Buy 200</button>
                        </div>
                    </div>

                    <div className="flex flex-col  h-70 w-50 rounded-lg">
                        <div className= "h-40 w-full ">
                            <img 
                             src="https://www.mehrith.com/wp-content/uploads/2023/08/REAL-SAP.jpg"  
                             className="h-full w-full"
                             alt="img" />
                        </div>
                         <div className="w-full h-20 text-center">
                            Disease
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


                <div className=" p-4 mt-5 " >
                    <h1 className="text-3xl font-serif font-semibold ml-14 ">Personal care</h1>
                    <div className="flex gap-10 mt-5   justify-center items-center ">

                      <div className="flex flex-col  h-70 w-50  rounded-lg ">
                        <div className= "h-40 w-full  ">
                            <img 
                             src="https://medias.pourlascience.fr/api/v1/images/view/618bdaaad286c24de4078466/wide_1000-webp/image.jpg"  
                             className="h-full w-full"
                             alt="img" />
                        </div>
                        <div className="w-full h-20 text-center font-serif">
                            Paracetamol (Panadol, Calpol, Alvedon) 
                        </div>
                        <div className="w-full h-10 ">
                            <button className="w-full h-full bg-orange-400  ">Buy 200</button>
                        </div>
                     </div>

                    <div className="flex flex-col  h-70 w-50 rounded-lg ">
                        <div className= "h-40 w-full   ">
                            <img 
                             src="https://i0.wp.com/www.nelsonikenna.com/wp-content/uploads/2022/05/antidepressant_tablets_in_box_1200x800px.jpg"  
                             className="h-full w-full"
                             alt="img" />
                        </div>
                         <div className="w-full h-20 text-center">
                            Disease
                        </div>
                        <div className="w-full h-10 ">
                            <button className="w-full h-full bg-orange-400 ">Buy 200</button>
                        </div>
                    </div>

                    <div className="flex flex-col  h-70 w-50 rounded-lg ">
                        <div className= "h-40 w-full ">
                            <img 
                             src="https://www.fcremedies.com/wp-content/uploads/2022/01/MAPRED-40-INJECTION.jpg"  
                             className="h-full w-full"
                             alt="img" />
                        </div>
                         <div className="w-full h-20 text-center">
                            Disease
                        </div>
                        <div className="w-full h-10 ">
                            <button className="w-full h-full bg-orange-400 ">Buy 200</button>
                        </div>
                    </div>

                    <div className="flex flex-col  h-70 w-50 rounded-lg ">
                        <div className= "h-40 w-full">
                            <img 
                            src="https://media.istockphoto.com/id/1181471590/photo/generic-paracetamol-tablets.webp?b=1&s=170667a&w=0&k=20&c=laSeV3sygwHAW0rcPLk0pgmzE1qhtb8gMiTRa7sadek="
                             className="h-full w-full"
                             alt="img" />
                        </div>
                         <div className="w-full h-20 text-center">
                            Disease
                        </div>
                        <div className="w-full h-10 ">
                            <button className="w-full h-full bg-orange-400 ">Buy 200</button>
                        </div>
                    </div>

                    <div className="flex flex-col  h-70 w-50 rounded-lg">
                        <div className= "h-40 w-full ">
                            <img 
                             src="https://www.mehrith.com/wp-content/uploads/2023/08/REAL-SAP.jpg"  
                             className="h-full w-full"
                             alt="img" />
                        </div>
                         <div className="w-full h-20 text-center">
                            Disease
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

                <div className=" p-4 mt-5 " >
                    <h1 className="text-3xl font-serif font-semibold ml-14 ">Ayurveda</h1>
                    <div className="flex gap-10 mt-5   justify-center items-center ">

                      <div className="flex flex-col  h-70 w-50  rounded-lg ">
                        <div className= "h-40 w-full  ">
                            <img 
                             src="https://medias.pourlascience.fr/api/v1/images/view/618bdaaad286c24de4078466/wide_1000-webp/image.jpg"  
                             className="h-full w-full"
                             alt="img" />
                        </div>
                        <div className="w-full h-20 text-center font-serif">
                            Paracetamol (Panadol, Calpol, Alvedon) 
                        </div>
                        <div className="w-full h-10 ">
                            <button className="w-full h-full bg-orange-400  ">Buy 200</button>
                        </div>
                     </div>

                    <div className="flex flex-col  h-70 w-50 rounded-lg ">
                        <div className= "h-40 w-full   ">
                            <img 
                             src="https://i0.wp.com/www.nelsonikenna.com/wp-content/uploads/2022/05/antidepressant_tablets_in_box_1200x800px.jpg"  
                             className="h-full w-full"
                             alt="img" />
                        </div>
                         <div className="w-full h-20 text-center">
                            Disease
                        </div>
                        <div className="w-full h-10 ">
                            <button className="w-full h-full bg-orange-400 ">Buy 200</button>
                        </div>
                    </div>

                    <div className="flex flex-col  h-70 w-50 rounded-lg ">
                        <div className= "h-40 w-full ">
                            <img 
                             src="https://www.fcremedies.com/wp-content/uploads/2022/01/MAPRED-40-INJECTION.jpg"  
                             className="h-full w-full"
                             alt="img" />
                        </div>
                         <div className="w-full h-20 text-center">
                            Disease
                        </div>
                        <div className="w-full h-10 ">
                            <button className="w-full h-full bg-orange-400 ">Buy 200</button>
                        </div>
                    </div>

                    <div className="flex flex-col  h-70 w-50 rounded-lg ">
                        <div className= "h-40 w-full">
                            <img 
                            src="https://media.istockphoto.com/id/1181471590/photo/generic-paracetamol-tablets.webp?b=1&s=170667a&w=0&k=20&c=laSeV3sygwHAW0rcPLk0pgmzE1qhtb8gMiTRa7sadek="
                             className="h-full w-full"
                             alt="img" />
                        </div>
                         <div className="w-full h-20 text-center">
                            Disease
                        </div>
                        <div className="w-full h-10 ">
                            <button className="w-full h-full bg-orange-400 ">Buy 200</button>
                        </div>
                    </div>

                    <div className="flex flex-col  h-70 w-50 rounded-lg">
                        <div className= "h-40 w-full ">
                            <img 
                             src="https://www.mehrith.com/wp-content/uploads/2023/08/REAL-SAP.jpg"  
                             className="h-full w-full"
                             alt="img" />
                        </div>
                         <div className="w-full h-20 text-center">
                            Disease
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

                <div className=" p-4 mt-5 " >
                    <h1 className="text-3xl font-serif font-semibold ml-14 ">Home Essentials</h1>
                    <div className="flex gap-10 mt-5   justify-center items-center ">

                      <div className="flex flex-col  h-70 w-50  rounded-lg ">
                        <div className= "h-40 w-full  ">
                            <img 
                             src="https://medias.pourlascience.fr/api/v1/images/view/618bdaaad286c24de4078466/wide_1000-webp/image.jpg"  
                             className="h-full w-full"
                             alt="img" />
                        </div>
                        <div className="w-full h-20 text-center font-serif">
                            Paracetamol (Panadol, Calpol, Alvedon) 
                        </div>
                        <div className="w-full h-10 ">
                            <button className="w-full h-full bg-orange-400  ">Buy 200</button>
                        </div>
                     </div>

                    <div className="flex flex-col  h-70 w-50 rounded-lg ">
                        <div className= "h-40 w-full   ">
                            <img 
                             src="https://i0.wp.com/www.nelsonikenna.com/wp-content/uploads/2022/05/antidepressant_tablets_in_box_1200x800px.jpg"  
                             className="h-full w-full"
                             alt="img" />
                        </div>
                         <div className="w-full h-20 text-center">
                            Disease
                        </div>
                        <div className="w-full h-10 ">
                            <button className="w-full h-full bg-orange-400 ">Buy 200</button>
                        </div>
                    </div>

                    <div className="flex flex-col  h-70 w-50 rounded-lg ">
                        <div className= "h-40 w-full ">
                            <img 
                             src="https://www.fcremedies.com/wp-content/uploads/2022/01/MAPRED-40-INJECTION.jpg"  
                             className="h-full w-full"
                             alt="img" />
                        </div>
                         <div className="w-full h-20 text-center">
                            Disease
                        </div>
                        <div className="w-full h-10 ">
                            <button className="w-full h-full bg-orange-400 ">Buy 200</button>
                        </div>
                    </div>

                    <div className="flex flex-col  h-70 w-50 rounded-lg ">
                        <div className= "h-40 w-full">
                            <img 
                            src="https://media.istockphoto.com/id/1181471590/photo/generic-paracetamol-tablets.webp?b=1&s=170667a&w=0&k=20&c=laSeV3sygwHAW0rcPLk0pgmzE1qhtb8gMiTRa7sadek="
                             className="h-full w-full"
                             alt="img" />
                        </div>
                         <div className="w-full h-20 text-center">
                            Disease
                        </div>
                        <div className="w-full h-10 ">
                            <button className="w-full h-full bg-orange-400 ">Buy 200</button>
                        </div>
                    </div>

                    <div className="flex flex-col  h-70 w-50 rounded-lg">
                        <div className= "h-40 w-full ">
                            <img 
                             src="https://www.mehrith.com/wp-content/uploads/2023/08/REAL-SAP.jpg"  
                             className="h-full w-full"
                             alt="img" />
                        </div>
                         <div className="w-full h-20 text-center">
                            Disease
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