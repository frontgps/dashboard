import { Layout } from 'antd'
// import { Outlet } from 'react-router-dom'
import { HeaderPositionProvider } from '@/context/HeaderPositionProvider'
import { Outlet } from 'react-router-dom'

export default function AppLayout() {
  return (
    <HeaderPositionProvider>
      <Layout>
        <Outlet />
      </Layout>
    </HeaderPositionProvider>
  )
}
