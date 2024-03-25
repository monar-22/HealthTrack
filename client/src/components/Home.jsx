import { useState } from "react";
import Navbar from "./Navbar";

const Home = () => {
    const [value,setValue] =useState("");
    const [doctor,setDoctor] =useState("");

    return (
        <>
        <Navbar />
        <div className="container-home">
        <div className="title1">Your home for health</div>
        <div className="find">Find and Book</div>
        {/* <input type="text" placeholder="Location" className="location"/> */}
{/* 
        <select value={value} onChange={(e) => setValue(e.target.value)} placeholder="Location" className="location">
         <option value="coimbatore">coimbatore</option>
         <option value="chennai">chennai</option>
         <option value="salem">salem</option>
         <option value="madurai">madurai</option>
         <option value="trichy">trichy</option>
         <option value="Bangalore">salem</option>
       </select>

       <select value={doctor} onChange={(e) => setDoctor(e.target.value)} placeholder="Location" className="doctor">
         <option value="coimbatore">Dentist</option>
         <option value="chennai">Gynecologist</option>
         <option value="salem">Dermatologist</option>
         <option value="madurai">Ayurveda</option>
         <option value="trichy">Homoeopath</option>
         <option value="Bangalore">Ear-nose-throat Specialist</option>
       </select>

        <a href="/doctorlist" className="btn-submit">Submit</a> */}
        <div className="search-image"></div>
            
        </div>
        
        </>
    )
};

export default Home;