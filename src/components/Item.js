const Item = (props) => {
  return (
    <div className="item">
      <figure>{props.producto.pictureUrl}</figure>
      <h2>{props.producto.title}</h2>
      <p>{props.producto.description}</p>
      <p>{props.producto.price}</p>
    </div>
  )
}

export default Item