import { memo } from 'react'
import { Sidebar } from '@/widgets/Sidebar'
import { Equipment } from '@/widgets/Equipment'

export const MainPage = memo(() => (
    <>
        <Sidebar />
        <Equipment />
    </>
))
