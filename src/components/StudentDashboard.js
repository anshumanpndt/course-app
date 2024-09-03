// src/components/StudentDashboard.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { markCompleted } from '../actions/courseActions';
import './StudentDashboard.css'; // Optional: For styling

const StudentDashboard = () => {
  const dispatch = useDispatch();
  const enrolledCourses = useSelector((state) => state.courses.enrolledCourses);

  const handleMarkCompleted = (id) => {
    dispatch(markCompleted(id));
  };

  return (
    <div className="dashboard-container">
      <h2>My Enrolled Courses</h2>
      {enrolledCourses.length === 0 ? (
        <p>You have not enrolled in any courses yet.</p>
      ) : (
        <div className="enrolled-courses">
          {enrolledCourses.map((course) => (
            <div key={course.id} className="enrolled-course-item">
              <h3>{course.name}</h3>
              <p><strong>Instructor:</strong> {course.instructor}</p>
              <p><strong>Due Date:</strong> {course.dueDate || 'N/A'}</p>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: course.completed ? '100%' : '50%' }}
                ></div>
              </div>
              <p><strong>Status:</strong> {course.completed ? 'Completed' : 'In Progress'}</p>
              {!course.completed && (
                <button onClick={() => handleMarkCompleted(course.id)} className="complete-button">
                  Mark as Completed
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;
