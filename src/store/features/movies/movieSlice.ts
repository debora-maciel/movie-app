'use client';

import { Movie } from '@/app/movie/models/movie.model';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/store';

export interface MovieState {
    value: number,
    loading: false,
    movieSelected: Movie
}

const initialState: MovieState = {
    value: 10,
    loading: false,
    movieSelected: {
        adult: false,
        backdrop_path: '',
        genre_ids: [],
        id: 0,
        original_language: '',
        original_title: '',
        overview: '',
        popularity: 0,
        poster_path: '',
        release_date: '',
        title: '',
        video: false,
        vote_average: 0,
        vote_count: 0
    }
}

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovieSelected: (state, { payload }) => { state.movieSelected = payload },
        setLoading: (state, { payload }) => { state.loading = payload },
        setValue: (state, { payload }) => { state.value = payload },
    }
})

export const selectMovieSlected = (state: RootState) => state.movie.movieSelected;
export const selectLoading = (state: RootState) => state.movie.loading;
export const selectMovies = (state: RootState) => state.movie.value;

export const { setValue, setMovieSelected, setLoading } = movieSlice.actions;

export default movieSlice.reducer;