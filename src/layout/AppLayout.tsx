import { Layout } from 'antd'
import AppHeader from './AppHeader'
import { Content } from 'antd/es/layout/layout'
// import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import { HeaderPositionProvider } from '@/context/HeaderPositionProvider'

export default function AppLayout() {
  return (
    <HeaderPositionProvider>
      <Layout>
        <Layout>
          <AppHeader />
          <Content>
            {/* <Outlet /> */}
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
          </Content>
        </Layout>
        <Sidebar />
      </Layout>
    </HeaderPositionProvider>
  )
}
