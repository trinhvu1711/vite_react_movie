import MovieList from './components/movie/MovieList'
import store from './store/store'
import { Provider } from 'react-redux'
function App() {
  return (
    <Provider store={store}>
      <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-5">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <section className="banner h-[500px] page-container mb-20">
        <div className="w-full h-full rounded-lg relative">
          <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
          <img src="https://nld.mediacdn.vn/2019/4/25/3515432-endgamedek-15561710302491765206118.jpg" alt=""
            className="w-full h-full object-cover rounded-lg" />
          <div className="absolute left-5 bottom-5 w-full text-white">
            <h2 className="font-bold text-3xl mb-5">Avenger: Endgame</h2>
            <div className="flex items-center gap-x-3 mb-8">
              <span className="py-2 px-4 border border-white rounded-md">Adventure</span>
              <span className="py-2 px-4 border border-white rounded-md">Adventure</span>
              <span className="py-2 px-4 border border-white rounded-md">Adventure</span>
            </div>
            <button className="py-3 px-6 bg-primary text-white font-medium rounded-lg">Watch</button>
          </div>
        </div>
      </section>
      <section className="movie-layout page-container pb-20 text-white">
        <h2 className="capitalize mb-10 text-2xl font-bold">Now Playing</h2>
        <MovieList></MovieList>
      </section>
      <section className="movie-layout page-container pb-20 text-white">
        <h2 className="capitalize mb-10 text-2xl font-bold">Top Rated</h2>
        <MovieList></MovieList>
      </section>
      <section className="movie-layout page-container pb-20 text-white">
        <h2 className="capitalize mb-10 text-2xl font-bold">Trending</h2>
        <MovieList></MovieList>
      </section>
    </Provider>
  )
}

export default App
