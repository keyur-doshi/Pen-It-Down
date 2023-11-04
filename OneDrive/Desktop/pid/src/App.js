import './App.css';
import Header from './Header/Header';
import Rules from './Rules/Rules';
import RegistrationNumberComponent from './RegNum/RegistrationNumberComponent';
import Reg from './RegLink/Reg';

function App() {
  return (
    <div className="App">
      <Header/>
      <Rules/>
      <RegistrationNumberComponent/>
      <Reg/>
    </div>
  );
}

export default App;
