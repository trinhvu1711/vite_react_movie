import MovieList from '../components/movie/MovieList'
const HomePage = () => {
  return (
    <>
      <section className="movie-layout page-container pb-20 text-white">
        <h2 className="capitalize mb-10 text-2xl font-bold">Now Playing</h2>
        <MovieList type='now_playing'></MovieList>
      </section>
      <section className="movie-layout page-container pb-20 text-white">
        <h2 className="capitalize mb-10 text-2xl font-bold">Top Rated</h2>
        <MovieList type='top_rated'></MovieList>
      </section>
      <section className="movie-layout page-container pb-20 text-white">
        <h2 className="capitalize mb-10 text-2xl font-bold">Trending</h2>
        <MovieList type='popular'></MovieList>
      </section>
    </>
  )
}

export default HomePage