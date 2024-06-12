import { createSlice, configureStore } from '@reduxjs/toolkit'

const SliceCourses = createSlice

const slice = SliceCourses({
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

const StorCourses = configureStore
export  const {  getPetition,postPetition, putPetition, deletePetition } = slice.actions

export const  store = StorCourses({
    reducer: {
        requestCursos: slice.reducer,
    }
})


