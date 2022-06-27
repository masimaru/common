import { useState, useRef, useEffect, FormEvent, ChangeEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SearchIcon } from 'assets/svgs'
import styles from './searchBar.module.scss'

export default function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchInput, setSearchInput] = useState(searchParams.get('search') || '')

  useEffect(() => {
    if (!inputRef.current) return
    inputRef.current.focus()
  }, [])

  useEffect(() => {
    setSearchInput(searchParams.get('search') || '')
  }, [searchParams])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setSearchInput(e.currentTarget.value)
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearchParams({ search: searchInput })
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type='search'
        placeholder='검색어를 입력하세요.'
        ref={inputRef}
        value={searchInput}
        onChange={handleChange}
      />
      <button type='submit'>
        <SearchIcon fill='currentColor' />
      </button>
    </form>
  )
}
