// src/components/CourseList.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCourses, listenToLikes } from '../actions/courseActions';
import './CourseList.css'; // Optional: For styling

const CourseList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.allCourses);
  const likes = useSelector((state) => state.courses.likes);

  useEffect(() => {
    dispatch(fetchCourses());
    dispatch(listenToLikes());
  }, [dispatch]);

  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="course-list-container">
      <h2>Available Courses</h2>
      <input
        type="text"
        placeholder="Search by course name or instructor"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <div className="course-list">
        {filteredCourses.map((course) => (
          <Link to={`/course/${course.id}`} key={course.id} className="course-link">
            <div className="course-item">
              <h3>{course.name}</h3>
              <p><strong>Instructor:</strong> {course.instructor}</p>
              <p><strong>Likes:</strong> {likes[course.id] || 0}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
