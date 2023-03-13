
import {Route, Routes} from 'react-router-dom';
import Form from './Form';
import Final from './Final';
import './App.css';

function App() {

  
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Form />}/>
        <Route path="/final" element={<Final />}/>
      </Routes>

    </div>
  );
}

export default App;
