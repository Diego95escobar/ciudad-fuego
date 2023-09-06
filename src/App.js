import NavBar from './components/NavBar/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListConteiner/ItemListContainer';
import Boton from './components/Buttom/buttom';

function App() {
  return (
    <div class='App'>
      <NavBar />
      <div>
        <ItemListContainer greeting={'Bienvenidos'}/>
    </div>
    <div class='boton'>
      <Boton greeting={'Ingresar'}/>
    </div>
    </div>
  );
}

export default App;
