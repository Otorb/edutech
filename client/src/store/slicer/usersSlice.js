import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AddParent, deleteParents, listParents } from '../../Api/Parents';
import { AddStudient, deleteStudient, listStudients } from '../../Api/Studient';
import { AddTeacher, deleteTeacher, listTeachers } from '../../Api/Teachers';

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
  console.log(combinedData)
  return combinedData;
});

export const agregarEstudiante = createAsyncThunk('usuarios/agregarEstudiante', async (data) => {
  const response = await AddStudient(data);
  return response.data;
});
export const agregarPadre = createAsyncThunk('usuarios/agregarPadre', async (data) => {
  const response = await AddParent(data);
  return response.data;
});
export const agregarProfesor = createAsyncThunk('usuarios/agregarProfesor', async (data) => {
  const response = await AddTeacher(data);
  return response.data;
});
export const editarPadre = createAsyncThunk('usuarios/aditarPadre', async (data) => {
  const response = await AddTeacher(data); //cambir por el editar padre
  return response.data;
});
export const editarProfesor = createAsyncThunk('usuarios/aditarProfesor', async (data) => {
  const response = await AddTeacher(data); //cambir por el editar profesor
  return response.data;
});
export const editarEstudiante = createAsyncThunk('usuarios/aditarEstudiante', async (data) => {
  const response = await AddTeacher(data); //cambir por el editar estudiante
  return response.data;
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
      .addCase(agregarEstudiante.fulfilled, (state, action) => {
        state.loading = 'exito';
        state.usersData.push(action.payload); 
      })
      .addCase(agregarPadre.fulfilled, (state, action) => {
        state.loading = 'exito';
        state.usersData.push(action.payload); 
      })
      .addCase(agregarProfesor.fulfilled, (state, action) => {
        state.loading = 'exito';
        state.usersData.push(action.payload); 
      })
      .addCase(editarPadre.fulfilled, (state, action) => {
        const editedParent = action.payload;
        const index = state.usersData.findIndex(user => user.id === editedParent.id);
        if (index !== -1) {
            state.usersData[index] = editedParent;
            state.loading = 'exito';
        }
    })
      .addCase(editarProfesor.fulfilled, (state, action) => {
        const editedTeacher = action.payload;
        const index = state.usersData.findIndex(user => user.id === editedTeacher.id);
        if (index !== -1) {
            state.usersData[index] = editedTeacher;
            state.loading = 'exito';
        }
    })
      .addCase(editarEstudiante.fulfilled, (state, action) => {
        const editedStudient = action.payload;
        const index = state.usersData.findIndex(user => user.id === editedStudient.id);
        if (index !== -1) {
            state.usersData[index] = editedStudient;
            state.loading = 'exito';
        }
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

