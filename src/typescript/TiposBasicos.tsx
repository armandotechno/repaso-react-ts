
export const TiposBasicos = () => {
  
    const name: string = 'Armando';
    const age: number = 21;
    const isActive: boolean = true;

    const tasks: string[] = ['Estudiar', 'Buscar la comida', 'Practicar todo lo aprendido'];

    return (
    <>
        <h3>Tipos Básicos</h3>
        { name }, { age }, { (isActive) ? 'está activo' : 'no está activo' }
        <br />
        { tasks.join(', ') }
    </>
  )
}
