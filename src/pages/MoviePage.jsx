import { useSelector } from 'react-redux'
import MovieCard from '../components/movie/MovieCard'

const MoviePage = () => {
  const state = useSelector((state) => state.MovieList)
  return (
    <div className="py-10 page-container">
      <div className='flex mb-10'>
        <div className="flex-1">
          <input type="text" className='w-full p-4 bg-slate-800 outline-none text-white' placeholder='Type here to search' />
        </div>
        <button className='text-white p-4 bg-primary'>search</button>
      </div>
      <div className="grid grid-cols-4 gap-10">
        {state.nowPlayingMovies && state.nowPlayingMovies.map((item) => (
          <MovieCard key={item.id} item={item}></MovieCard>
        ))}
      </div>
    </div>
  )
}

export default MoviePage