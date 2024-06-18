import { FaFacebook, FaGoogle } from "react-icons/fa"
import { IoCloseOutline } from "react-icons/io5"

const PopUp = ({showPopup,setshowPopup}) => {
  return (
    <>
      {showPopup &&(
        <div className="">
            <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm ">
                <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -traslate-y-1/2
                p-4 shadow-md bg-white rounded-md duration-200 w-[300px] ">
                    {/* header */}
                    <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-dark">Login</h1>
                <div className="">
                    <IoCloseOutline className="text-2xl  cursor-pointer" onClick={()=>setshowPopup(false)}/></div>
                </div>
                {/* Login form  */}
                <div className="mt-4">
                    <input type="email" placeholder="Enter Email" name="" id="" className="w-full rounded-md border border-gray-400 dark:border-gray-500 px-2 py-1 mb-4"/>
                    <input type="Password" placeholder="Enter Password" name="" id="" className="w-full rounded-md border border-gray-400 dark:border-gray-500 px-2 py-1 mb-4"/>
                    <button className="w-full bg-primary text-white p-2 rounded-md"
                    onClick={()=>setshowPopup(false)}>Login Now</button>
                </div>
                <div className="mt-4">
                    <p className="text-center">or Login with</p>
                <div className=" flex justify-center gap-2 mt-2">
                <FaFacebook className="text-3xl hover:text-blue-500 duration-200"/>
                <FaGoogle className="text-3xl hover:text-primary duration-200"/></div>
                </div>
                </div>
            </div>
        </div>
      )}
    </>
  )
}

export default PopUp
