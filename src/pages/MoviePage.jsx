import { useDispatch, useSelector } from 'react-redux'
import MovieCard from '../components/movie/MovieCard'
import { useEffect, useState } from 'react'
import { api, fetcher } from '../config'
import useSWR from 'swr'
import { setMovieSearch } from '../features/MovieListSlice'
import ReactPaginate from 'react-paginate'
const MoviePage = () => {
  const state = useSelector((state) => state.MovieList)
  // Số phần tử hiển thị trên mỗi trang
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [query, setQuery] = useState('')
  const dispatch = useDispatch()
  const apiURL = query === '' ? api.getSearchNowPlayingVideo(currentPage) : api.getSearchVideo(currentPage, query)
  const { data } = useSWR(apiURL, fetcher)
  useEffect(() => {
    if (data && data.results && data.results.length > 0) {
      dispatch(setMovieSearch(data.results))
      setTotalPages(data.total_pages)
    }
  }, [data, dispatch, setTotalPages])

  const handleSearch = () => {}

  // Tính toán số trang dựa trên kết quả tìm kiếm
  const pageCount = Math.ceil(
    (state.movieSearch.length > 0 ? totalPages : 1)
  )
  // console.log(totalPages);

  // Hàm xử lý khi người dùng chuyển trang
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected+1)
  }

  return (
    <div className="py-10 page-container">
      <div className='flex mb-10'>
        <div className="flex-1">
          <input type="text" className='w-full p-4 bg-slate-800 outline-none text-white' placeholder='Type here to search' value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>
        <button className='text-white p-4 bg-primary' onClick={handleSearch}>search</button>
      </div>
      <div className="grid grid-cols-4 gap-10">
        {state.movieSearch.length > 0 && state.movieSearch.map((item) => {
          if (!item || isNaN(item.id)) {
            return null
          }
          return <MovieCard key={item.id} item={item} />
        })}
      </div>
      <ReactPaginate
        pageCount={pageCount}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  )
}

export default MoviePage
