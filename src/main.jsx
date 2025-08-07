import { createRoot } from 'react-dom/client'
import './index.css'
import Providers from './providers/Providers.jsx'
import Layout from './layout/Layout.jsx'

createRoot(document.getElementById('root')).render(
  <Providers>
    <Layout/>
  </Providers>,
)
