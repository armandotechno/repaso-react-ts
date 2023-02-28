import { useEffect, useState } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResListado, Usuario } from "../interfaces/reqRes";

export const Usuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    useEffect(() => {
        // Llamado al API
        // reqResApi.get('/users')
        //     .then( res => {
        //         console.log(res);
        //     })
        //     .catch( err => console.log( err ))
        (async() => {
            try {
                const resp = await reqResApi.get<ReqResListado>('/users')
                setUsuarios( resp.data.data)
            } catch (error) {
                console.log(error);
            }
        })()
    }, [])

    const renderItem = ({ id, avatar, email, first_name, last_name }: Usuario ) => {
        return (
            <tr key={ id.toString() }>
                <td>
                    <img src={ avatar } 
                    alt="Avatar imagen" 
                    style={{
                        width: 35,
                        borderRadius: 100
                    }}
                />
                </td>
                <td>{ first_name }  { last_name }</td>
                <td>{ email }</td>
            </tr>
        )
    }

    return (
        <>
            <h3>Usuarios:</h3>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        usuarios.map( usuario => renderItem(usuario) )
                    }
                </tbody>
            </table>

            <button
                className='btn btn-primary'
            >
                Siguientes
            </button>
        </>
  )
}
