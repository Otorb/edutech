import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { listEvent, postEvent, deleteEvent, updateEvent } from '../../Api/events';


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


export const crearEvents = createAsyncThunk('event/crearEvent', async (data) => {
  try {
    const response = await postEvent(data);
    return response.resultsId;
  } catch (error) {
    console.error('Error al crear eventos:', error);
    throw error;
  }
});


export const eliminarEvents = createAsyncThunk('event/borrarEvent', async (id) => {
  try {
    const response = await deleteEvent(id);
    return response.resultsId;
  } catch (error) {
    console.error('Error al borrar evento:', error);
    throw error;
  }
});


export const editarEvents = createAsyncThunk('event/editarEvent', async ( data) => {
  try {
    console.log('llego al edit slice:',data)
    const response = await updateEvent( data);
    console.log(response);
    return response
  } catch (error) {
    console.error('Error al editar evento:', error);
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
      .addCase(crearEvents.fulfilled, (state, action) => {
        state.loading = 'exito';
        state.eventData = action.payload;
      })
      .addCase(eliminarEvents.fulfilled, (state, action) => {
        state.loading = 'exito';
        state.eventData = action.payload;
      })
      .addCase(editarEvents.fulfilled, (state, action) => {
        state.loading = 'exito';
        state.eventData = action.payload;
      })
  },
}); 
  
export const { clearEventData } = eventSlice.actions;
export default eventSlice.reducer;
