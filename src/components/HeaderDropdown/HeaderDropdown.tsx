import { ringIcon } from '@/styles/icons/customeIcons'
import { Badge, Dropdown, type MenuProps } from 'antd'
import styles from '@/layout/AppHeader.module.scss'
import dropdownStyles from '@/components/HeaderDropdown/HeaderDropdown.module.scss'

export default function HeaderDropdown() {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <div className={dropdownStyles['dropdown-container']}>
          <div className={dropdownStyles['dropdown-right']}>
            <h4>New message from Sophie</h4>
            <span className={dropdownStyles['dropdown-time']}>
              2 Days ago
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM11 6C11 5.44772 10.5523 5 10 5C9.44772 5 9 5.44772 9 6V10C9 10.2652 9.10536 10.5196 9.29289 10.7071L12.1213 13.5355C12.5118 13.9261 13.145 13.9261 13.5355 13.5355C13.9261 13.145 13.9261 12.5118 13.5355 12.1213L11 9.58579V6Z"
                  fill="#8c8c8c"
                ></path>
              </svg>
            </span>
          </div>
          <img
            className={dropdownStyles['dropdown-img']}
            src="https://demos.creative-tim.com/muse-ant-design-dashboard/static/media/team-2.e725aef8.jpg"
            alt=""
          />
        </div>
      ),
    },
  ]
  return (
    <Dropdown menu={{ items }} trigger={['click']}>
      <div className={styles['ring-logo']}>
        <Badge size="small" count={4}>
          {ringIcon}
        </Badge>
      </div>
    </Dropdown>
  )
}
