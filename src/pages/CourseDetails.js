import React, { createRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PDF from 'react-to-pdf';

const CourseDetails = () => {
  // Initial course
  const [course, setCourse] = useState({});

  // get params
  const { id } = useParams();

  // Pdf reference
  const ref = createRef();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://server-xi-six.vercel.app/courses/${id}`);
      const data = await res.json();
      setCourse(data);
    }
    fetchData();
  }, [id]);

  const {
    courseName,
    img,
    courseAuthorName,
    courseLength,
    description,
    requirement,
    totalStudents,
    rating,
    whatWillLearn,
  } = course;



  return (
    <div className="container mx-auto py-8" ref={ref} >
      <div className="w-3/4 bg-white shadow rounded p-4 mx-auto">
      <div className="my-6 flex justify-between items-center">
          <h2 className="text-4xl text-black font-semibold">
            {id}. {courseName} <small className="text-base text-white bg-pink-500 py-0 px-3 rounded"> {courseAuthorName}</small>
          </h2>

          
          <PDF targetRef={ref} filename="code-example.pdf" className="text-center">
          {({ toPdf }) => <button onClick={toPdf} className="bg-green-600 text-white py-2 px-4 rounded">Download PDF</button>}
          </PDF> 
        
        </div>
        <img src={img} alt={courseName} className="rounded w-full" />
        <div className="course_details flex justify-between border rounded py-3 px-4 my-4">
          <span>Total Students: {totalStudents}</span>
          <span>Duration: {courseLength}</span>
          <span>Ratings: {rating} out of 5</span>
        </div>
        <div className="border rounded py-3 px-4 mb-3">
          <h3 className="text-lg font-semibold text-white bg-teal-600 py-0 px-3 rounded w-32 text-center">Features</h3>
          <ol>
            <li>{whatWillLearn?.first}</li>
            <li>{whatWillLearn?.second}</li>
            <li>{whatWillLearn?.third}</li>
            <li>{whatWillLearn?.fouth}</li>
            <li>{whatWillLearn?.five}</li>
          </ol>
        </div>
        <div className="description">
          <h3 className="text-2xl text-black mb-4">
            Pre-Requirements: <span className="underline">{requirement}</span>
          </h3>
          <p className="text-base text-black">
            {description &&
              description.split("<br/>").map((pr, index) => (
                <>
                  <p key={index}>{pr}</p>
                </>
              ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
