import { Job } from '@/entities/JobCard'
import { rtkApi } from '@/shared/api/rtkApi'

const poolContentApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getListJobs: build.query<Job[], null>({
            query: () => ({
                url: '/jobs',
            }),
        }),
    }),
})

export const usePoolContentApi = poolContentApi.useGetListJobsQuery
