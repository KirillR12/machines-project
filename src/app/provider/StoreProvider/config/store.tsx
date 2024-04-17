import { configureStore } from '@reduxjs/toolkit'
import { rtkApi } from '@/shared/api/rtkApi'

export function createReduxStore() {
    const store = configureStore({
        reducer: {
            [rtkApi.reducerPath]: rtkApi.reducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rtkApi.middleware),
    })

    return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
