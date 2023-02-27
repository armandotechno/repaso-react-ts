
interface Person {
    fullName: string;
    age: number;
    address: Address
}

interface Address {
    country: string;
    house: number;
}


export const ObjetosLiterales = () => {

    const person: Person = {
        fullName: 'Armando',
        age: 21,
        address: {
            country: 'Venezuela',
            house: 30
        }

    }

  return (
    <>
        <h3>Objetos Literales</h3>
        <code>
            <pre>
                { JSON.stringify(person, null, 2) }
            </pre>
        </code>
    </>
  )
}
