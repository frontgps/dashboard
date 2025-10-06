import { Drawer, Switch } from 'antd';
import { facebookIcon, settingIcon, tweeterIcon } from '@/styles/icons/customeIcons';
import styles from '@/layout/AppHeader.module.scss';
import { useState } from 'react';
import drawerStyles from '@/components/ConfgurationDrwaer/ConfigurationDrawer.module.scss';
import { useHeaderPosition } from '@/hooks/useHeaderPosition';

export default function ConfigurationDrawer() {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedButton, setSelectedButton] = useState<number | null>(null);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const handleSelectedClick = (buttonId: number): void => {
    setSelectedButton(buttonId);
  };

  const { isFixed, toggleFixed } = useHeaderPosition();

  return (
    <>
      <div onClick={showDrawer} className={styles['setting-logo']}>
        {settingIcon}
      </div>

      <Drawer
        onClose={onClose}
        open={open}
        closable={{ 'aria-label': 'Close' }}
        style={{ direction: 'ltr' }}
        title={
          <div className={drawerStyles['drawer-header-wrapper']}>
            <h4>Configurator</h4>
            <span>See our dashbaord options</span>
          </div>
        }
      >
        <div>
          <div>
            <h5 className={drawerStyles['drawer-titles']}>Sidebar Colors</h5>
            <div className={drawerStyles['drawer-colors-buttons']}>
              <button title="1"></button>
              <button title="2"></button>
              <button title="3"></button>
              <button title="4"></button>
              <button title="5"></button>
            </div>
          </div>

          <div className={drawerStyles['drawer-transparent-wrapper']}>
            <h5 className={drawerStyles['drawer-titles']}>Sidenav Type</h5>
            <span className={drawerStyles['drawer-transparent-subtitle']}>
              Choose between 2 sidenav types
            </span>
            <div className={drawerStyles['drawer-transparent-buttons-wrapper']}>
              <button
                onClick={() => handleSelectedClick(1)}
                className={
                  selectedButton === 1
                    ? drawerStyles['drawer-transparent-button-selected']
                    : drawerStyles['drawer-transparent-button-not-selected']
                }
              >
                TRANSPARENT
              </button>
              <button
                className={
                  selectedButton === 2
                    ? drawerStyles['drawer-transparent-button-selected']
                    : drawerStyles['drawer-transparent-button-not-selected']
                }
                onClick={() => setSelectedButton(2)}
              >
                WHITE
              </button>
            </div>
          </div>

          <div className={drawerStyles['fixed-wrapper']}>
            <h5 className={drawerStyles['drawer-titles']}>Navbar Fixed</h5>
            <Switch checked={isFixed} onChange={toggleFixed}></Switch>
          </div>

          <div className={drawerStyles['download-wrapper']}>
            <button>FREE DOWNLOAD</button>
            <button>VIEW DOCUMENTATION</button>
          </div>

          <div className={drawerStyles['star-container']}>
            <span className={drawerStyles['star-wrapper']}>
              <a
                className={drawerStyles['star-section']}
                href="https://github.com/InteractiveFrontend/dashboard"
              >
                <svg
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                  className="octicon octicon-star"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                  ></path>
                </svg>
                <span>Star</span>
              </a>
              <a
                className={drawerStyles['stargazers-section']}
                href="https://github.com/InteractiveFrontend/dashboard/stargazers"
              >
                3
              </a>
            </span>
          </div>

          <div className={drawerStyles['share-section']}>
            <h5 className={drawerStyles['drawer-titles']}>Thanks for sharing!</h5>
            <div className={drawerStyles['share-buttons-wrapper']}>
              <button>
                <span>{tweeterIcon}</span>
                <span>TWEET</span>
              </button>
              <button>
                <span>{facebookIcon}</span>
                <span>SHARE</span>
              </button>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
}
