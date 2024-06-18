import { FaArrowRight } from "react-icons/fa"
const PrimaryButton = () => {
  return (
    <>
     <div className="flex items-center group">
        <button className="bg-primary h-[40px] text-white px-3 py-2">Choose your meal plan</button>
        <FaArrowRight className="inline-block group-hover:!translate-x-2 duration-75 p-2 text-base h-[40px] bg-primaryDark text-white w-[40px]"/>
        </div> 
    </>
  )
}

export default PrimaryButton
