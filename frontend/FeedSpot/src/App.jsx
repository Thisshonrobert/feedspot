
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import FetchPosts from './components/FetchPosts';
import '@radix-ui/themes/styles.css';
import ViewPosts from "./pages/ViewPosts";

function App() {
  return (
    <BrowserRouter>
    <FetchPosts/>
    <Routes>
     
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/signin' element={<Signin/>}></Route>
      <Route path='/posts' element={<ViewPosts/>}></Route>
      {/* <Route path='/' element={<Dashboard/>}></Route> */}
      
    </Routes>
  </BrowserRouter>
  )
}

export default App
