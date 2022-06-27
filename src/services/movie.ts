import axios from 'axios'
import { IMovieAPIError, IMovieAPIRes, IMovieApiParams, IMovieFailure, IMovieSuccess } from 'types/movie'

const OMD_BASE_URL = 'http://www.omdbapi.com/'

export const getMovieResApi = (params: IMovieApiParams) =>
  axios.get<IMovieAPIRes | IMovieAPIError>(OMD_BASE_URL, {
    params: {
      apikey: process.env.REACT_APP_OMD_API_KEY,
      ...params,
    },
  })

export const fetchMovieData = async (s: string, page: number): Promise<IMovieSuccess | IMovieFailure> => {
  const { data } = await getMovieResApi({ s, page })

  if (data.Response === 'False') {
    const { Error } = data
    return { response: false, errorMsg: Error }
  }

  const { Search: searchItems, totalResults } = data
  return { response: true, searchItems, totalResults }
}
