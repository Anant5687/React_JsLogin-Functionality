import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userInfo: JSON.parse(localStorage.getItem('token'))
}

export const userData = createSlice({
    name: 'user',
    initialState,
    reducers: {

        storingUserInfo: (state, action) => {
            state.userInfo = action.payload
            localStorage.setItem('token', JSON.stringify(action.payload))
        }
    },
})

export const { storingUserInfo } = userData.actions

export default userData.reducer