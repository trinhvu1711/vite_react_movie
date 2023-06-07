export const fetcher = (...args) => fetch(...args).then(res => res.json())
export const apiKey = '0dabe49b36bf66c058d61be4df8b7f74'
// https://api.themoviedb.org/3/movie/now_playing
const endPoint = 'https://api.themoviedb.org/3/movie'
export const api = {
  getMovieList: (type) => `${endPoint}/${type}?api_key=${apiKey}`,
  getMovieDetail: (movieId) => `${endPoint}/${movieId}?api_key=${apiKey}`,
  getMovieCredit: (movieId) => `${endPoint}/${movieId}/credits?api_key=${apiKey}`,
  getImgOriginal: (link) => `http://image.tmdb.org/t/p/original/${link}`,
  getMovieVideo: (movieId) => `${endPoint}/${movieId}/videos?api_key=${apiKey}`,
  getSearchNowPlayingVideo: (currentPage) => `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${currentPage}`,
  getSearchVideo: (currentPage, query) => `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&page=${currentPage}`
}