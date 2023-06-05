import { useNavigate } from 'react-router-dom'

const MovieCard = ({ item }) => {
  const { title, vote_average, release_date, poster_path, id } = item
  const navigate = useNavigate()
  return (
    <div className="movie-card rounded-lg bg-slate-800 p-3 flex flex-col h-full select-none">
      <img src={`http://image.tmdb.org/t/p/w500/${poster_path}`} alt=""
        className="w-full h-[250px] rounded-lg object-cover mb-5"
      />
      <div className="flex flex-col flex-1 text-white">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <div className="flex items-center justify-between text-sm opacity-50 mb-10">
          <span>{new Date(release_date).getFullYear()}</span>
          <span>{vote_average}</span>
        </div>
        <button onClick={() => navigate(`/movie/${id}`)} className="capitalize py-3 px-6 rounded-lg bg-primary w-full mt-auto">Watch now</button>
      </div>
    </div>
  )
}

export default MovieCard
