import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import Testimonials from "./components/Testimonials/Testimonials";
import Infant from "./components/Programs/Infant/Infant";
import Toddler from "./components/Programs/Toddler/Toddler";
import Preschool from "./components/Programs/Preschool/Preschool";
import Kindergarten from "./components/Programs/Kindergarten/Kindergarten";
import Newsletters from "./components/ParentInformation/Newsletters/Newsletters";
import Calendar from "./components/ParentInformation/Calendar/Calendar";
import SchoolForms from "./components/ParentInformation/SchoolForms/SchoolForms";
import ReadingMaterial from "./components/ParentInformation/ReadingMaterial/ReadingMaterial";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <div className="App">
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossorigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;400;700&family=Roboto:ital,wght@1,100&display=swap"
          rel="stylesheet"
        />
        <Router>
          <>
            <Navbar />

            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/Testimonials" element={<Testimonials />} />
              <Route path="/Infant" element={<Infant />} />
              <Route path="/Toddler" element={<Toddler />} />
              <Route path="/Preschool" element={<Preschool />} />
              <Route path="/Kindergarten" element={<Kindergarten />} />
              <Route path="/Newsletters" element={<Newsletters />} />
              <Route path="/Calendar" element={<Calendar />} />
              <Route path="/SchoolForms" element={<SchoolForms />} />
              <Route path="ReadingMaterial" element={<ReadingMaterial />} />
              <Route path="Contact" element={<Contact />} />
            </Routes>
          </>
        </Router>
      </div>
    </>
  );
}

export default App;
