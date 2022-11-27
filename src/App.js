
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import Navbar from "./components/navBar/NavBar"

function App() {

  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"Bienvenidos a mi tienda online"} />
    </div>
  );
  
}

export default App;


