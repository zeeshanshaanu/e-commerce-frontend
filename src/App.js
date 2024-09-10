import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from "./screens/AuthModule/Signup";
import PrivateRoute from "./components/privateRoutes/PrivateRoute";
import Login from "./screens/AuthModule/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route element={<PrivateRoute />}>
            <Route path="/Products" element={<h1>This is all product component</h1>} />
            <Route path="/AddProduct" element={<h1>This is add product component</h1>} />
            <Route path="/UpdateProduct" element={<h1>This is Update product component</h1>} />
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
