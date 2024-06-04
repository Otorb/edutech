export const imagenPadre = `https://media.istockphoto.com/id/1364917563/es/foto/hombre-de-negocios-sonriendo-con-los-brazos-cruzados-sobre-fondo-blanco.jpg?s=1024x1024&w=is&k=20&c=SEMPK49N4rBMOKGybn8XDfeK475-A4aURSAU--VZRc4=`
export const imagenHijo = `https://st.depositphotos.com/1743476/2206/i/450/depositphotos_22064363-stock-photo-happy-college-student.jpg`

export const infoUser = {
    nameFather: 'Ernesto',
    lastNameFather: 'Pereira',
    nameMother: 'Marcela',
    lastNameMother: 'Cassandro',
    email: 'aFtXa@example.com',
    phone: '123456789',
    address: 'Calle falsa 123',
    hijos: [
        {
            id: 1,
            name: 'Bruno',
            lastName: 'Perez',
            email: 'aFtXa@example.com',
            phone: '123456789',
            imagen: imagenHijo,
            address: 'Calle falsa 123',
            CalificacionesEnMaterias: [
                {
                    id: 1,
                    lengua: 8,
                    matematicas: 7,
                    ingles: 5,
                }
            ]
        },
        {
            id: 2,
            name: 'Pedro',
            lastName: 'Santoro',
            email: 'fgdsgsd@example.com',
            phone: '747474363',
            imagen: imagenHijo,
            address: 'Calle falsa 123',
            CalificacionesEnMaterias: [
                {
                    id: 2,
                    lengua: 5,
                    matematicas: 10,
                    ingles: 9,
                }
            ]
        },
    ]
}