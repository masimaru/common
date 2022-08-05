import ToggleTextSwitch from 'components/ToggleTextSwitch/ToggleTextSwitch'

const dataList = [
  { id: 'none', text: '해당없음' },
  { id: 'half', text: '반차' },
  { id: 'day', text: '연차' },
  { id: 'out', text: '외근' },
]

export default function TogglePage() {
  return <ToggleTextSwitch dataList={dataList} />
}
