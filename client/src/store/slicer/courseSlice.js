import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { listCursos } from "../../Api/Course";


export const CargarCursos = createAsyncThunk('course/agregarCourse', async () => {
  try {
    const response = await listCursos();

    return response.data
  } catch (error) {
    console.error('Error al agregar eventos:', error);
    throw error;
  }
});





const courseSlice = createSlice({
  name: "course",
  initialState: {
    courseData: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(CargarCursos.fulfilled, (state, action) => {
        state.loading = 'exito';
        state.courseData = action.payload; 
      })
      
  },
});
  
export const { clearCourseData } = courseSlice.actions;
export default courseSlice.reducer;