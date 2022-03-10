import NavBar from "./components/NavBar"
//import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"

const App = () => {

  /*const user = {
    name: "Jack",
    lastname: "Cruzado"
  }*/

  return (
    <>
      <NavBar/>
      {/* <ItemListContainer user={user}/> */}
      <ItemDetailContainer/>
    </>
  )
}

export default App