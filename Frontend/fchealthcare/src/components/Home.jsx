import { useNavigate } from "react-router"
import Header from "./Header";
import Footer from "./Footer";

function Home({token,onLogout,role}){
    const navigate=useNavigate();
    return(
        <div className="flex flex-col">
            <Header token={token} onLogout={onLogout} role={role}/>
            {/* Home Section */}
            <main>

                <div className="flex flex-col mt-2 gap-10 p-5">   
                    <div className="flex gap-8 justify-center">

                        <div className="flex flex-col w-70 h-85 bg-purple-100 shadow rounded-lg transition delay-150 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 ">
                            <div className="p-2 ">
                                <img
                                 src="https://images.stockcake.com/public/b/f/b/bfb86650-c131-44b5-8a28-1190e5d51191_medium/confident-medical-professional-stockcake.jpg"
                                 className="w-full h-60 rounded-lg "
                                alt="" />
                            </div>
                            <div className="p-2">
                                <div className="text-center font-bold font-serif text-xl">kajal Kumari</div>
                                <div className="text-center font-semibold text-sm">
                                    <span>Experience:</span>
                                    <span>5years</span>
                                </div>
                                <div className="mt-3">
                                    <p  className=" text-pretty text-center"></p>
                                </div>
                            </div>
                        </div>

                          <div className="flex flex-col w-70 h-85 bg-purple-100 shadow rounded-lg transition delay-150 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 ">
                            <div className="p-2 ">
                                <img
                                 src="https://t4.ftcdn.net/jpg/01/36/18/77/360_F_136187711_qeBMOwkPdTg1dCN8e5TR1AmduXDz60Xn.jpg"
                                 className="w-full h-60 rounded-lg "
                                alt="" />
                            </div>
                            <div className="p-2">
                                <div className="text-center font-bold font-serif text-xl">Ayush Kumar</div>
                                <div className="text-center font-semibold text-sm">
                                    <span>Experience:</span>
                                    <span>5years</span>
                                </div>
                                <div className="mt-3">
                                    <p  className=" text-pretty text-center"> </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col w-70 h-85 bg-purple-100 shadow rounded-lg transition delay-150 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 ">
                            <div className="p-2 ">
                                <img
                                 src="https://img.freepik.com/premium-photo/close-up-portrait-his-he-nice-attractive-smart-clever-cheerful-cheery-doc-professor-emergency-center-owner-director-ceo-boss-chief-isolated-light-white-gray-pastel-color_274222-21030.jpg?semt=ais_hybrid&w=740&q=80"
                                 className="w-full h-60 rounded-lg "
                                alt="" />
                            </div>
                            <div className="p-2">
                                <div className="text-center font-bold font-serif text-xl">Satyam Kumar</div>
                                <div className="text-center font-semibold text-sm">
                                    <span>Experience:</span>
                                    <span>5years</span>
                                </div>
                                <div className="mt-3">
                                    <p  className=" text-pretty text-center"></p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col w-70 h-85 bg-purple-100 shadow rounded-lg transition delay-150 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 ">
                            <div className="p-2 ">
                                <img
                                 src="https://static.vecteezy.com/system/resources/thumbnails/028/287/555/small_2x/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo.jpg"
                                 className="w-full h-60 rounded-lg "
                                alt="" />
                            </div>
                            <div className="p-2">
                                <div className="text-center font-bold font-serif text-xl">Sonam Kumari</div>
                                <div className="text-center font-semibold text-sm">
                                    <span>Experience:</span>
                                    <span>5years</span>
                                </div>
                                <div className="mt-3">
                                    <p  className=" text-pretty text-center"></p>
                                </div>
                            </div>
                        </div>


                    </div>                            
                    <div className="flex ">
                        <div className="text-left md:text-center p-4">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit odio doloribus sunt ut omnis nulla ab odit, ipsum aliquid? Obcaecati dolor fugiat voluptate recusandae facilis temporibus quas aut laboriosam optio.</p>
                        </div>
                        <div>
                            <img src="https://www.remedieslabs.com/blog/wp-content/uploads/2022/06/10-things-to-know-before-selecting-a-diagnostic-center.jpg" 
                            className="rounded-lg h-100 w-400 p-4 shadow "
                            alt="img" />
                        </div>
                    </div>
                    <div className="flex ">
                        <div>
                            <img src="https://assets.thehansindia.com/h-upload/2021/05/14/1076291-test.webp" 
                            className="rounded-lg h-100 w-400 p-4 shadow"
                            alt="img" />
                        </div>
                            <div className="text-right md:text-center p-4">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum suscipit neque molestiae natus quae. Eaque suscipit quas sed officia? Eius iste labore dolores molestiae cupiditate voluptas ipsum excepturi eaque quaerat?</p>
                        </div>
                    </div>
                </div>
                
                
            </main>

            <Footer/>





        </div>
    )
}

export default Home