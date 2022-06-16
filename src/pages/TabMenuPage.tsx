import TabMenu from 'components/TabMenu/TabMenu'

export default function TabMenuPage() {
  const dataList = [
    {
      id: 0,
      name: '메일',
    },
    {
      id: 1,
      name: '카페',
    },
    {
      id: 2,
      name: '블로그',
    },
  ]
  return <TabMenu dataList={dataList} />
}
