import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  nowPlayingMovies: [],
  upcomingMovies: [],
  topRatedMovies: [],
  movieDetail: null
}

const MovieListSlice = createSlice({
  name: 'MovieList',
  initialState,
  reducers: {
    setPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload
    },
    setUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload
    },
    setTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload
    },
    setMovieDetail: (state, action) => {
      state.movieDetail = action.payload
    }
  }
})

export const { setPlayingMovies, setUpcomingMovies, setTopRatedMovies, setMovieDetail } = MovieListSlice.actions

export default MovieListSlice.reducer