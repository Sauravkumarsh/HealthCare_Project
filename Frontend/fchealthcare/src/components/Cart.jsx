import Header from "./Header"

function Cart({token,onLogout,role} ) {
    return (
         <div >
            <Header token={token} onLogout={onLogout} role={role}/>

            <main className="mt-40 ml-25 mr-25" >
                <h1 className="text-4xl font-serif font-semibold mb-5">My Cart</h1>
             <div className="flex w-full gap-5">
                <div className="w-2/3  shadow rounded-lg">
              
                   <div className="flex ">
                     <div >
                      <img 
                      src="https://medias.pourlascience.fr/api/v1/images/view/618bdaaad286c24de4078466/wide_1000-webp/image.jpg" 
                      className="w-50 h-50"
                      alt="" />
                     </div>
                       <div className="flex flex-col gap-2 mt-5 ml-5">
                         <div className="text-2xl font-semibold">Paracitamol 500mg</div>
                         <div className="text-lg">LIFESCAN MEDICAL DEVICES INDIA PVT LTD</div>
                         <div className="text-lg">Price: 500</div>

                         <div className="flex h-10 w-20">
                           <button className="font-semibold text-4xl">-</button>
                             Quantity:5
                            <button>+</button>
                         </div>
                       </div>
                   </div>
                </div>
                <div className="w-1/3 shadow rounded-lg">
                  <div className="flex gap-15 mt-5 ml-20 ">
                    <div className="text-semibold text-lg">Price (9 items)</div>
                    <div>6000</div>
                  </div>

                  <div className="flex gap-15 mt-5 ml-20">
                    <div className="text-semibold text-lg">Discounts:</div>
                    <div className="ml-6">-2000</div>
                  </div>

                  <div className="flex gap-15 mt-5 ml-20">
                    <div className="text-semibold text-lg">Coupon for you:</div>
                    <div className="">600</div>
                  </div>

                  <div className="flex gap-15 mt-5 ml-20 ">
                    <div className="text-semibold text-lg">Total Price</div>
                    <div className="ml-8">3400</div>
                  </div>

                  <hr className="mt-4" />

                  
                  <div className="flex gap-5 mt-5 ml-20 mb-5">
                    <div className="text-semibold text-lg text-green-500">You will save upto 6200</div>
                    <div className="-my-2">
                        <button className="h-10 w-30 bg-orange-500 rounded-lg text-white shadow text-lg ">
                            Proceed
                        </button>
                    </div>
                  </div>

                  
                     
                </div>
             </div>
            </main>
         </div>
    )
}
export default Cart