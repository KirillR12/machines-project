import { memo } from 'react'
import { Sidebar } from '@/widgets/Sidebar'
import { Equipment } from '@/widgets/Equipment'
import { Pool } from '@/widgets/Pool'

export const MainPage = memo(() => (
    <>
        <Sidebar />
        <Equipment />
        <Pool />
    </>
))
