import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { deleteParents, listParents } from '../../Api/Parents';
import { deleteStudient, listStudients } from '../../Api/Studient';
import { deleteTeacher, listTeachers } from '../../Api/Teachers';

const initialState = {
  usersData: [],
  loading: 'inactiva', 
  error: null,
  mensaje: null,
};

export const cargarUsuarios = createAsyncThunk('usuarios/cargarUsuarios', async () => {
  const responseParents = await listParents(); 
  const responseStudients = await listStudients(); 
  const responseTeachers = await listTeachers(); 
  // Filtrar solo los usuarios activos
  const combinedData = [
    ...responseParents.data.resultGetAllParents.filter(parent => parent.active),
    ...responseStudients.data.resultStudent.filter(student => student.active),
    ...responseTeachers.data.resultTeacher.filter(teacher => teacher.active),
  ];
  return combinedData;
});

export const eliminarPadre = createAsyncThunk(
  'usuarios/eliminarPadre',
  async (userData) => {
    const response = await deleteParents(userData);
    return response.data; 
  }
);

export const eliminarEstudiante = createAsyncThunk(
  'usuarios/eliminarEstudiante',
  async (userData) => {
    const response = await deleteStudient(userData);
    return response.data; 
  }
);

export const eliminarProfesor = createAsyncThunk(
  'usuarios/eliminarProfesor',
  async (userData) => {
    const response = await deleteTeacher(userData);
    return response.data; 
  }
);

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
      })
      .addCase(eliminarPadre.fulfilled, (state, action) => {
        state.loading = 'exito'; 
        state.mensaje = action.payload.message;
      })
      .addCase(eliminarEstudiante.fulfilled, (state, action) => {
        state.loading = 'exito'; 
        state.mensaje = action.payload.message;
      })
      .addCase(eliminarProfesor.fulfilled, (state, action) => {
        state.loading = 'exito'; 
        state.mensaje = action.payload.message;
      });
  },
});

export const { selectUsersData } = usersSlice.actions;
export default usersSlice.reducer;

