import { searchIcon, signinIcon } from '@/styles/icons/customeIcons';
import { Breadcrumb, Input } from 'antd';
import styles from '@/layout/AppHeader.module.scss';
import HeaderDropdown from '@/components/HeaderDropdown/HeaderDropdown';
import ConfigurationDrawer from '@/components/ConfgurationDrwaer/ConfigurationDrawer';
import { useHeaderPosition } from '@/hooks/useHeaderPosition';
import { useEffect, useState } from 'react';
import DrawerSidebar from '@/components/DrawerSidebar/DrawerSidebar';
import useWindowWidth from '@/hooks/useWindowWidth';
import { useLocation } from 'react-router-dom';

export default function AppHeader() {
  const { isFixed } = useHeaderPosition();
  const [scrolled, setScrolled] = useState<boolean>(false);

  const width = useWindowWidth();
  const isMobile = width < 990;

  const location = useLocation();
  const pathnameLastPart = location.pathname.split('/').filter(Boolean).pop();

  useEffect(() => {
    if (!isFixed) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isFixed]);

  const headerClass = [
    styles['header-container-not-fixed'],
    isFixed ? styles['header-container-fixed'] : '',
    isFixed && scrolled ? styles['header-container-scrolled'] : '',
  ]

    .filter(Boolean)
    .join(' ');

  return (
    <div className={headerClass}>
      <div className={styles['header-right']}>
        <HeaderDropdown />

        <ConfigurationDrawer />

        {isMobile && <DrawerSidebar />}

        <a className={styles['signin-logo']} href="/login">
          <span>Sign in</span>
          {signinIcon}
        </a>

        <span className={styles['input-container']}>
          <Input className="customeInput" placeholder="Type here..." />
          <span>{searchIcon}</span>
        </span>
      </div>

      <div>
        <div className={styles['breadcrumb-wrapper']}>
          <Breadcrumb
            style={{ direction: 'ltr' }}
            items={[
              {
                title: 'Pages',
              },
              {
                title: <a href={location.pathname}>{pathnameLastPart}</a>,
              },
            ]}
          />
          <h4>{pathnameLastPart}</h4>
        </div>
      </div>
    </div>
  );
}
