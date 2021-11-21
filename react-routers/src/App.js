import './App.css';
import HomePage from './core/HomePage';
import HotelPage from './core/HotelPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
    <Route exect path="/" element={<HomePage/>}/>
    <Route exact path="/hotel/:hotelName" element={<HotelPage/>}/>
     </Routes>
    </div>
    </Router>
  );
}

export default App;
