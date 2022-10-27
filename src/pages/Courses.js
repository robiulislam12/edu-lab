import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Course from '../components/Course';

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div className='container mx-auto py-8 '>
      <div className="courses_container">
        <div className="left_side bg-white shadow p-4 rounded h-screen" >
          {
            courses.map(course => 
                <Link key={course.id} to={`/courses/${course.id}`}>
                  <h3 className='text-black font-semibold hover:text-teal-700  hover:underline my-2'>{course.id}. {course.courseName}</h3>
                </Link>
            )
          }
        </div>
        <div className="right_side grid lg:grid-cols-3 gap-4 sm:grid-cols-1">
          {
            courses.map(course => <Course key={course.id} course={course}></Course> )
          }
        </div>
      </div>
    </div>
  )
}

export default Courses