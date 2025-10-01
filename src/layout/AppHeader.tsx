import { ringIcon, settingIcon, signinIcon } from '@/styles/icons/customeIcons'
import { Badge, Input } from 'antd'

export default function AppHeader() {
  return (
    <div>
      <div>
        <div>
          <Badge count={4}>{ringIcon}</Badge>
        </div>

        <div>{settingIcon}</div>

        <div>
          <span>Sign in</span>
          {signinIcon}
        </div>

        <div>
          <Input placeholder="Type here..." />
        </div>
      </div>

      <div></div>
    </div>
  )
}
