import Navbar from "./Navbar"
import doctor from '../assets/doctor-image.jpg';
import {doctorlist} from './doctor';
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Appointment = () =>{
    console.log(doctorlist)
    const [user,setUser] = useState();
    useEffect(()=>{
        setUser(JSON.parse(localStorage.getItem('appointment')));
    })
    return (
        <div>
            <Navbar />
            <div class="body1">
                {
                    user?
                    <>
                    <div className="appoint-body">
                        <div>Name : {user.name}</div>
                        <div>Specialist : {user.specialist}</div>
                        <div>Appointment Time : {user.appointment}</div>
                    </div>
                    </>:
                    <>No Appointment booked</>
                }
                
            </div>
        </div>
    )
}

export default Appointment;