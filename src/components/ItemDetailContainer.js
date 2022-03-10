import ItemDetail from "./ItemDetail"
import { useState, useEffect } from "react"

let detalleProducto = [
  {
    id: 1,
    title: "Producto 1",
    description: "Descripcion 1",
    price: 100,
    pictureUrl: "image1.jpg"
  },
  {
    id: 2,
    title: "Producto 2",
    description: "Descripcion 2",
    price: 200,
    pictureUrl: "image2.jpg"
  },
  {
    id: 3,
    title: "Producto 3",
    description: "Descripcion 3",
    price: 300,
    pictureUrl: "image3.jpg"
  },
  {
    id: 4,
    title: "Producto 4",
    description: "Descripcion 4",
    price: 400,
    pictureUrl: "image4.jpg"
  }
]

const ItemDetailContainer = () => {

  const [loading, setLoading] = useState(true)
  const [detalle, setDetalle] = useState({})

  useEffect(() => {
    const ped = new Promise((res,rej)=>{
      setTimeout(()=>{
        res(detalleProducto[2])
      },2000)
    })
    
    ped
    .then((resu)=>{
      console.log("Estuvo bien")
      setDetalle(resu)
    })
    .catch((error)=>{
      console.log("Estuvo mal")
    })
    .finally(()=>{
      setLoading(false)
    })

  },[])

  if(loading){
    return <h1 className="load">Cargando...</h1>
  }else{
    return <ItemDetail detalle={detalle} />
  }

}

export default ItemDetailContainer