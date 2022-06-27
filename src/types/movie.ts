export interface IMovieApiParams {
  s: string
  page: number
}

export interface IMovieItem {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
  isFavor: boolean
}

export interface IMovieAPIRes {
  Search: IMovieItem[]
  totalResults: number
  Response: 'True'
}

export interface IMovieAPIError {
  Error: string
  Response: 'False'
}

export interface IMovieSuccess {
  response: true
  searchItems: IMovieItem[]
  totalResults: number
}

export interface IMovieFailure {
  response: false
  errorMsg: string
}
