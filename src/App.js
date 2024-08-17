import './App.css';
import Create from './Components/Create';
import Read from './Components/Read';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Update from './Components/Update';


function App() {
  return (
   <div className="App"> 
    <BrowserRouter>
     <Routes>
       <Route exact path="/" element={<Create />}></Route>
       <Route exact path="/Read" element={<Read />}></Route>
       <Route exact path="/Update" element={<Update />}></Route>
     </Routes>
    </BrowserRouter>
     </div> 
  );
}

export default App;
