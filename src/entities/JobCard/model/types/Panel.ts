import { statusType } from '@/shared/types/status'

export interface Panel {
    name: string
    nameJobs: string
    status: statusType
    progress: number
}
