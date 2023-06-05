import { useParams } from 'react-router-dom'
import useSWR from 'swr'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setMovieDetail } from '../features/MovieListSlice'
import { apiKey, fetcher } from '../config'
const MoiveDetailPage = () => {
  const { movieId } = useParams()
  const { data, error } = useSWR(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`, fetcher)
  console.log(data);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setMovieDetail(data))
  }, [data, dispatch])
  return (
    <div>MoiveDetailPage</div>
  )
}

export default MoiveDetailPage