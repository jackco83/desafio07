import "./NavBar.css"
import CartWidget from "./CartWidget"

const navBar = () => {
  return (
    <header className="main-header">
      <h1>Mi Tienda Virtual</h1>
      <nav>
        <ul>
          <li><a href="/">Verduras</a></li>
          <li><a href="/">Carnes</a></li>
          <li><a href="/">Bebidas</a></li>
        </ul>
      </nav>
      <CartWidget/>
    </header>
  )}

export default navBar