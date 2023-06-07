import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.css'
import MovieCard from './MovieCard'
import { apiKey, fetcher } from '../../config'
import useSWR from 'swr'
import { useSelector, useDispatch } from 'react-redux'
import { setPlayingMovies, setPlayingMoviesTotalPage, setTopRatedMovies, setUpcomingMovies } from '../../features/MovieListSlice'
import { useEffect } from 'react'
// https://api.themoviedb.org/3/movie/now_playing
// api_key= 0dabe49b36bf66c058d61be4df8b7f74
const MovieList = ({ type }) => {
  const { data } = useSWR(`https://api.themoviedb.org/3/movie/${type}?api_key=${apiKey}`, fetcher)
  const state = useSelector((state) => state.MovieList)
  const dispatch = useDispatch()
  useEffect(() => {
    if (data && data.results) {
      if (type === 'now_playing') {
        dispatch(setPlayingMovies(data.results))
        dispatch(setPlayingMoviesTotalPage(data.total_pages))
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