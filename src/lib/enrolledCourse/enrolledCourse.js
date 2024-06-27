import { createSlice } from "@reduxjs/toolkit";
// import Courses from "../../../public/courselist";

const initialState ={
    enrolledCourses:[],
}

const enrolledCourseSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {
        addEnrolledCourses: (state, action) => {
           
            state.enrolledCourses.push(action.payload);
        },
        removeEnrolledCourses: (state, action) => {
            return state.filter((course) => course.id !== action.payload);
        },
    }
});

export const { addEnrolledCourses, removeEnrolledCourses } = enrolledCourseSlice.actions;
export default enrolledCourseSlice.reducer;
