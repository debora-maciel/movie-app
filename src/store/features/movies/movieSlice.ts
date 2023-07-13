'use client';


import { RootState } from '@/store';
import { createSlice } from '@reduxjs/toolkit';


export interface MovieState {
    value: number,
    movieSelected: any
}

const initialState: MovieState = {
    value: 10,
    movieSelected: null
}

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovieSelected: (state, { payload }) => { state.movieSelected = payload },
        setValue: (state, { payload }) => { state.value = payload }
    }
})

export const selectMovieSlected = (state: RootState) => state.movie.movieSelected;
export const selectMovies = (state: RootState) => state.movie.value;

export const { setValue, setMovieSelected } = movieSlice.actions;

export default movieSlice.reducer;