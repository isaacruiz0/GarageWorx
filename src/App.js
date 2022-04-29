import './App.css';
// I M P O R T E D   C O M P O N E N T S
import Home from './Main_Components/Home/Home.jsx'
import Navbar from './Minor_Components/Navbar/Navbar.jsx'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
