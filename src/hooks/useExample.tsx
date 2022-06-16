import { useState } from 'react'

export default function useExample() {
  const [tmp, setTmp] = useState('')
  return tmp
}
