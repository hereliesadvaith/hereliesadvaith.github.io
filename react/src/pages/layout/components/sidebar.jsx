import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5"

export default function  Sidebar() {
  return (
    <div className="hidden md:flex w-[90px] h-screen border-r-[1px] fixed flex-col justify-around items-center">
      <h2 className="-rotate-90">HOMEPAGE</h2> 
      <div className="flex flex-col gap-7 mb-10 text-[20px]">
        <a href="https://www.github.com/hereliesadvaith"><IoLogoGithub className="cursor-pointer hover:scale-110 transition-all ease-in-out"/></a>
        <a href="https://www.twitter.com/hereliesadvaith"><IoLogoTwitter className="cursor-pointer hover:scale-110 transition-all ease-in-out"/></a>
        <a href="https://www.linkedin.com/in/hereliesadvaith"><IoLogoLinkedin className="cursor-pointer hover:scale-110 transition-all ease-in-out"/></a>
      </div>
    </div>
  )
}
