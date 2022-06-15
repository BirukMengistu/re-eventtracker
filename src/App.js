
import './App.css';
import Navbar from './components/navbar/navbar';
import {  Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import { Events } from './pages/Events';
import  RegisterUser  from './pages/RegisterUser';
import EventDetails from './components/events/EventDetails';
import AddEvent from './pages/AddEvent';
import Login from './pages/Login';

function App() {
  return (
    <>
     <Navbar/> 
     
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/eventdetail/:id" element={<EventDetails />} />
        <Route path="/addevent" element={<AddEvent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterUser />} />
        
      </Routes>
    </>
  );
}

export default App;
