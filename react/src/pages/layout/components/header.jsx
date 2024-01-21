import { Link, useLocation } from "react-router-dom"

export default function Header() {

    const menu = [
      {
        id: 1,
        name: "HOME",
        href: "/"
      },
      {
        id:2,
        name: "PORTFOLIO",
        href: "#"
      },
      {
        id: 3,
        name: "BLOG",
        href: "#"
      },
      {
        id: 4,
        name: "CONTACT",
        href: "#"
      },
    ]

    return (
      <div className="flex items-center fixed w-screen justify-between border-b-[1px] bg-white">
        <div className="w-[90px] h-[90px] bg-black">
          <img src="/vite.svg" className="p-[20px] h-[100%]"/>
        </div> 
        <div className="hidden md:flex gap-14">
          {menu.map(
            (item) => (
              <Link to={item.href} key={item.id}>
              <div className="cursor-pointer hover:underline font-medium flex items-center">
                <div className={`h-[5px] w-[5px] bg-red-600 rounded-full mr-[5px] ${useLocation().pathname === item.href ? '' : 'hidden'}`}/>
                <h2>{item.name}</h2>
              </div>
              </Link>
            )
          )}
        </div>
        <div className="w-[90px] h-[90px] bg-red-600 flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 text-white">
            <path strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
        </div>
      </div>
    )
  }
