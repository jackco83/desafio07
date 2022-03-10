import ItemList from "./ItemList"
import { useState, useEffect } from "react"

let productosIniciales = [
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

const ItemListContainer = (props) => {

  const [productos, setProductos] = useState([])

  useEffect(() => {
    const pedido = new Promise((res,rej)=>{
      setTimeout(()=>{
        res(productosIniciales)
      },2000)
    })
    
    pedido
    .then((resultado)=>{
      console.log("Estuvo bien")
      setProductos(resultado)
    })
    .catch((error)=>{
      console.log("Estuvo mal")
    })

  },[])

  return (
    <>
      <h2 className="title">Bienvenido, {props.user.name + " " + props.user.lastname}</h2>
      <ItemList productos={productos}/>
    </>
  )
}

export default ItemListContainer