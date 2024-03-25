import { useState ,useEffect } from "react";
import Navbar from "./Navbar"
import doctor from '../assets/doctor-image.jpg';
import { useNavigate } from "react-router";

const Location = () =>{
    const [search,setSearch] = useState("");
    const [doctorlist,setDoctorlist] = useState("");
    const [filterdoctor,setFilterdoctor] = useState("");
    const navigate = useNavigate();
    useEffect(()=>{
        fetchData();
    },[])

    async function fetchData(){
        await fetch('http://localhost:4000/get').then((data) => data.json())
        .then((data) => setDoctorlist(data.result));
    }

    function handleSubmit(e){
        e.preventDefault();
        const s = search.toLowerCase();

        const f = doctorlist.filter((el) => {
            // const arr = el.specialist.split(" ");
            // for(let i in arr){
            //     if(i.toLowerCase() === s){
            //         console.log(true)
            //         return true;
            //     }
            // }
            if(el.specialist.toLowerCase() === s) return true;
            return false;
        });
        console.log(f);
        setFilterdoctor(f);
    }

    return (
        <div>
            <Navbar />
            <div className="body-search">
                <div>
                    <form action="" onSubmit={handleSubmit}>
                    <span className="name-search">Search</span><input type="text" placeholder="Enter the Specialist" className="search-input" onChange={(e) => setSearch(e.target.value)} />
                    <input type="submit" value="search" />
                    </form>

                </div>
                <div className="search-content">
                    {
                        filterdoctor?
                        <>{
                            filterdoctor.map((el) => {
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
                        }</>:<></>
                    }
                        
                </div>
            </div>
        </div>
    )
}
export default Location;