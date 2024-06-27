import { configureStore } from "@reduxjs/toolkit";
import enrolledCourseSlice from './enrolledCourse/enrolledCourse'


export const makeStore=configureStore({
    reducer:{
        courses:enrolledCourseSlice,
    }
});

