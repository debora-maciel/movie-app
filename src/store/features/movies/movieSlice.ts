'use client';


import { RootState } from '@/store';
import { createSlice } from '@reduxjs/toolkit';


export interface MovieState {
    value: number
}

const initialState: MovieState = {
    value: 10
}

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setValue: (state, { payload }) => { state.value = payload }
    }
})


export const selectMovies = (state: RootState) => state.movie.value;
export const { setValue } = movieSlice.actions;

export default movieSlice.reducer;