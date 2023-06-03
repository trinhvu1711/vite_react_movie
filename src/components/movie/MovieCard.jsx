const MovieCard = () => {
  return (
    <div className="movie-card rounded-lg bg-slate-800 p-3">
      <img src="https://nld.mediacdn.vn/2019/4/25/3515432-endgamedek-15561710302491765206118.jpg" alt="" 
        className="w-full h-[250px] rounded-lg object-cover mb-5"
      />
      <h3 className="text-xl font-bold mb-3">Spiderman: Homecoming</h3>
      <div className="flex items-center justify-between text-sm opacity-50 mb-10"> 
        <span>2017</span>
        <span>7.4</span>
      </div>
      <button className="capitalize py-3 px-6 rounded-lg bg-primary w-full">Watch now</button>
    </div>
  )
}

export default MovieCard
