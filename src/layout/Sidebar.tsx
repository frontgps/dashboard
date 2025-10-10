import { useMemo } from 'react';
import { Menu, type MenuProps } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { NavLink, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import styles from '@/layout/Sidebar.module.scss';
import {
  billingIcon,
  dashboardIcon,
  documentationIcon,
  profileIcon,
  rtlIcon,
  siderSigninIcon,
  siderSignupIcon,
  tablesIcon,
} from '@/styles/icons/customeIcons';

const useSidebarItems = (): MenuProps['items'] =>
  useMemo(
    () => [
      {
        key: '/dashboard',
        icon: <span aria-hidden>{dashboardIcon}</span>,
        label: (
          <NavLink
            to="/dashboard"
            className={({ isActive }) => clsx(styles.link, isActive && styles.active)}
          >
            Dashboard
          </NavLink>
        ),
      },
      {
        key: '/tables',
        icon: <span aria-hidden>{tablesIcon}</span>,
        label: (
          <NavLink
            to="/tables"
            className={({ isActive }) => clsx(styles.link, isActive && styles.active)}
          >
            Tables
          </NavLink>
        ),
      },
      {
        key: '/billing',
        icon: <span aria-hidden>{billingIcon}</span>,
        label: (
          <NavLink
            to="/billing"
            className={({ isActive }) => clsx(styles.link, isActive && styles.active)}
          >
            Billing
          </NavLink>
        ),
      },
      {
        key: '/rtl',
        icon: <span aria-hidden>{rtlIcon}</span>,
        label: (
          <NavLink
            to="/rtl"
            className={({ isActive }) => clsx(styles.link, isActive && styles.active)}
          >
            RTL
          </NavLink>
        ),
      },
      {
        type: 'group',
        key: 'account',
        label: <span className={styles.groupLabel}>Account pages</span>,
        children: [
          {
            key: '/profile',
            icon: <span aria-hidden>{profileIcon}</span>,
            label: (
              <NavLink
                to="/profile"
                className={({ isActive }) => clsx(styles.link, isActive && styles.active)}
              >
                Profile
              </NavLink>
            ),
          },
          {
            key: '/signin',
            icon: <span aria-hidden>{siderSigninIcon}</span>,
            label: (
              <NavLink
                to="/signin"
                className={({ isActive }) => clsx(styles.link, isActive && styles.active)}
              >
                Sign in
              </NavLink>
            ),
          },
          {
            key: '/signup',
            icon: <span aria-hidden>{siderSignupIcon}</span>,
            label: (
              <NavLink
                to="/signup"
                className={({ isActive }) => clsx(styles.link, isActive && styles.active)}
              >
                Sign up
              </NavLink>
            ),
          },
        ],
      },
    ],
    [],
  );

export default function Sidebar() {
  const location = useLocation();
  const items = useSidebarItems();

  const selectedKeys = useMemo(() => {
    const candidates = [
      '/dashboard',
      '/tables',
      '/billing',
      '/rtl',
      '/profile',
      '/signin',
      '/signup',
    ];
    const match = candidates.find((p) => location.pathname.startsWith(p));
    return match ? [match] : [];
  }, [location.pathname]);

  return (
    <Sider
      width={260}
      collapsedWidth={80}
      breakpoint="lg"
      collapsible
      className={styles['sider-container']}
      aria-label="Primary navigation"
    >
      <div className={styles['sider-header']}>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAACWCAYAAABOzhNUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF8WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTAzLTE4VDE4OjEzOjM1KzAyOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wNi0xNFQxODo1OTo1NyswMzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0wNi0xNFQxODo1OTo1NyswMzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpmOTUwNmZlNy1iMmU3LTQ4ZTctYjFlNC0zNGIyNDZiZDVhYWUiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo5NDM4M2QxYS1jZWE0LWM4NDItYTAzOC0yNWFkM2I0YjhiY2UiIC8"
          alt="logo"
        />
        <span>IFR Dashboard</span>
      </div>

      <div className="menu-scroll">
        <Menu
          className={styles['menu-container']}
          items={items}
          selectedKeys={selectedKeys}
          mode="inline"
          inlineIndent={16}
        />
      </div>

      <div className={styles['documant-container']}>
        <div role="note" aria-label="Help card">
          <span aria-hidden>{documentationIcon}</span>
          <h6>Need help?</h6>
          <p>Please check our docs</p>
          <NavLink to="/docs" aria-label="Open Documentation">
            <button style={{ padding: 12 }} type="button">
              Documentation
            </button>
          </NavLink>
        </div>
      </div>
    </Sider>
  );
}
