import { fetcher } from '../../config'
import useSWR from 'swr'
import { useSelector, useDispatch } from 'react-redux'
import { setUpcomingMovies } from '../../features/MovieListSlice'
import { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.css'
const Banner = () => {
  const { data } = useSWR('https://api.themoviedb.org/3/movie/upcoming?api_key=0dabe49b36bf66c058d61be4df8b7f74', fetcher)
  const state = useSelector((state) => state.MovieList)
  const dispatch = useDispatch()
  useEffect(() => {
    if (data && data.results) {
      dispatch(setUpcomingMovies(data.results))
    }
  }, [data, dispatch])
  return (
    <section className="banner h-[500px] page-container mb-20 overflow-hidden">
      <Swiper grabCursor='true' slidesPerView={'auto'}>
        {state.upcomingMovies.length >0 && state.upcomingMovies.map((item) => (
          <SwiperSlide key={item.id}>
            <BannerItem item={item}></BannerItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

function BannerItem({ item }) {
  const { title, poster_path } = item
  return (
    <div className="w-full h-full rounded-lg relative">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
      <img src={`http://image.tmdb.org/t/p/original/${poster_path}`} alt=""
        className="w-full h-full object-cover object-top rounded-lg" />
      <div className="absolute left-5 bottom-5 w-full text-white">
        <h2 className="font-bold text-3xl mb-5">{title}</h2>
        <div className="flex items-center gap-x-3 mb-8">
          <span className="py-2 px-4 border border-white rounded-md">Adventure</span>
          <span className="py-2 px-4 border border-white rounded-md">Adventure</span>
          <span className="py-2 px-4 border border-white rounded-md">Adventure</span>
        </div>
        <button className="py-3 px-6 bg-primary text-white font-medium rounded-lg">Watch</button>
      </div>
    </div>
  )
}

export default Banner