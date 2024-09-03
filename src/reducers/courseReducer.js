// src/reducers/courseReducer.js
import {
    SET_COURSES,
    SET_SELECTED_COURSE,
    ENROLL_COURSE,
    MARK_COMPLETED,
    UPDATE_LIKES,
  } from '../actions/courseActions';
  
  const initialState = {
    allCourses: [],
    enrolledCourses: [],
    selectedCourse: null,
    likes: {},
  };
  
  const courseReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_COURSES:
        return { ...state, allCourses: action.payload };
      case SET_SELECTED_COURSE:
        return { ...state, selectedCourse: action.payload };
      case ENROLL_COURSE:
        return {
          ...state,
          enrolledCourses: [...state.enrolledCourses, action.payload],
        };
      case MARK_COMPLETED:
        return {
          ...state,
          enrolledCourses: state.enrolledCourses.map((course) =>
            course.id === action.payload
              ? { ...course, completed: true }
              : course
          ),
        };
      case UPDATE_LIKES:
        return {
          ...state,
          likes: { ...state.likes, [action.payload.courseId]: action.payload.likes },
        };
      default:
        return state;
    }
  };
  
  export default courseReducer;
  