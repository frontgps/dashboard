import { Layout } from 'antd';
import AppHeader from './AppHeader';
import { Content } from 'antd/es/layout/layout';
// import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar';
import { HeaderPositionProvider } from '@/context/HeaderPositionProvider';
import { Outlet } from 'react-router-dom';

export default function AppLayout() {
  return (
    <HeaderPositionProvider>
      <Layout>
        <AppHeader />
        <Content>
          <Outlet />
          {/* <p>hello world</p> */}
        </Content>
      </Layout>
    </HeaderPositionProvider>
  );
}
