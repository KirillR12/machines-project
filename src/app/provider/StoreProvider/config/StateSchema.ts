import { Station } from '@/entities/StationCard'
import { rtkApi } from '@/shared/api/rtkApi'

export interface StateSchema {
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
    station: Station
}

export type StateSchemaKey = keyof StateSchema
