import { Breadcrumb } from 'antd'

export default function AppHeader() {
  return (
    <div>
      <div>
        <Breadcrumb items={[{ title: 'sample' }]} />
      </div>
    </div>
  )
}
