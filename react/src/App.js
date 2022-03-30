import logo from './logo.svg';
import './App.css';
import ViewContacts from './pages/ViewContacts/ViewContacts';
import Navbar from './pages/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar className="navbar" props="main"></Navbar>
      </header>
      <ViewContacts></ViewContacts>
    </div>
  );
}

export default App;
