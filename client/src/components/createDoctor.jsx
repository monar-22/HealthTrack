import { useEffect, useState } from "react"
import { useNavigate } from "react-router";

const CreateDoctor = () => {

    const [name,setName] = useState("");
    const [specialist,setSpecialist] = useState("");
    const [desc,setDesc] = useState("");
    const [mobile,setMobile] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();
        await fetch('http://localhost:4000/create',{
            method: "POST",
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            name,specialist,description:desc,mobile
            })
            }).then(res => res.json())
            .then(data => console.log(data));

            window.location.reload();
    }
    

    return (
        <div className="admin-page">
            <div className="button" onClick={()=>navigate('/admin')}>Admin Page</div>
            <form onSubmit={handleSubmit}>
                <label>Name : <input type="text" placeholder="Enter the name" value={name} onChange={(e) => setName(e.target.value)} /></label>
                <label>specialist : <input type="text" placeholder="Enter the specialist" value={specialist} onChange={(e) => setSpecialist(e.target.value)} /></label>
                <label>description : <input type="text" placeholder="Enter the description" value={desc} onChange={(e) => setDesc(e.target.value)} /></label>
                <label>mobile number : <input type="text" placeholder="Enter the mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} /></label>
                <button type="submit" className="button">Create</button>
            </form>
            
        </div>
    )
}

export default CreateDoctor;