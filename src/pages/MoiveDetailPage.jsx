import { useParams } from 'react-router-dom'
import useSWR from 'swr'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setMovieCredits, setMovieDetail, setMovieVideo } from '../features/MovieListSlice'
import { api, fetcher } from '../config'
const MoiveDetailPage = () => {
  const { movieId } = useParams()
  const { data } = useSWR(api.getMovieDetail(movieId), fetcher)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setMovieDetail(data))
  }, [data, dispatch])
  if (!data) return null
  const { backdrop_path, poster_path, title, genres, overview } = data
  return (
    <div className='py-10'>
      <div className='w-full h-[600px] relative'>
        <div className='absolute inset-0 bg-black bg-opacity-70'></div>
        <div className='w-full h-full bg-cover bg-no-repeat' style={{ backgroundImage: `url(${api.getImgOriginal(backdrop_path)})` }}></div>
        <div className="w-full h-[400px] max-w-[800px] mx-auto">
          <img src= {api.getImgOriginal(poster_path)} alt="" className='w-full h-full object-cover object-center rounded-lg -mt-[200px] relative z-10 pb-10' />
        </div>
        <h1 className='text-center text-4xl font-bold text-white mb-10'>{title}</h1>
        {genres.length>0 && <div className="flex items-center justify-center gap-x-5 mb-10">
          {genres.map((item) => (
            <span className='py-2 px-4 border-primary text-primary border rounded-lg' key={item.id}>{item.name}</span>
          ))}
        </div>}
        <p className='text-center leading-relaxed max-w-[800px] mx-auto mb-10'>{overview}</p>
        <MovieCredit></MovieCredit>
        <MovieVideo></MovieVideo>
        <SimilarMovie></SimilarMovie>
      </div>
    </div>
  )
}

function MovieCredit() {
  const { movieId } = useParams()
  const { data } = useSWR(api.getMovieCredit(movieId), fetcher)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setMovieCredits(data))
  }, [data, dispatch])
  if (!data) return null
  const { cast } = data
  if (!cast || cast.length<=0 ) return null

  return <>
    <h2 className='text-center text-3xl mb-10'>Casts</h2>
    <div className="grid grid-cols-4 gap-5 px-10">
      {cast.slice(0, 4).map((item) => (
        <div className="cast-item" key={item.id}>
          <img src={api.getImgOriginal(item.profile_path)} alt="" className='w-full h-[350px] object-cover rounded-lg mb-3' />
          <h3 className='text-xl font-medium'>{item.name}</h3>
        </div>
      ))}
    </div>
  </>
}

function MovieVideo() {
  const { movieId } = useParams()
  const { data } = useSWR(api.getMovieVideo(movieId), fetcher)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setMovieVideo(data))
  }, [])
  if (!data) return null
  const { results } = data
  if (!results || results.length <= 0) return null
  return <div className='py-10'>
    {results.slice(0, 4).map((item) => (
      <div key={item.id} className='pb-10'>
        <h3 className='mb-5 text-xl font-medium p-3 bg-secondary inline-block'>{item.name}</h3>
        <div key={item.id} className='w-full aspect-video'>
          <iframe src={`https://www.youtube.com/embed/${item.key}`}
            title="" className='w-full h-full object-fill' allowFullScreen></iframe>
        </div>
      </div>
    ))}
  </div>
}

function SimilarMovie() {

}

export default MoiveDetailPage