import doctor from '../assets/doctor-image.jpg';
import Navbar from './Navbar';
import { useParams } from 'react-router';
import {doctorlist} from './doctor';

const Verify = () => {
    const {id} = useParams();
    console.log(doctorlist[id-1]);
    const {name,desc} = doctorlist[id-1];

    return (
        <>
        <Navbar />
        <div class="content">
            <div class="left-side">
                <img src={doctor} />
                <div class="name">{name}</div>
                    <div class="desc1">{desc}
                    </div>
            </div>
            <div class="right-side">
                <div class="otp">
                    <div class="mobileno">Enter the Code to Verify OTP</div>
                    <input type="text" placeholder="Enter the OTP" />
                    <a href="/last">Confirm</a>
                </div>
            </div>
        </div>
        </>
        

    )
}

export default Verify;