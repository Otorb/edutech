import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async ({ email, token, role }, { rejectWithValue }) => {
    try {
      let userData;
      let response;

      if (role === "admin") {
        userData = { email, role }; 
      } else {
        const endpoint = role === "parent" 
          ? `https://edusync-fbva.onrender.com/parent/searchAll` 
          : role === "teacher"
          ? `https://edusync-fbva.onrender.com/teachers/allTeacher`
          : `https://edusync-fbva.onrender.com/students/searchAll`;

        response = await axios.get(endpoint, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log('API Response:', response.data);

        if (role === "parent") {
          console.log('Searching for parent with email:', email);
          userData = response.data.resultGetAllParents.find(
            (parent) => parent.email === email
          );
        } else if (role === "teacher") {
          console.log('Searching for teacher with email:', email);
          userData = response.data.resultTeacher.find(
            (teacher) => teacher.email === email
          );
        } else {
          console.log('Searching for student with email:', email);
          userData = response.data.resultStudent.find(
            (user) => user.email === email
          );
        }

        if (!userData) {
          throw new Error("User data not found");
        }
      }

      return { ...userData, role };
    } catch (error) {
      console.error('Error fetching user data:', error);
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearUserData: (state) => {
      state.data = null;
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
