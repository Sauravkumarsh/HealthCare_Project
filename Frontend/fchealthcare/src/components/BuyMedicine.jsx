import { useNavigate } from "react-router"
import Footer from "./Footer"
import Header from "./Header"




function BuyMedicine({token,onLogout,role}){

    const navigate = useNavigate();


    return(
        <div>
            <Header token={token} onLogout={onLogout} role={role}/>
            <main className="mt-45 ">
                <div className="md:flex justigy-center ml-25 mr-25 gap-20 shadow  rounded-lg ">

                    <div className="h-107 w-100  p-10 shadow  rounded-lg ">
                      <img
                       src="https://medias.pourlascience.fr/api/v1/images/view/618bdaaad286c24de4078466/wide_1000-webp/image.jpg"  
                       className="h-full w-full"
                       alt="img" />
                    </div>
                    <div className="md:flex flex-col gap-3 mt-5">
                        <div className="text-2xl font-bold font-serif  ">Paracetamol (Panadol, Calpol, Alvedon)</div>
                        <div >
                            <div className="font-semibold text-lg ">Manufacturer/Company:</div>
                            <div>LIFESCAN MEDICAL DEVICES INDIA PVT LTD</div>
                        </div>
                        <div>
                            <div className="font-semibold text-lg ">Consumer Type</div>
                            <div>NON CONSUMABLE</div>
                        </div>
                        <div>
                            <div className="font-semibold text-lg ">Expiry Date</div>
                            <div>Use Before 24 Months</div>
                        </div>
                        <div>
                            <div className="font-semibold text-lg ">Return Policy</div>
                            <div>Not Returnable</div>
                        </div>

                        <div>
                         <div className="rounded-lg shadow  w-205 mb-5 ">
                            <div className="font-semibold text-lg mt-3" >Price</div>
                            <div className="flex gap-2 ">
                                <div >
                                    Available Onwards
                                </div>
                                <div className="text-green-500">₹500</div>
                                <div className="flex  ml-60 gap-10 mb-5 mr-5">
                                    <div>
                                       <button className="bg-blue-500 w-35 h-12" onClick={()=> navigate("/cart")}>Add to cart</button>
                                    </div>
                                    <div>
                                        <button className="bg-orange-400 w-35 h-12">Buy</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        
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
                    <h1 className="text-3xl font-serif font-semibold ml-14 ">See All Others</h1>
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

export default BuyMedicine