import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../context/AuthProvider';

const CheckOut = () => {
      // Initial course
  const [course, setCourse] = useState({});

  // User details
  const {user} = useContext(AuthContext);

  // Navigate
  const navigate = useNavigate();

  // get params
  const { id } = useParams();

 

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://server-xi-six.vercel.app/courses/${id}`);
      const data = await res.json();
      setCourse(data);
    }
    fetchData();
  }, [id]);

  // Button onClick and return home page
  const handleCheckOut = () =>{
    toast.success('Yeeh! Thanks for believe us!!')
    navigate('/courses');
  }

  return (
    <div className='w-1/2 mx-auto'>
        <div className="course_details border rounded p-4 bg-white mt-4" >
            <h2 className="text-4xl font-semibold ">Your Course Details</h2>
            <h2 className="text-2xl font-regular ">Course Name: {course.courseName}</h2>
            <p className="text-base font-regular ">User Name: {user?.displayName}</p>
            <p className="text-base font-regular ">User Email: {user?.email}</p>
            <button onClick={handleCheckOut} className="bg-green-500 font-bold py-3 px-8 rounded mt-4 text-white">Check Out</button>
        </div>
    </div>
  )
}

export default CheckOut