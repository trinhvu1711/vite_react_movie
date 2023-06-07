import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  nowPlayingMovies: [],
  nowPlayingMoviesTotalpage: 0,
  upcomingMovies: [],
  topRatedMovies: [],
  movieDetail: null,
  movieCredits: null,
  movieVideo: null,
  movieSearch: []
}

const MovieListSlice = createSlice({
  name: 'MovieList',
  initialState,
  reducers: {
    setPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload
    },
    setPlayingMoviesTotalPage: (state, action) => {
      state.nowPlayingMoviesTotalpage = action.payload
    },
    setUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload
    },
    setTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload
    },
    setMovieDetail: (state, action) => {
      state.movieDetail = action.payload
    },
    setMovieCredits: (state, action) => {
      state.movieCredits = action.payload
    },
    setMovieVideo: (state, action) => {
      state.movieVideo = action.payload
    },
    setMovieSearch: (state, action) => {
      state.movieSearch = action.payload
    }
  }
})

export const { setPlayingMovies, setUpcomingMovies, setTopRatedMovies, setMovieDetail, setMovieCredits, setMovieVideo, setMovieSearch, setPlayingMoviesTotalPage } = MovieListSlice.actions

export default MovieListSlice.reducer