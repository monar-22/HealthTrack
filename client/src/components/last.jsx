
import Navbar from './Navbar';
import tick from '../assets/check-mark-verified.gif';
import { useParams ,useLocation,useNavigate} from 'react-router';
import { useEffect, useState } from 'react';

const Last = () => {
    const {state} = useLocation();
    const {doctor,time} =state;
    const [user,setUser] = useState();

    useEffect(()=>{
        setUser(JSON.parse(localStorage.getItem('user')));
        {
            time?(localStorage.setItem('appointment',JSON.stringify({appointment:time,name:doctor.name,specialist:doctor.specialist}))):
            <></>
        }
    },[user])

    return (
        <>
        <Navbar />
        <img src={tick} className='tick' />
        <div class="booked-success">
            {
                user?
                <>
                <div>Name : {user.name}</div>
                <div>Email : {user.email}</div>
                </>
                
                :<></>

        }        Your Appointment Booked Successfully on {time}
        </div>
        </>
        

    )
}

export default Last;