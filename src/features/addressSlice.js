import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const BASE_URL = `https://api.zippopotam.us/IN`

export const fetchAddress = createAsyncThunk(
  'address/fetchAddress',
  async (code) => {
    const response = await axios.get(`${BASE_URL}/${code}`)
    return response.data
  },
)

const addressSlice = createSlice({
  name: 'address',
  initialState: {
    data: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddress.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export default addressSlice.reducer
