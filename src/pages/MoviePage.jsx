import { useDispatch, useSelector } from 'react-redux'
import MovieCard from '../components/movie/MovieCard'
import { useEffect, useState } from 'react'
import { apiKey, fetcher } from '../config'
import useSWR from 'swr'
import { setMovieSearch } from '../features/MovieListSlice'
// https://api.themoviedb.org/3/search/movie
const MoviePage = () => {
  const state = useSelector((state) => state.MovieList)
  const [query, setQuery] = useState('')
  const dispatch = useDispatch()
  const { data } = useSWR(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`, fetcher)
  useEffect(() => {
    if (data && data.results && data.results.length >0) {
      dispatch(setMovieSearch(data.results))
    }
  }, [data, dispatch, query])
  const handleSearch = () => {
  }
  return (
    <div className="py-10 page-container">
      <div className='flex mb-10'>
        <div className="flex-1">
          <input type="text" className='w-full p-4 bg-slate-800 outline-none text-white' placeholder='Type here to search' value={query} onChange={(e) => setQuery(e.target.value)}/>
        </div>
        <button className='text-white p-4 bg-primary' onClick={handleSearch}>search</button>
      </div>
      <div className="grid grid-cols-4 gap-10">
        {state.movieSearch.length <= 0 && state.nowPlayingMovies.map((item) => {
          if (!item || isNaN(item.id)) {
            return null;
          }
          return <MovieCard key={item.id} item={item} />;
        })}
        {state.movieSearch.length > 0 &&
        state.movieSearch.map((item) => {
          if (!item || isNaN(item.id)) {
            return null;
          }
          return <MovieCard key={item.id} item={item} />;
        })}
      </div>
    </div>
  )
}

export default MoviePage