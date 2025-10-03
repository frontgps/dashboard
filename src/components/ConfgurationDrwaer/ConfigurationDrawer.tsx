import { Drawer, Switch } from 'antd'
import { settingIcon } from '@/styles/icons/customeIcons'
import styles from '@/layout/AppHeader.module.scss'
import { useState } from 'react'
import drawerStyles from '@/components/ConfgurationDrwaer/ConfigurationDrawer.module.scss'

export default function ConfigurationDrawer() {
  const [open, setOpen] = useState<boolean>(false)
  const [selectedButton, setSelectedButton] = useState<number | null>(null)

  const showDrawer = () => {
    setOpen(true)
  }
  const onClose = () => {
    setOpen(false)
  }
  const handleSelectedClick = (buttonId: number): void => {
    setSelectedButton(buttonId)
  }

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

          <div className={drawerStyles['drawer-wrapper']}>
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
            <Switch defaultChecked={false}></Switch>
          </div>
        </div>
      </Drawer>
    </>
  )
}
