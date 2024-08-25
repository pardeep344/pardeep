
import './App.css';
import { Menuitems } from './components/navbar/Menuitems';
 
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import SignUp from "./routes/Singup";
 
import { Routes, Route} from 'react-router-dom';
 
function App() {
  return (
    <div>
    <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/signup" element={<SignUp />} />

    </Routes>
     

     
     </div>
  );
}

export default App;
