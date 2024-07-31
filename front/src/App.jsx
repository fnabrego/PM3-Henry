import './App.css';
import Navbar from "../src/components/Navbar/Navbar";
import { Route, Routes, useLocation } from 'react-router-dom';
import RegisterForm from "./views/Register/RegisterForm";
import LoginForm from './views/Login/LoginForm';
import AppointmentsForm from './views/Appointments/AppointmentsForm';
import MyAppointments from './views/MyAppointments/MyAppointments';
import Home from './views/Home/Home';
import ErrorPages from './views/ErrorPages/ErrorPage';
import Ladding from './components/Ladding/Ladding';

function App() {
  const location = useLocation();
  const {pathname} = location;

  return (
    
    <>
    {pathname !== "/" && pathname !== "/login" && pathname !== "/register" ? <Navbar/> : null}
    {/* {pathname !== ("/")|("/login")|("/register") ? <Navbar/> :null} */}
    <Routes>
      <Route path="/" element={<Ladding/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/login" element={<LoginForm/>}/>
      <Route path="/register" element={<RegisterForm/>}/>
      <Route path="/myAppointments" element={<MyAppointments/>}/>
      <Route path='/newAppointment' element={<AppointmentsForm/>}/>
      <Route path= "*" element={<ErrorPages/>}/>
    </Routes>
    </>
  )
}

export default App;