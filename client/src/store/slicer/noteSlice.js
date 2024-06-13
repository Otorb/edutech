import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getNotes, postNote, deleteNote, updateNote } from '../../Api/Notes';


export const agregarGetNotes = createAsyncThunk('note/agregarGetNotes', async () => {
  try {
    const response = await getNotes();
    console.log(response.data);
    return response.data
  } catch (error) {
    console.error('Error al agregar las nota: ', error);
    throw error;
  }
});


export const crearNote = createAsyncThunk('note/crearNote', async (data) => {
  try {
    const response = await postNote(data);
    return response;
  } catch (error) {
    console.error('Error al crear la nota: ', error);
    throw error;
  }
});


export const eliminarNote = createAsyncThunk('note/eliminarNote', async (id) => {
  try {
    const response = await deleteNote(id);
    return response
  } catch (error) {
    console.error('Error al borrar la nota: ', error);
    throw error;
  }
});


export const editarNote = createAsyncThunk('note/editarNote', async (data) => {
  try {
    console.log('llego al edit slice:',data)
    const response = await updateNote(data);
    console.log(response);
    return response
  } catch (error) {
    console.error('Error al editar la nota:', error);
    throw error;
  }
});


const noteSlice = createSlice({
  name: "note",
  initialState: {
    noteData: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(agregarGetNotes.fulfilled, (state, action) => {
        state.loading = 'exito';
        state.noteData = action.payload; 
      })
      .addCase(crearNote.fulfilled, (state, action) => {
        state.loading = 'exito';
        state.noteData = action.payload;
      })
      .addCase(eliminarNote.fulfilled, (state, action) => {
        state.loading = 'exito';
        state.noteData = action.payload;
      })
      .addCase(editarNote.fulfilled, (state, action) => {
        state.loading = 'exito';
        state.noteData = action.payload;
      })
  },
}); 
  
export const { clearNoteData } = noteSlice.actions;
export default noteSlice.reducer;
