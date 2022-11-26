import './App.css';
import Index from './Components/Index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';


function App() {
    return (
      <Router>
        <Index/>
        <Routes>
          <Route path  = "/" element={<HomePage/>} />
        </Routes>
        </Router>
    );
}

export default App;
