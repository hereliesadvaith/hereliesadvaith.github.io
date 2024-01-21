import Constants from "../shared/constants"
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi"

export default function About() {
  return (
    <div className="mt-5 flex flex-col items-center">
      <h2 className="text-[36px] font-bold max-w-[700px] text-center">{Constants.ABOUT_HEADING}</h2>
      <BiSolidQuoteAltLeft className="bg-red-600 p-3 text-[44px] rounded-full mt-6 text-white"/>
      <h2 className="my-5 text-gray-400 text-[20px] max-w-[700px] text-center">{Constants.ABOUT_DESC}</h2>
      <BiSolidQuoteAltRight className="bg-red-600 p-3 text-[44px] rounded-full mt-6 text-white"/>
    </div>
  )
}
