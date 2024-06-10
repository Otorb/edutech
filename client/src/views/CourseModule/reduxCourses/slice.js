import { createSlice, configureStore } from '@reduxjs/toolkit'


const slice = createSlice({
    name: "requestCursos",
    initialState:{
        data: [],
    },
    reducers:{
        getPetition: (state, action)=> {
            return action.payload;
        },
        postPetition: (state, action)=> {
            state.data.push(action.payload)
        },
        putPetition: (state, action) => {
            const { id, value} = action.payload
            const DatosCurso = state.data.find(e => e.id === id)
            DatosCurso = DatosCurso ? value : null
        },
        deletePetition: (state, action) => {
            const id = action.payload
            state = state.data.filter(e => e.id !== id)
            
        }
    }
})

export  const {  getPetition,postPetition, putPetition, deletePetition } = slice.actions

export const  store = configureStore({
    reducer: {
        requestCursos: slice.reducer,
    }
})


