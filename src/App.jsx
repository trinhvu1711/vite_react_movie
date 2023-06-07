import { Routes, Route } from 'react-router-dom'
import store from './store/store'
import { Provider } from 'react-redux'
import Main from './components/layout/Main'
// import HomePage from './pages/HomePage'
// import Banner from './components/banner/Banner'
// import MoviePage from './pages/MoviePage'
// import MoiveDetailPage from './pages/MoiveDetailPage'
import { lazy, Suspense } from 'react'
const HomePage = lazy(() => import('./pages/HomePage'))
const Banner = lazy(() => import('./components/banner/Banner'))
const MoviePage = lazy(() => import('./pages/MoviePage'))
const MoiveDetailPage = lazy(() => import('./pages/MoiveDetailPage'))
function App() {
  return (
    <Provider store={store}>
      <Suspense fallback>
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
      </Suspense>
    </Provider>
  )
}

export default App
