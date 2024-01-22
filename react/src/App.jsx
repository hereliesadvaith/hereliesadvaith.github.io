import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./pages/layout/main"
import Home from "./pages/home/main"
import Portfolio from "./pages/portfolio/main"
import Blog from "./pages/blog/main"
import Contact from "./pages/contact/main"

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
