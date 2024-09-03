// src/components/CourseDetails.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchCourseDetails } from '../actions/courseActions';
import './CourseDetails.css'; // Optional: For styling

const CourseDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const course = useSelector((state) => state.courses.selectedCourse);
  const likes = useSelector((state) => state.courses.likes[id] || 0);
  const [showSyllabus, setShowSyllabus] = useState(false);

  useEffect(() => {
    dispatch(fetchCourseDetails(id));
  }, [dispatch, id]);

  if (!course) {
    return <div>Loading...</div>;
  }

  const toggleSyllabus = () => {
    setShowSyllabus(!showSyllabus);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="course-details-container">
      <button onClick={handleBack} className="back-button">← Back</button>
      <h2>{course.name}</h2>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p><strong>Description:</strong> {course.description}</p>
      <p><strong>Enrollment Status:</strong> {course.status}</p>
      <p><strong>Duration:</strong> {course.duration}</p>
      <p><strong>Schedule:</strong> {course.schedule}</p>
      <p><strong>Location:</strong> {course.location}</p>
      <p><strong>Pre-requisites:</strong> {course.prerequisites}</p>
      <div className="syllabus-section">
        <button onClick={toggleSyllabus} className="syllabus-button">
          {showSyllabus ? 'Hide Syllabus' : 'Show Syllabus'}
        </button>
        {showSyllabus && <p className="syllabus-content">{course.syllabus}</p>}
      </div>
      <p><strong>Likes:</strong> {likes}</p>
    </div>
  );
};

export default CourseDetails;
