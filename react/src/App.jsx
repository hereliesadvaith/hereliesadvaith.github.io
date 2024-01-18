import React from "react"
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { useState } from "react";
import AboutMe from "./components/AboutMe"
import Portfolio from "./components/Portfolio";
import styles from "./components/style";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const time = new Date().getFullYear();
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className=' bg-white text-black lg:px-60 dark:bg-gray-800 dark:text-white'>
        <section className='min-h-screen'>
          <nav className='px-4 py-8 mb-auto flex justify-between'>
            <h1 className=" font-marker font-extralight text-xl animate-pulse">here..Lies..Advaith</h1>
            <ul className=' flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className=' cursor-pointer text-xl' />
              </li>
              <li>
                <a className='bg-gradient-to-bl  dark:from-teal-200 dark:to-teal-900 from-black to-teal-400 text-white px-2 py-2 rounded-md ml-2' href='https://drive.google.com/uc?id=1EhRVvMlWIyHfcGDaf_W53n7Qb745aIK3&export=download'>Resume</a>
              </li>
            </ul>
          </nav>
          <div className=' text-center p-10 py-10'>
            <h3 className=" text-2xl py-2 md:text-3xl">Hi  there,  I'm</h3>
            <h2 className=' text-6xl py-2 text-transparent font-light bg-clip-text bg-gradient-to-br bg-gradient-to-{flow}  dark:from-teal-200 dark:to-teal-900 from-black to-teal-400 md:text-10xl font-marker'>Advaith</h2>
            <h3 className=' text-2xl py-2 md:text-3xl'>A <span className=" underline">pro</span>grammer..</h3>
            <p className="text-md py-5 leading-8 text-gray-800  md:text-xl max-w-xl mx-auto dark:text-white">
              Freelancer providing services for your web devolepment needs.
              Join me down below and let's get cracking !
            </p>
          </div>
          <div className="text-4xl flex justify-center gap-10 dark:text-gray-300 text-gray-600">
            <a href="https://twitter.com/hereliesadvaith"><AiFillTwitterCircle className=" cursor-pointer" /></a>
            <a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz _aak1 _a6hd" href="https://www.instagram.com/b_g_z_z/" role="link" tabindex="0"> <AiFillInstagram className=" cursor-pointer" /></a>
            <a href="https://github.com/hereliesadvaith"><AiFillGithub className=" cursor-pointer" /></a>
          </div>
          <div className="mt-10 mb-10 mx-auto rounded-full w-80 h-80 bg-gradient-to-b dark:from-teal-200 dark:to-teal-900 from-black to-teal-400">
            <img className="hover:animate-bounce rounded-full p-4 md:h-100 md:100" src="https://pbs.twimg.com/profile_images/1601129706761469958/-tOSES7T_400x400.jpg" alt="avatar" />
          </div>
        </section>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <AboutMe />
            <Portfolio />
          </div>
        </div>
        <footer className={`${styles.paddingX} ${styles.flexCenter} text-gray-500 mt-11`}>
          <p>Copyright {time}</p>
        </footer>
      </div>
    </div>)
}

export default App;

