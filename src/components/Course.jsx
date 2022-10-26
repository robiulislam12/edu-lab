import React from "react";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const {
    courseName,
    img,
    id,
    courseAuthorName,
    CourseLevel,
    totalStudents,
    description,
  } = course;
  return (
    <div className="bg-white shadow rounded p-3">
      <img src={img} alt={courseName} className="w-full rounded" />
      <Link to={`/courses/${id}`}>
        <h2 className="text-lg font-medium text-black my-2">{courseName}</h2>
      </Link>
      <h4 className="text-base font-bold mt-[-5px]">
        By{" "}
        <span className="text-gray-500 underline cursor-pointer">
          {courseAuthorName}
        </span>
      </h4>
      {/* Features */}
      <div className="flex justify-between items-center my-4">
        <span className="bg-yellow-600 py-0 px-2 rounded text-white">
          {CourseLevel}
        </span>
        <p className="text-gray-500">
          Students:
          <span className="text-black font-semibold">{totalStudents}</span>
        </p>
      </div>
      {/* description */}
      <hr />
      <p className="text-gray-500 my-4">
        {description.slice(0, 170) + "(...)"}
      </p>
      {/* Details button */}
      <Link to={`/courses/${id}`}>
        <button className="bg-teal-500 hover:bg-teal-600 py-3 px-16 rounded text-white font-semibold">
          Details
        </button>
      </Link>
    </div>
  );
};

export default Course;
