import { useState } from 'react'
import Dropdown from 'components/Dropdown/Dropdown'

export default function DropdownPage() {
  const dropdownData = ['ko', 'en', 'iata']
  const [condition, setCondition] = useState(dropdownData[0])
  const handleSelect = (value: string) => setCondition(value)
  return <Dropdown dataList={dropdownData} value={condition} handleSelect={handleSelect} />
}
