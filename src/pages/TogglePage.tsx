import ToggleTextSwitch from 'components/ToggleTextSwitch/ToggleTextSwitch'
import { useState } from 'react'

const dataList = [
  { id: 'none', text: '해당없음' },
  { id: 'half', text: '반차' },
  { id: 'day', text: '연차' },
  { id: 'out', text: '외근' },
]

export default function TogglePage() {
  const [toggleValue, setToggleValue] = useState(0)
  const handleToggle = (value: number) => setToggleValue(value)

  return <ToggleTextSwitch name='test' dataList={dataList} value={toggleValue} handleToggle={handleToggle} />
}
