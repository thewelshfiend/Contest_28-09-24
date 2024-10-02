import { createSlice } from "@reduxjs/toolkit";

const cache = createSlice({
    name: 'cache',
    initialState: [],
    reducers: {
        cacheItem: (state, action) => {
            const {query, message, result} = action.payload;
            const search = state.find(item => item.query == query)
            if(!search)
            {
                state.push({query, message, result})
            }
        }
    }
})

export default cache.reducer
export const { cacheItem } = cache.actions