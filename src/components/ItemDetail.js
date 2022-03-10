const ItemDetail = (props) => {

  return (
    <div className="item-detail" id={props.detalle.id}>
      <div>
        <figure><span className="material-icons-outlined">{props.detalle.pictureUrl}</span></figure>
      </div>
      <div>
        <h2>{props.detalle.title}</h2>
        <h3>$ {props.detalle.price}</h3>
        <p>{props.detalle.description}</p>
      </div>
    </div>
  )
}

export default ItemDetail