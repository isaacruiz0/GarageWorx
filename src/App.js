import './App.css';
// M A I N   C O M P O N E N T S
import Home from './Main_Components/Home/Home.jsx'
import FAQ from './Main_Components/FAQ/FAQ.jsx'
import Quote from './Main_Components/Quote/Quote.jsx'
import Coatings from './Main_Components/Coatings/Coatings.jsx'

// M I N O R   C O M P O N E N T S 
import Navbar from './Minor_Components/Navbar/Navbar.jsx'
import Contact from './Minor_Components/Contact/Contact.jsx'

// R O U T E R   
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/FAQ" element = {<FAQ />}/>
          <Route path='/Quote' element = {<Quote />}/>
          <Route path='/Coatings' element = {<Coatings />}/>
        </Routes>
        <Contact />
      </Router>
      
    </div>
  );
}

export default App;
