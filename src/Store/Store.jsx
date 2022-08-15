import { configureStore } from '@reduxjs/toolkit'
import userData from '../Slice/userData'

export const store = configureStore({
    reducer: {
        user: userData
    },
})