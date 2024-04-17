import { Station } from '@/entities/StationCard'
import { rtkApi } from '@/shared/api/rtkApi'

const equipmentContentApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getListStation: build.query<Station[], null>({
            query: () => ({
                url: '/stationListBig',
            }),
        }),
    }),
})

export const useEquipmentContentApi = equipmentContentApi.useGetListStationQuery
