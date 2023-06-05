import { Routes, Route } from 'react-router-dom'
import store from './store/store'
import { Provider } from 'react-redux'
import Main from './components/layout/Main'
import HomePage from './pages/HomePage'
import Banner from './components/banner/Banner'
import MoviePage from './pages/MoviePage'
import MoiveDetailPage from './pages/MoiveDetailPage'
function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route element={<Main/>}>
          <Route path='/' element={
            <>
              <Banner/>
              <HomePage/>
            </>
          }
          ></Route>
          <Route path='movies' element={<MoviePage/>}></Route>
          <Route path='movie/:movieId' element={<MoiveDetailPage/>}></Route>

        </Route>
      </Routes>
    </Provider>
  )
}

export default App
