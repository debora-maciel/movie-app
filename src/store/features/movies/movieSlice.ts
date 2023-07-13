'use client';

import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/store';

export interface MovieState {
    value: number,
    loading: false,
    filter: string,
}

const initialState: MovieState = {
    value: 10,
    loading: false,
    filter: 'popular'
}

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setLoading: (state, { payload }) => { state.loading = payload },
        setValue: (state, { payload }) => { state.value = payload },
        setListFilter: (state, { payload }) => { state.filter = payload },
    }
})

export const selectLoading = (state: RootState) => state.movie.loading;
export const selectFilter = (state: RootState) => state.movie.filter;
export const selectMovies = (state: RootState) => state.movie.value;

export const { setValue, setListFilter, setLoading } = movieSlice.actions;

export default movieSlice.reducer;