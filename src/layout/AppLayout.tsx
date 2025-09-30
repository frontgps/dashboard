import { Layout } from 'antd'
import AppHeader from './AppHeader'
import { Content } from 'antd/es/layout/layout'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

export default function AppLayout() {
  return (
    <Layout>
      <Layout>
        <AppHeader />
        <Content>
          <Outlet />
        </Content>
      </Layout>
      <Sidebar />
    </Layout>
  )
}
