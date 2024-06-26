import { createRoot } from 'react-dom/client'
import '@/app/styles/index.css'
import { App } from './app/App'

const container = document.getElementById('root')
if (!container) {
    throw new Error('Контейнер root не найден')
}
const root = createRoot(container)
root.render(
    <App />,
)
