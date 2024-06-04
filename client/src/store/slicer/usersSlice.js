import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { listParents } from '../../Api/Parents';
import { listStudients } from '../../Api/Studient';
import { listTeachers } from '../../Api/Teachers';

const initialState = {
  usersData: [],
  loading: 'inactiva', 
  error: null,
};

export const cargarUsuarios = createAsyncThunk('usuarios/cargarUsuarios', async () => {
  const responseParents = await listParents(); 
  const responseStudients = await listStudients(); 
  const responseTeachers = await listTeachers(); 
  const combinedData = [
    ...responseParents.data.resultGetAllParents,
    ...responseStudients.data.resultStudent,
    ...responseTeachers.data.resultTeacher,
  ];
  
  return combinedData
});

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(cargarUsuarios.pending, (state) => {
        state.loading = 'cargando'; 
        state.error = null; 
      })
      .addCase(cargarUsuarios.fulfilled, (state, action) => {
        state.loading = 'exito'; 
        state.usersData = action.payload; 
      })
      .addCase(cargarUsuarios.rejected, (state, action) => {
        state.loading = 'error'; 
        state.error = action.error.message; 
      });
  },
});

export const { selectUsersData } = usersSlice.actions;
export default usersSlice.reducer;
