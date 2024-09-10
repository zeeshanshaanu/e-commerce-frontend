import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from "./screens/AuthModule/Signup";
import PrivateRoute from "./components/privateRoutes/PrivateRoute";
import Login from "./screens/AuthModule/Login";
import AddProduct from "./screens/Products/AddProduct";
import Products from "./screens/Products/Products";
import UpdateProduct from "./screens/Products/UpdateProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route element={<PrivateRoute />}>
            <Route path="/Products" element={<Products />} />
            <Route path="/AddProduct" element={<AddProduct />} />
            <Route path="/UpdateProduct/:id" element={<UpdateProduct />} />
            <Route path="/Profile" element={<h1>This is user Profile component</h1>} />
            <Route path="/Logout" element={<h1>This is logout component</h1>} />
          </Route>
          {/*  */}
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
