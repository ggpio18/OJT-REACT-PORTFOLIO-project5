import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/pages/home/Home"
import Project from "./components/pages/project/Project"
import Contact from "./components/pages/contact/Contact"

function App() {

  return (
    <>
     <Router>
      <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/project" element={<Project/>}/>
      <Route path="/contact" element={<Contact/>}/>
      </Routes>
     </Router>
    </>
  )
}

export default App
