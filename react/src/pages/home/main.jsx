import Introduction from "./components/introduction"
import About from "./components/about"
import ProgressBar from "./components/progressBar"
import ProfilePic from "./components/profilePic"

export default function Home() {
    return (
        <div className="md:ml-[90px] px-5 grid gird-cols-1 md:grid-cols-3">
            <div className="col-span-2 mt-[45px] md:mt-[90px]">
                <Introduction/>
                <About/>
            </div>
            <div className="hidden md:block">
                <ProgressBar/>
                <ProfilePic/>
            </div>
        </div>
    )
}
