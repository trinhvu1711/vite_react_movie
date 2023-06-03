import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.css'
import MovieCard from './MovieCard'
import { fetcher } from '../../config'
import useSWR from 'swr'
import { useSelector, useDispatch } from 'react-redux'
import { setPlayingMovies } from '../../features/MovieListSlice'
import { useEffect } from 'react'
// https://api.themoviedb.org/3/movie/now_playing
// api_key= 0dabe49b36bf66c058d61be4df8b7f74
const MovieList = () => {
  const { data, error, isLoading } = useSWR('https://api.themoviedb.org/3/movie/now_playing?api_key=0dabe49b36bf66c058d61be4df8b7f74', fetcher)
  const state = useSelector((state) => state.MovieList)
  const dispatch = useDispatch()
  useEffect(() => {
    if (data && data.results) {
      dispatch(setPlayingMovies(data.results))
    }
  }, [data])
  return (
    <div className="movie-list">
      <Swiper grabCursor={'true'} spaceBetween={40} slidesPerView={'auto'}>
        {state.nowPlayingMovies && state.nowPlayingMovies.map((item) => (
          <SwiperSlide key={item.id}>
            <MovieCard></MovieCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default MovieList