import { Station } from '@/entities/StationCard'
import { statusType } from '@/shared/types/status'
import { Panel } from './Panel'

export interface Job {
    name?: string
    description: string
    currentJobs: string
    panel: string
    panelDesctiption: string
    progress: number
    status: statusType
    abbreviation?: string
    panels?: Panel[]
    stationList?: Station[]
}
