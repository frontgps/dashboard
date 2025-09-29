import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/App'
import { ConfigProvider } from 'antd'
import '@/styles/theme.scss'
import { BrowserRouter } from "react-router-dom";




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider direction="rtl">
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ConfigProvider>
  </StrictMode>
)
