import logo from './logo.svg';
import './App.css';
import AddTeacher from './admin/AddTeacher';
import Login from "./student/Login"

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <AddTeacher />
       <Login/>
      </header>
    </div>
  );
}

export default App;
