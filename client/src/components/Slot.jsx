import { useState } from 'react';
import doctor from '../assets/doctor-image.jpg';
import Navbar from './Navbar';
import { useLocation, useParams } from 'react-router';
import { useNavigate } from "react-router";

const Slot = () => {
    const {id} = useParams();
    const {state} = useLocation();
    const navigate = useNavigate();
    const [time,setTime] = useState("");
    

    return (
        <>
        <Navbar />
        <div class="content">
        <div class="left-side">
            <img src={doctor} />
            <div class="name">Dr . {state.name}</div>
                <div class="desc1">Specialist : {state.specialist}<br/>
                Description : {state.description}
                </div>
        </div>
        <div class="right-side">
            <div class="fee">
                Clinic Appointment ₹ 150 fee
            </div>
            <div class="slot">
                <div className='slot-book'>
                        <div className='today-name'>Today</div>
                        <div className='morning'>
                            <div className='heading'>Morning</div>
                            <div className='time' onClick={() => setTime("9:00 AM")}>9:00 AM</div>
                            <div className='time' onClick={() => setTime("10:00 AM")}>10:00 AM</div>
                            <div className='time' onClick={() => setTime("11:00 AM")}>11:00 AM</div>
                            <div className='time' onClick={() => setTime("12:00 PM")}>12:00 PM</div>
                            <div className='time' onClick={() => setTime("3:00 PM")}>3:00 PM</div>
                        </div>
                        <div className='evening'>
                            <div className='heading'>Evening</div>
                            <div className='time' onClick={() => setTime("5:00 PM")}>5:00 PM</div>
                            <div className='time' onClick={() => setTime("6:00 PM")}>6:00 PM</div>
                            <div className='time' onClick={() => setTime("7:00 PM")}>7:00 PM</div>
                            <div className='time' onClick={() => setTime("8:00 PM")}>8:00 PM</div>
                            <div className='time' onClick={() => setTime("9:00 PM")}>9:00 PM</div>
            
                        </div>
                </div>
            </div>
            <div class="btn"><a onClick={() =>{console.log(time); navigate(`/book/${state._id}`,{state:{doctor:state,time}})}}>Book</a></div>
        </div>
    </div>
        </>
        
    )
};

export default Slot;

