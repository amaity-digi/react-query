import './App.css';
import CreateUser from './components/CreateUser';
import UsersDetails from './components/UsersDetails';

function App() {
  return (
    <div className="App">
   <h2>Hello User</h2>
   <CreateUser />
   <UsersDetails />
    </div>
  );
}

export default App;
