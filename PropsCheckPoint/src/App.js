import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayersList from './components/PlayersList';
import Home from './components/Home';
import SideBar from './components/SideBar';


function App() {
  return (
    <div className="App" >
      <Home /> <SideBar />
      <PlayersList />
    </div>
  );
}

export default App;
