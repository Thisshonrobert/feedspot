
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import '@radix-ui/themes/styles.css';

function App() {

  return (
    <BrowserRouter>
    <Routes>
     
       <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/signin' element={<Signin/>}></Route>
      {/* <Route path='/' element={<Dashboard/>}></Route> */}
      
    </Routes>
  </BrowserRouter>
  )
}

export default App
