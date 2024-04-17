import { MainPage } from '@/pages/MainPage'
import { StoreProvider } from './provider/StoreProvider'

export function App() {
    return (
        <div className="app">
            <StoreProvider>
                <MainPage />
            </StoreProvider>
        </div>
    )
}
