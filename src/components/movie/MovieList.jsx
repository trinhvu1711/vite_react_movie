import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.css'
import MovieCard from './MovieCard'
import { api, fetcher } from '../../config'
import useSWR from 'swr'
import { useSelector, useDispatch } from 'react-redux'
import { setPlayingMovies, setTopRatedMovies, setUpcomingMovies } from '../../features/MovieListSlice'
import { useEffect } from 'react'
const MovieList = ({ type }) => {
  const { data } = useSWR(api.getMovieList(type), fetcher)
  const state = useSelector((state) => state.MovieList)
  const dispatch = useDispatch()
  useEffect(() => {
    if (data && data.results) {
      if (type === 'now_playing') {
        dispatch(setPlayingMovies(data.results))
      }
      else if (type === 'top_rated') dispatch(setTopRatedMovies(data.results))
      else if (type === 'popular') dispatch(setUpcomingMovies(data.results))
    }
  }, [data, dispatch, type])
  const nowData = type === 'now_playing' ? state.nowPlayingMovies : type === 'top_rated' ? state.topRatedMovies : state.upcomingMovies
  return (
    <div className="movie-list">
      <Swiper grabCursor={'true'} spaceBetween={40} slidesPerView={'auto'}>
        {nowData.length>0 && nowData.map((item) => (
          <SwiperSlide key={item.id}>
            <MovieCard item={item}></MovieCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default MovieList