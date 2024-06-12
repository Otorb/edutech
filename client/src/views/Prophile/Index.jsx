
import { useEffect, useState } from 'react'
import { useAppSelector } from '../../Hooks/useAppSelector'
import ParentsAndSons from './ParentsAndSons'
import { listStudients } from '../../Api/Studient'
import { listParents } from '../../Api/Parents'


const Index = () => {

    // let initialState = "Parents"
    // initialState = "Son"
    // initialState = "Parents"

    // const Prevent = (e) => {
    //     e.preventDefault()
    // }
    const [parentsState, setEstado] = useState([])
    // const [studentState, setStudent] = useState([])
    

// const Students = async () => { 

//     const Req = await listStudients()
//     setEstado(Req)
    
// }
const Parents = async () => { 
    
    const Req = await listParents()
    
    setEstado(Req)

}


    useEffect(() => {
        Parents()
    }, [])



    const StudentLogged = useAppSelector((state) => state.user.data);
    // console.log(parentsState)

    
// console.log(StudentLogged)


    return (
        <>
            <ParentsAndSons estado={StudentLogged} estado2={parentsState} />
        </>
    )
}
export default Index

