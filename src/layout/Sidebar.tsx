import { Menu } from 'antd'
import Sider from 'antd/es/layout/Sider'
import styles from '@/layout/Sidebar.module.scss'
import { useLocation } from 'react-router-dom'

export default function Sidebar() {
  const items = [
    {
      key: '1',
      icon: (
        <span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 4C3 3.44772 3.44772 3 4 3H16C16.5523 3 17 3.44772 17 4V6C17 6.55228 16.5523 7 16 7H4C3.44772 7 3 6.55228 3 6V4Z"
              fill="#1890ff"
            ></path>
            <path
              d="M3 10C3 9.44771 3.44772 9 4 9H10C10.5523 9 11 9.44771 11 10V16C11 16.5523 10.5523 17 10 17H4C3.44772 17 3 16.5523 3 16V10Z"
              fill="#1890ff"
            ></path>
            <path
              d="M14 9C13.4477 9 13 9.44771 13 10V16C13 16.5523 13.4477 17 14 17H16C16.5523 17 17 16.5523 17 16V10C17 9.44771 16.5523 9 16 9H14Z"
              fill="#1890ff"
            ></path>
          </svg>
        </span>
      ),
      label: <a>Tables</a>,
    },

    {
      key: '2',
      icon: (
        <span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 2C8.44772 2 8 2.44772 8 3C8 3.55228 8.44772 4 9 4H11C11.5523 4 12 3.55228 12 3C12 2.44772 11.5523 2 11 2H9Z"
              fill="#1890ff"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4 5C4 3.89543 4.89543 3 6 3C6 4.65685 7.34315 6 9 6H11C12.6569 6 14 4.65685 14 3C15.1046 3 16 3.89543 16 5V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V5ZM7 9C6.44772 9 6 9.44772 6 10C6 10.5523 6.44772 11 7 11H7.01C7.56228 11 8.01 10.5523 8.01 10C8.01 9.44772 7.56228 9 7.01 9H7ZM10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11H13C13.5523 11 14 10.5523 14 10C14 9.44772 13.5523 9 13 9H10ZM7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44772 15 7 15H7.01C7.56228 15 8.01 14.5523 8.01 14C8.01 13.4477 7.56228 13 7.01 13H7ZM10 13C9.44772 13 9 13.4477 9 14C9 14.5523 9.44772 15 10 15H13C13.5523 15 14 14.5523 14 14C14 13.4477 13.5523 13 13 13H10Z"
              fill="#1890ff"
            ></path>
          </svg>
        </span>
      ),
      label: <a>Dashboard</a>,
    },

    {
      key: '3',
      icon: (
        <span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 4C2.89543 4 2 4.89543 2 6V7H18V6C18 4.89543 17.1046 4 16 4H4Z"
              fill="#1890ff"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18 9H2V14C2 15.1046 2.89543 16 4 16H16C17.1046 16 18 15.1046 18 14V9ZM4 13C4 12.4477 4.44772 12 5 12H6C6.55228 12 7 12.4477 7 13C7 13.5523 6.55228 14 6 14H5C4.44772 14 4 13.5523 4 13ZM9 12C8.44772 12 8 12.4477 8 13C8 13.5523 8.44772 14 9 14H10C10.5523 14 11 13.5523 11 13C11 12.4477 10.5523 12 10 12H9Z"
              fill="#1890ff"
            ></path>
          </svg>
        </span>
      ),
      label: <a>Billing</a>,
    },

    {
      key: '4',
      icon: (
        <span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3 6C3 4.34315 4.34315 3 6 3H16C16.3788 3 16.725 3.214 16.8944 3.55279C17.0638 3.89157 17.0273 4.29698 16.8 4.6L14.25 8L16.8 11.4C17.0273 11.703 17.0638 12.1084 16.8944 12.4472C16.725 12.786 16.3788 13 16 13H6C5.44772 13 5 13.4477 5 14V17C5 17.5523 4.55228 18 4 18C3.44772 18 3 17.5523 3 17V6Z"
              fill="#1890ff"
            ></path>
          </svg>
        </span>
      ),
      label: <a>RTL</a>,
    },
    {
      key: '5',
      label: <span>Accout pages</span>,
    },

    {
      key: '6',
      icon: (
        <span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM12 7C12 8.10457 11.1046 9 10 9C8.89543 9 8 8.10457 8 7C8 5.89543 8.89543 5 10 5C11.1046 5 12 5.89543 12 7ZM9.99993 11C7.98239 11 6.24394 12.195 5.45374 13.9157C6.55403 15.192 8.18265 16 9.99998 16C11.8173 16 13.4459 15.1921 14.5462 13.9158C13.756 12.195 12.0175 11 9.99993 11Z"
              fill="#1890ff"
            ></path>
          </svg>
        </span>
      ),
      label: <a>Profile</a>,
    },

    {
      key: '7',
      icon: (
        <span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6 2C5.44772 2 5 2.44772 5 3V4H4C2.89543 4 2 4.89543 2 6V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V6C18 4.89543 17.1046 4 16 4H15V3C15 2.44772 14.5523 2 14 2C13.4477 2 13 2.44772 13 3V4H7V3C7 2.44772 6.55228 2 6 2ZM6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H14C14.5523 9 15 8.55228 15 8C15 7.44772 14.5523 7 14 7H6Z"
              fill="#1890ff"
            ></path>
          </svg>
        </span>
      ),
      label: <a>Sign in</a>,
    },

    {
      key: '8',
      icon: (
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
          >
            <path
              d="M0,2A2,2,0,0,1,2,0H8a2,2,0,0,1,2,2V8a2,2,0,0,1-2,2H2A2,2,0,0,1,0,8Z"
              transform="translate(4 4)"
              fill="#1890ff"
            ></path>
            <path
              d="M2,0A2,2,0,0,0,0,2V8a2,2,0,0,0,2,2V4A2,2,0,0,1,4,2h6A2,2,0,0,0,8,0Z"
              fill="#1890ff"
            ></path>
          </svg>
        </span>
      ),
      label: <a>Sign out</a>,
    },
  ]

  const location = useLocation()

  return (
    <Sider width="250px" className={styles['sider-container']}>
      <div className={styles['sider-header']}>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAACWCAYAAABOzhNUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF8WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTAzLTE4VDE4OjEzOjM1KzAyOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wNi0xNFQxODo1OTo1NyswMzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0wNi0xNFQxODo1OTo1NyswMzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpmOTUwNmZlNy1iMmU3LTQ4ZTctYjFlNC0zNGIyNDZiZDVhYWUiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo5NDM4M2QxYS1jZWE0LWM4NDItYTAzOC0yNWFkM2I0YjhiY2UiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowYmU3Mzc4ZS1mMWEyLTQ3MmItYWUwNC05ODI2ZjZhZjI0MzYiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjBiZTczNzhlLWYxYTItNDcyYi1hZTA0LTk4MjZmNmFmMjQzNiIgc3RFdnQ6d2hlbj0iMjAyMS0wMy0xOFQxODoxMzozNSswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpmOTUwNmZlNy1iMmU3LTQ4ZTctYjFlNC0zNGIyNDZiZDVhYWUiIHN0RXZ0OndoZW49IjIwMjEtMDYtMTRUMTg6NTk6NTcrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7xz6j9AAAGCElEQVR42u2dwWsjVRzH85rZTg623YtltzZJD9NFKEsrpayw4FZBUDwK9Q/o3yDWBT0obK3/Q/8ABU8eFATpCh6WUN2yFMXOIc3UbukeXFsPSbfT8fe2qa7YTTLNZDLz5vOBx5skZSa/9/3sm0x2JqOCIMgBJJ0BhgAQFQBRAVEBEBUAUQFRARAVAFEBUQEQFQBRAVEBEBUQFQBRARAVTMeKc2NKqae94zjDjUZjURbnpI0ZNJ55aVea43osbU+ab1B9u9Iqtm2vuq57oJ+I6woRFeelKFrUiYmJG8fHx1/KwxLzRGqpWZa1UK1W7xkp6uTk5HC9Xn+ApGbIWigUrm9tbR0Y9xm1ubtHUjMoNfM08mBqjnyNYs5UUcfI1ijGTBUV4EJYSXkjSqk/pbuf0nGcloPSyy1qeyzdRkprm5HaRhD1X+57njefxiSLxeKadLda/MmGwbWx6wdAVEBUAEQFRAVAVABEBUQFQFQARAVEBUBUAEQFRAXoGZbJxTmO82K9Xv86d3rJRKCU+sm27Xdc131ETcyoiaBcLl+VQH+WxRvNOvNBEMzJcxvFYnGMmhA1EYH6vr8miy+d8/JVCXctbcGaWFOmRX0m0Gst/mwyTcGaWFOmRe0w0FQFa2JNmRY1ZKCpCNbEmjIt6gUDTXSwJtaUaVE7DHRFKbWclmBNrCnTonYa6M7OzpLnebfTEKyJNWVa1DCBnj1IerAm1pRpUS8SaNKDNbGmTIvaTaBJDdbEmjIt6uzs7CUJ9JtuAg0TrLRvp6amBqkJUUOxv7//rnTT3QbaabAyA10/PDx8j5oQNSzjUQUaYhYapyZEDctdPSlEFWiHwf5ATYgadvAr0unw9K1x9O+OPhkYGLjdTaDPBivrWtLrbD7ly/LHtVrtR2pC1NBIgJ/n8/mStDd0L4O+HNW6ZV0rEmxZ2puFQmFCgv6UmpJBKs/w397efijdw7StO2s1ZXpGhWyCqICoAIgKiAqAqACICogKgKgAiAqICoCoAIgK6SJJZ0/NNG+5HSV5aVeCIBhWSvXsOiFZ/wttXr8ptf3Rg+0eSV0Hsrgnze9VLoj630EfyfXwvvCy/r6Os2z/co/qGpXOYdcPkEFRdxlyo9g1VdQK2RpFxUhRbdtela5GvkZQa+Zpnqiu6x5YlrWArOmXVOeo84xrgyrOo2Gl1NPecZzhRqOxmDu9BU0vfgtpusVR9rG8j796VaK0wWavB/Yod/41+90c5euvwqznjO9j6TZ6/Jm0omfSM0nj8qcvovYa/X2s1HXrOe/hrud582mdypJWW1z+8PUUpAJEBUQFQFRAVABEBUBUQFQARAVAVEBUAEQF+AeLIWiNvquedC8rpX6pVqt7Ua87CIKpwcHBX13X3WG0mVEvxPj4+Pu+79ekfa/7Uqn0YVTrlnUtnZycbEv7rl6vV4vF4keMOKKGRsTR58qunO11ZOa7JFLdEXk/i+AfwLKsa1mvs/lUXpY/EXlvMvKIGhZ9zud5J9B+0I2sWtLc6X2lzuM1hh1Rw9LqM+OFZG0jabttIir8n9HR0a9yrS/rCCVrO0nlYO3B0NDQF4w8ooZifX39ST6ff1sWf+tWVvm8e6fNTLol7a3Nzc0jRh5RQ6PveCeyzncjq5ZUDpRafVuwJbPpvOd5/DgHovZHViRF1MTLiqTRwv9MhZC1XC7P+76/Jg+vtZBVHxidICkzauJnViRF1LTIiqSImlpZkRRREy8rkiJqf2UVAV9vIyuSImr/0QI2Z9bfz3n5IZIiaqJm1kKh8Ios3pN2Is0XQSvy3DSSRgPfo0aE67qPpHuVkWBGBUQFQFQARAVEBUBUAEQFRAVAVABEBUQFQFQARAVEBYiOLJ7mN6Pv0Jzm94+oGSAIgpHc6U9KArt+AETthKxe/rGLqOmiklFRK4iaImzbXpWuljFJa826ETUtuK57YFnWQoZkrel6dd2mFqjkKDi+jSkVa3GO4ww3Go1FWdR3OBkz9DNpRc+k/ZI0Ln9iFRWAXT8gKgCiAiAqICoAogIgKiAqAKICogIgKgCiAqICICpAGP4GuPl8LTx4XmUAAAAASUVORK5CYII="
          alt="logo"
        ></img>
        <span>Muse Dashboard</span>
      </div>
      <hr />
      <Menu
        className={styles['menu-container']}
        items={items}
        selectedKeys={[location.pathname]}
      />
      <div className={styles['documant-container']}>
        <div>
          <span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 4C3 3.44772 3.44772 3 4 3H16C16.5523 3 17 3.44772 17 4V6C17 6.55228 16.5523 7 16 7H4C3.44772 7 3 6.55228 3 6V4Z"
                fill="#1890ff"
              ></path>
              <path
                d="M3 10C3 9.44771 3.44772 9 4 9H10C10.5523 9 11 9.44771 11 10V16C11 16.5523 10.5523 17 10 17H4C3.44772 17 3 16.5523 3 16V10Z"
                fill="#1890ff"
              ></path>
              <path
                d="M14 9C13.4477 9 13 9.44771 13 10V16C13 16.5523 13.4477 17 14 17H16C16.5523 17 17 16.5523 17 16V10C17 9.44771 16.5523 9 16 9H14Z"
                fill="#1890ff"
              ></path>
            </svg>
          </span>
          <h6>Need help?</h6>
          <p>Please check our docs</p>
          <a href="/">
            <button>Documentation</button>
          </a>
        </div>
      </div>
    </Sider>
  )
}
