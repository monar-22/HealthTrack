import './App.css'
import Login from './components/Login'
import Signup from './components/Signup';
import Home from './components/Home'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import DoctorList from './components/DoctorList'
import Appointment from './components/Appointment'
import Location from './components/Location'
import Admin from './components/Admin'
import Slot from './components/Slot'
import Book from './components/Book'
import Verify from './components/verify'
import Last from './components/last'
import CreateDoctor from './components/createDoctor'
import UpdateDoctor  from './components/UpdateDoctor';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<Admin />} />
          <Route path = "/home" element={<Home />} />
          <Route path = "/doctorlist" element={<DoctorList />} />
          <Route path = "/appointment" element={<Appointment />} />
          <Route path = "/search" element={<Location />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/create" element={<CreateDoctor />} />
          <Route path="/update/:id" element={<UpdateDoctor />} />
          <Route path = "/book/:id" element={<Book />} />
          <Route path = "/verify/:id" element={<Verify />} />
          <Route path = "/slot/:id" element={<Slot />} />
          <Route path='/last/:id' element={<Last />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
