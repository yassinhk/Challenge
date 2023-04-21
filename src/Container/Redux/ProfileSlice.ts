import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    Profile: { profile: null }
}

export const storeProfile = createAsyncThunk('Profile/storeProfile', async (data: any) => {
    return data;
})

export const ProfileSlice = createSlice({
    name: 'Profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(storeProfile.fulfilled, (state, action) => {
                state.Profile.profile = action.payload
            })
    }
})

export default ProfileSlice.reducer