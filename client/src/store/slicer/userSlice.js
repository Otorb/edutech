import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async ({ email, token, rol, nameUser, photoUser }, { rejectWithValue }) => {
    try {
      let userData;
      if (rol === "admin") {
        userData = { email, rol, nameUser, photoUser }; 
      } else {
        let response;
        if (rol === "parent") {
          response = await axios.get(
            `https://edusync-fbva.onrender.com/parent/searchAll`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          
          userData = response.data.resultGetAllParents.find(
            (parent) => parent.email === email
          );
        } else if (rol === "teacher") {
          response = await axios.get(
            `https://edusync-fbva.onrender.com/teacher/searchAll`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          userData = response.data.resultTeacher.find(
            (teacher) => teacher.email === email
          );
        } else {
          response = await axios.get(
            `https://edusync-fbva.onrender.com/${rol}/searchAll`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          userData = response.data.resultStudent.find(
            (user) => user.email === email
          );
        }
        if (!userData) {
          // Si no se encontraron datos para el usuario, puedes lanzar un error o manejarlo de alguna otra manera
          throw new Error("User data not found");
        }
      }
      return { ...userData, role: rol };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
    loading: false,
    error: null,
    nameUser: null,
    photoUser: null,
  },
  reducers: {
    clearUserData: (state) => {
      state.data = null;
      state.nameUser = null;
      state.photoUser = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.rol === "admin") {
          state.nameUser = action.payload.nameUser;
          state.photoUser = action.payload.photoUser;
        }
        state.data = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearUserData } = userSlice.actions;
export default userSlice.reducer;
