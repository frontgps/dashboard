import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import styles from '@/layout/Sidebar.module.scss';
import { useLocation } from 'react-router-dom';
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

export default function Sidebar() {
  const items = [
    {
      key: '1',
      icon: <span>{dashboardIcon}</span>,
      label: <a>Dashboard</a>,
    },

    {
      key: '2',
      icon: <span>{tablesIcon}</span>,
      label: <a>Tables</a>,
    },

    {
      key: '3',
      icon: <span>{billingIcon}</span>,
      label: <a>Billing</a>,
    },

    {
      key: '4',
      icon: <span>{rtlIcon}</span>,
      label: <a>RTL</a>,
    },
    {
      key: '5',
      label: <span>Accout pages</span>,
    },

    {
      key: '6',
      icon: <span>{profileIcon}</span>,
      label: <a>Profile</a>,
    },

    {
      key: '7',
      icon: <span>{siderSigninIcon}</span>,
      label: <a>Sign in</a>,
    },

    {
      key: '8',
      icon: <span>{siderSignupIcon}</span>,
      label: <a>Sign up</a>,
    },
  ];

  const location = useLocation();

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
      <Menu className={styles['menu-container']} items={items} selectedKeys={[location.pathname]} />
      <div className={styles['documant-container']}>
        <div>
          <span>{documentationIcon}</span>
          <h6>Need help?</h6>
          <p>Please check our docs</p>
          <a href="/">
            <button>Documentation</button>
          </a>
        </div>
      </div>
    </Sider>
  );
}
