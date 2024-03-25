import doctor1 from '../assets/doctor-image.jpg';
import Navbar from './Navbar';
import { useParams ,useLocation,useNavigate} from 'react-router';

const Book = () => {
    const {id} = useParams();
    const {state} = useLocation();
    const navigate = useNavigate();
    const {doctor,time} =state;
    console.log(time)

    return (
        <>
        <Navbar />
        <div class="content">
            <div class="left-side">
                <img src={doctor1} />
                <div class="name">Dr . {doctor.name}</div>
                <div class="desc1">Specialist : {doctor.specialist}<br/>
                Description : {doctor.description}
                </div>
        </div>
            <div class="right-side">
                <div class="otp">
                    <div class="mobileno">Confirm the booking status</div>
                    <a onClick={() =>{ navigate(`/last/${doctor._id}`,{state:{doctor,time}})}}>Confirm</a>
                </div>
            </div>
        </div>
        </>
        

    )
}

export default Book;