import Navbar from "./Navbar"
import { useState,useEffect } from "react";
import doctor from '../assets/doctor-image.jpg';
import { useNavigate } from "react-router";

const DoctorList = () => {
    const [doctorlist,setDoctorlist] = useState("");
    const navigate = useNavigate();
    useEffect(()=>{
        fetchData();
    },[])

    async function fetchData(){
        await fetch('http://localhost:4000/get').then((data) => data.json())
        .then((data) => setDoctorlist(data.result));
    }

    return (
        <div>
            <Navbar />
           {
            doctorlist?<>
             {
                doctorlist.map((el) => {
                    return (
                    <div class="doctor-section">
                    <img src={doctor} alt="Doctor Image" />
                    <div class="details">
                    <div class="name"> Dr . {el.name}</div>
                        <div class="desc">Specialist : {el.specialist}<br/>
                        Description : {el.description}
                        </div>
                    </div>
                    <div class="book">
                        <div class="time">Available Today</div>
                        <div class="Booking"><a onClick={() => navigate(`/slot/${el._id}`,{state:el})} >Check Availablity</a></div>
                        
                    </div>
                </div>
                    )
                })
            }
            </>:
            <></>
           }
        </div>
    )
}

export default DoctorList;