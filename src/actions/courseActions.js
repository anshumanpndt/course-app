// src/actions/courseActions.js
import axios from 'axios';
import database from '../firebase';

// Action Types
export const SET_COURSES = 'SET_COURSES';
export const SET_SELECTED_COURSE = 'SET_SELECTED_COURSE';
export const ENROLL_COURSE = 'ENROLL_COURSE';
export const MARK_COMPLETED = 'MARK_COMPLETED';
export const UPDATE_LIKES = 'UPDATE_LIKES';

// Action Creators
export const setCourses = (courses) => ({
  type: SET_COURSES,
  payload: courses,
});

export const setSelectedCourse = (course) => ({
  type: SET_SELECTED_COURSE,
  payload: course,
});

export const enrollCourse = (course) => ({
  type: ENROLL_COURSE,
  payload: course,
});

export const markCompleted = (courseId) => ({
  type: MARK_COMPLETED,
  payload: courseId,
});

export const updateLikes = (courseId, likes) => ({
  type: UPDATE_LIKES,
  payload: { courseId, likes },
});

// Thunk Actions for Async Operations

// Fetch all courses from Firebase
export const fetchCourses = () => (dispatch) => {
  const coursesRef = database.ref('courses');
  coursesRef.on('value', (snapshot) => {
    const data = snapshot.val();
    const courses = data
      ? Object.keys(data).map((key) => ({ id: key, ...data[key] }))
      : [];
    dispatch(setCourses(courses));
  });
};

// Fetch single course details
export const fetchCourseDetails = (id) => (dispatch) => {
  const courseRef = database.ref(`courses/${id}`);
  courseRef.once('value', (snapshot) => {
    const data = snapshot.val();
    if (data) {
      dispatch(setSelectedCourse({ id, ...data }));
    }
  });
};

// Real-time Likes Listener
export const listenToLikes = () => (dispatch) => {
  const likesRef = database.ref('likes');
  likesRef.on('value', (snapshot) => {
    const data = snapshot.val();
    if (data) {
      Object.keys(data).forEach((courseId) => {
        dispatch(updateLikes(courseId, data[courseId]));
      });
    }
  });
};
