import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { listEvent, getEventById, postEvent } from '../../Api/events';


export const agregarEvents = createAsyncThunk('event/agregarEvent', async () => {
  try {
    const response = await listEvent();
    console.log(response);
    return response.resultsId;
  } catch (error) {
    console.error('Error al agregar eventos:', error);
    throw error;
  }
});



//no hace falta esta 
export const buscarEventsId = createAsyncThunk('event/buscarEventId', async (data) => {
  try {
    const response = await getEventById(data.id);
    console.log(response);
    return response.resultsId;
  } catch (error) {
    console.error('Error al buscar evento por ID:', error);
    throw error;
  }
});

export const crearEvents = createAsyncThunk('event/crearEvent', async (data) => {
  try {
    const response = await postEvent(data);
    console.log(response);
    return response.resultsId;
  } catch (error) {
    console.error('Error al crear eventos:', error);
    throw error;
  }
});


const eventSlice = createSlice({
  name: "event",
  initialState: {
    eventData: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(agregarEvents.fulfilled, (state, action) => {
        state.loading = 'exito';
        state.eventData = action.payload; 
      })
      .addCase(buscarEventsId.fulfilled, (state, action) => {
        state.loading = 'exito';
        state.eventData = action.payload;
      })
      .addCase(crearEvents.fulfilled, (state, action) => {
        state.loading = 'exito';
        state.eventData = action.payload;
      });
  },
});
  
export const { clearEventData } = eventSlice.actions;
export default eventSlice.reducer;
