import { searchIcon, signinIcon } from '@/styles/icons/customeIcons'
import { Input } from 'antd'
import styles from '@/layout/AppHeader.module.scss'
import HeaderDropdown from '@/components/HeaderDropdown/HeaderDropdown'
import ConfigurationDrawer from '@/components/ConfgurationDrwaer/ConfigurationDrawer'

export default function AppHeader() {
  return (
    <div className={styles['header-container']}>
      <div className={styles['header-right']}>
        <HeaderDropdown />

        <ConfigurationDrawer />

        <a className={styles['signin-logo']} href="/login">
          <span>Sign in</span>
          {signinIcon}
        </a>

        <span className={styles['input-container']}>
          <Input className="customeInput" placeholder="Type here..." />
          <span>{searchIcon}</span>
        </span>
      </div>

      <div></div>
    </div>
  )
}
