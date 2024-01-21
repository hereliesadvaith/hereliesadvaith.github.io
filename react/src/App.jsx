import "./App.css"
import Header from "./components/header.jsx" 
import Sidebar from "./components/sidebar.jsx"
import ProfilePic from "./components/profilePic.jsx"
import Introduction from "./components/introduction.jsx"
import About from "./components/about.jsx"
import Services from "./components/services.jsx"
import ProgressBar from "./components/progressBar.jsx"

function App() {
  return (
    <div className="w-screen">
      <Header/>
      <Sidebar/>
      <div className="ml-[90px] grid gird-cols-1 md:grid-cols-3">
        <div className="col-span-2 mt-[90px]">
          <Introduction/>
          <About/>
          <Services/>
        </div>
        <div className="hidden md:block">
          <ProgressBar/>
          <ProfilePic/>
        </div>
      </div>
    </div>
  )
}

export default App
