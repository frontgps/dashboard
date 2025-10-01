import {
  ringIcon,
  searchIcon,
  settingIcon,
  signinIcon,
} from '@/styles/icons/customeIcons'
import { Badge, Input } from 'antd'
import styles from '@/layout/AppHeader.module.scss'

export default function AppHeader() {
  return (
    <div className={styles['header-container']}>
      <div className={styles['header-right']}>
        <div className={styles['ring-logo']}>
          <Badge size="small" count={4}>
            {ringIcon}
          </Badge>
        </div>

        <div className={styles['setting-logo']}>{settingIcon}</div>

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
