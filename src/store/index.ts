'use client';

import movieReducer from './features/movies/movieSlice';
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        movie: movieReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;