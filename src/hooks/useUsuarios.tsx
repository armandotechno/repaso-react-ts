import { useRef, useState, useEffect } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqRes';

export const useUsuarios = () => {
   
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    
    const pageRef = useRef(1);

    useEffect(() => {
        // Llamado al API
        // reqResApi.get('/users')
        //     .then( res => {
        //         console.log(res);
        //     })
        //     .catch( err => console.log( err ))
        // (async() => {
        //     try {
        //         const resp = await reqResApi.get<ReqResListado>('/users')
        //         setUsuarios( resp.data.data)
        //     } catch (error) {
        //         console.log(error);
        //     }
        // })()

        cargarUsuarios()
    }, [])

    const cargarUsuarios = async () => {
        try {
            const resp = await reqResApi.get<ReqResListado>('/users', {
                params: {
                    page: pageRef.current
                }
            })

            if ( resp.data.data.length > 0 ) {
                setUsuarios( resp.data.data);
            } else {
                pageRef.current --;
                alert('No hay más registros')
            }

        } catch (error) {
            console.log(error);
        }
    }

    const paginaSiguiente = () => {
        pageRef.current ++;
        cargarUsuarios();
    }

    const paginaAnterior = () => {
        if ( pageRef.current > 1 ) {
            pageRef.current --;
            cargarUsuarios();
        }
    }


    return {
        usuarios,
        paginaSiguiente,
        paginaAnterior,
    }

}
