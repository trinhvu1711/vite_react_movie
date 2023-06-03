import { configureStore } from '@reduxjs/toolkit'
import MovieListSlice from '../features/MovieListSlice'

const store = configureStore({
  reducer: {
    MovieList: MovieListSlice
  }
})

export default store