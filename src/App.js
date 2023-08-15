import './styles/App.css';
import Home from './pages/home/home';
import Players from "./pages/players/players"
import {Link , Route} from "wouter" ; 
import MenuLateral from './componentes/MenuLateral.js'
import Reglamento from './pages/rules/rules';
import guardarJugadoresLocal from "./servicios/guardarJugadoresLocal"

function App() {
  return (
    <section className = "App-Content">
      <MenuLateral/>
      
      <Route
        component = {Home}
        path = "/" 
      />
      <Route
        component = {Players}
        path = "/players"
      />
      <Route
        component = {Reglamento} 
        path = "/rules"
         
      />

    </section>

  );
}

export default App;
