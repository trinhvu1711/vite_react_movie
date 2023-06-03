import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  nowPlayingMovies: []
}

const MovieListSlice = createSlice({
  name: 'MovieList',
  initialState,
  reducers: {
    setPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload
    }
  }
})

export const { setPlayingMovies } = MovieListSlice.actions

export default MovieListSlice.reducer