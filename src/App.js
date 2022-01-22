import { useEffect, useState } from "react";
import Contact from "./components/Contact";
import MenuBodyCards from "./components/MenuBodyCards";
import NavBar from "./components/NavBar";
import data from "./data";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductManage from "./components/ProductManage";
import Form from "./components/Form";
import { Cart } from "./components/Cart";
import UserPayPage from "./components/UserPayPage";
import RegisterPage from "./components/RegisterPage";
import DriverPage from "./components/DriverPage";

function App() {
  const [products, setProducts] = useState();
  useEffect(() => {
    setProducts(data.products);
  }, []);
  return (
    <div className="app">
      <div className="choco"></div>
      <Router>
        <NavBar />
        <Route
          exact
          path="/"
          render={(props) => <MenuBodyCards {...props} products={products} />}
        />
        <Route
          exact
          path="/productmanage"
          render={(props) => <ProductManage {...props} products={products} />}
        />
        <Route exact path="/form/:id" render={() => <Form />} />
        <Route exact path="/cart" render={() => <Cart />} />
        <Route exact path="/userpay" render={() => <UserPayPage />} />
        <Route exact path="/register" render={() => <RegisterPage />} />
        <Route exact path="/driver" render={() => <DriverPage />} />
      </Router>
    </div>
  );
}

export default App;
