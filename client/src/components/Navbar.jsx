import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router';

const Navbar = () => {
	const navigate = useNavigate();
	function handleLogout(e){
		e.preventDefault();
		localStorage.removeItem('user');
		navigate('/');
	}
return (
	<div className='navbar'>
		<div className='title'>Health Track</div>
		<div className='space-between'>
			<div className="container1">
				<a href="/home" className='element'>Home</a>
				<a href="/appointment" className='element' >My Appointment</a>
				<a href="/doctorlist" className='element'>Doctor List</a>
				<a href="/search" className='element' >Search</a>
			</div>
			<a onClick={handleLogout} className='btn'>
				Logout
			</a>
		</div>
		
	</div>

);
};

export default Navbar;

