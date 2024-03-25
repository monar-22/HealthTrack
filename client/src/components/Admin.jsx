import { useEffect, useState } from "react"
import { useNavigate } from "react-router";

const Admin = () =>{
    const [doctorlist,setDoctorlist] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        fetchData();
    },[])

    async function fetchData(){
        await fetch('http://localhost:4000/get').then((data) => data.json())
        .then((data) => setDoctorlist(data.result));
    }

    async function handleDelete(e,doctor){
        e.preventDefault();
         await fetch(`http://localhost:4000/delete/${doctor._id}`,{
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })
        window.location.reload();
    }

    return (
        <div className="admin-page">
            <div className="flex-row">
            <div className="button" onClick={() => navigate('/create')}>Add Doctor + </div>
            <a href="/" className='btn'>
				Logout
			</a>
            </div>
           
            <table>
                <tr>
                    <th>Name</th>
                    <th>specialist</th>
                    <th>description</th>
                    <th>mobile</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
                {
                    doctorlist?
                    <>
                    {doctorlist.map( (doctor) => {
                        return (
                            <tr>
                                <td>{doctor.name}</td>
                                <td>{doctor.specialist}</td>
                                <td>{doctor.description}</td>
                                <td>{doctor.mobile}</td>
                                <td onClick={(e) => navigate(`/update/${doctor._id}`,{state : doctor})} className="update-btn">update</td>
                                <td onClick={(e) => handleDelete(e,doctor)} className="delete-btn">delete</td>
                            </tr>
                        )
                        })
                    }
                    </>:
                    <></>
                }
                
            </table>
        </div>
    )
};

export default Admin;