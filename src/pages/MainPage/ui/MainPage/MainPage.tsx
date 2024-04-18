import { memo } from 'react'
import { Sidebar } from '@/widgets/Sidebar'
import { Equipment } from '@/widgets/Equipment'
import { Pool } from '@/widgets/Pool'
import { Hr } from '@/shared/ui/Hr'

export const MainPage = memo(() => (
    <>
        <Sidebar />
        <Equipment />
        <Hr hrVertically />
        <Pool />
    </>
))
