import './App.css';
import Entrance from "./views/Entrance";
import Header from "./components/Header";
import Top from "./components/Top";
import Form from './components/Form';
import Mid from "./components/Mid";

function App() {
  return (
      <div>
        <Header/>
        <Entrance/>
        <Top/>
         <Mid/>
         <Form/>
      </div>
  );
}

export default App;
