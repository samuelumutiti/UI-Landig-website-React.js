import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import SignUp from "./Signup";
import Login from './Login'

function App() {
  return (
   <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}  />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
