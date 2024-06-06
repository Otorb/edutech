import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async ({ email, token, rol, nameUser, photoUser }, { rejectWithValue }) => {
    try {
      if (rol === "admin") {
        return { email, rol, nameUser, photoUser }; 
      } else {
        const response = await axios.get(
          `https://edusync-fbva.onrender.com/${rol}/searchAll`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(email[0])
        const userData = response.data.resultStudent.find(
          (user) => user.email === email[0]
          );
          
          console.log(userData)
        return userData;
      }
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
