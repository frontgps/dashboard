import App from '@/App'
import '@/styles/globals.scss'
import { ConfigProvider } from 'antd'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider direction="rtl">
      <App />
    </ConfigProvider>
  </StrictMode>
)
