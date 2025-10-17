import { Layout } from 'antd';
import AppHeader from './AppHeader';
import { Content } from 'antd/es/layout/layout';
// import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar';
import { HeaderPositionProvider } from '@/context/HeaderPositionProvider';
import { Outlet } from 'react-router-dom';
import useWindowWidth from '@/hooks/useWindowWidth';

export default function AppLayout() {
  const width = useWindowWidth();
  const isMobile = width < 990;

  return (
    <HeaderPositionProvider>
      {isMobile ? (
        <Layout>
          <AppHeader />
          <Content>
            <Outlet />
          </Content>
        </Layout>
      ) : (
        <Layout>
          <Sidebar />
          <Layout>
            <AppHeader />
            <Content>
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      )}
    </HeaderPositionProvider>
  );
}
