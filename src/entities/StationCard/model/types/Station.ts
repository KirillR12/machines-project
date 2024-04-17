import { statusType } from '@/shared/types/status'

export interface Station {
name: string
currentJobs?: string
description: string
panel: string
panelDesctiption: string
progress: number
status: statusType
}
