import { Drawer } from 'antd'
import { settingIcon } from '@/styles/icons/customeIcons'
import styles from '@/layout/AppHeader.module.scss'
import { useState } from 'react'
import drawerStyles from '@/components/ConfgurationDrwaer/ConfigurationDrawer.module.scss'

export default function ConfigurationDrawer() {
  const [open, setOpen] = useState<boolean>(false)

  const showDrawer = () => {
    setOpen(true)
  }
  const onClose = () => {
    setOpen(false)
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
            <h5 className={drawerStyles['drawer-colors-title']}>
              Sidebar Colors
            </h5>
            <div className={drawerStyles['drawer-colors-buttons']}>
              <button title="1"></button>
              <button title="2"></button>
              <button title="3"></button>
              <button title="4"></button>
              <button title="5"></button>
            </div>
          </div>

          <div>
            <h5 className={drawerStyles['drawer-transparent-title']}>
              Sidenav Type
            </h5>
            <span className={drawerStyles['drawer-transparent-subtitle']}>
              Choose between 2 sidenav types
            </span>
            <div className={drawerStyles['drawer-transparent-buttons-wrapper']}>
              <button>TRANSPARENT</button>
              <button>WHITE</button>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  )
}
