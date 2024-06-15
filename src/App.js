import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Entete from "./components/entete/Entete";
import AdList from "./components/adList/AdList";
import { useState } from "react";
import {products} from "./Data";
import ProductList from "./components/productList/ProductList";
import AdminCardList from "./components/adminCardList/AdminCardList";
import AdminAddProd from "./components/adminAddProd/AdminAddProd";
import Footer from "./components/Footer";

function App() {
  const [prod, setProd] = useState(products);
  const [search, setSearch] = useState("");
  //------------------------------------------------------
  const handleSearch = (e)=>{
    setSearch(e.target.value);

  };
  const handleDelete = (prodID)=>{
    setProd(prod.filter((el) => el.id !== prodID));
  };

  const handleAdd = (newProduct) => {
    setProd([...prod, newProduct]);
    };

    const handleEdit = (editedProd) => {
      setProd(prod.map((el) => (el.id === editedProd.id ? editedProd : el)));
      };
  return <div className="App">
  <Entete search={search} handleSearch={handleSearch}/>
  <AdList/>
  <ProductList prod={prod} search={search} />
  <hr/> 
  PARTIE ADMINISTRATEUR
  <hr/>
  <AdminCardList prod={prod} search={search} del={handleDelete} edit={handleEdit}/>
  <AdminAddProd add={handleAdd}/>
  <Footer/>
  </div>;
}

export default App;
