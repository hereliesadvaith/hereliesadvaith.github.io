import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram, IoLogoTwitter } from "react-icons/io5"

export default function  Sidebar() {
  return (
    <div className="w-[90px] h-screen border-r-[1px] fixed flex flex-col justify-around items-center">
      <h2 className="-rotate-90">HOMEPAGE</h2> 
      <div className="flex flex-col gap-7 mb-10 text-[20px]">
        <IoLogoGithub className="cursor-pointer hover:scale-110 transition-all ease-in-out"/>
        <IoLogoTwitter className="cursor-pointer hover:scale-110 transition-all ease-in-out"/>
        <IoLogoLinkedin className="cursor-pointer hover:scale-110 transition-all ease-in-out"/>
        <IoLogoInstagram className="cursor-pointer hover:scale-110 transition-all ease-in-out"/>
      </div>
    </div>
  )
}
