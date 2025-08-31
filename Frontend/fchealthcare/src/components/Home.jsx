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
                <div className="flex flex-col mt-2 gap-10">                               
                    <div className="flex ">
                        <div className="text-left md:text-center p-4">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit odio doloribus sunt ut omnis nulla ab odit, ipsum aliquid? Obcaecati dolor fugiat voluptate recusandae facilis temporibus quas aut laboriosam optio.</p>
                        </div>
                        <div>
                            <img src="https://www.remedieslabs.com/blog/wp-content/uploads/2022/06/10-things-to-know-before-selecting-a-diagnostic-center.jpg" 
                            className="rounded h-100 w-400 p-4"
                            alt="img" />
                        </div>
                    </div>
                    <div className="flex ">
                        <div>
                            <img src="https://assets.thehansindia.com/h-upload/2021/05/14/1076291-test.webp" 
                            className="rounded h-100 w-400 p-4"
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