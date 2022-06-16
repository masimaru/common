import { useState } from 'react'
import Slider from 'components/Slider/Slider'

export default function SliderPage() {
  const [rangeValue, setRangeValue] = useState(1)
  const handleChange = (value: number) => setRangeValue(value)

  return <Slider value={rangeValue} handleChange={handleChange} />
}
