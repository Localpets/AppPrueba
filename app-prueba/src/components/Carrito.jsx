import { useState, useEffect } from 'react'

const Carrito = () => {

  const [data, setData] = useState("hola")

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://rickandmortyapi.com/api/character/1')
      const dataRick = await response.json()


      setData(dataRick)
    }

    fetchData()
  }, [])

  console.log(data)

  return (
    <>
      <div>
          <h1>{data.name}</h1>
          <img src={data.image} alt={data.name} />
      </div>
    </>
  )
}

export default Carrito