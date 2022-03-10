import Item from "./Item"

const ItemList = (props) => {
  return (
    <div className="list-item">
      {props.productos.map((producto)=>{
        return <Item producto={producto} key={producto.id} />
      })}
    </div>
  )
}

export default ItemList