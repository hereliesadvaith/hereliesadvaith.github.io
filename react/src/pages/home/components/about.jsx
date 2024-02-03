import Constants from "../shared/constants"

export default function About() {
  return (
    <div className="mt-5 flex flex-col items-center">
      {Constants.ABOUT_DESC}
      {Constants.ABOUT_TOOLS}
    </div>
  )
}
