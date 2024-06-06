import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { listEvent } from '../../Api/events'

export const agregarEvents = createAsyncThunk('event/agregarEvent', async (data) => {
    const response = await listEvent();
    console.log(response);
    return response.resultsId;
  });

const eventSlice = createSlice({
    name: "event",
    initialState: {
      eventData: [],
      loading: false,
      error: null,
    },
    reducers: {
    },
    extraReducers: (builder) => {
      builder
      .addCase(agregarEvents.fulfilled, (state, action) => {
        state.loading = 'exito';
        state.eventData=(action.payload); 
      })
    },
  });
  
  export const { clearEventData } = eventSlice.actions;
  export default eventSlice.reducer;
  