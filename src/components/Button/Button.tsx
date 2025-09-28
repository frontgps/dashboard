import styles from './Button.module.scss'
import { Button as AntButton } from 'antd'

type ChildrenProps = { children: React.ReactNode }

function Button({ children }: ChildrenProps) {
  return <AntButton className={styles.button}>{children}</AntButton>
}

export default Button
