import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Products = () => {
  const [AllProducts, setAllProducts] = useState([]);
  const [id, setId] = useState("");

  useEffect(() => {
    getProducts();
  }, []);
  // 
  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/products");
    result = await result.json();

    // Check if the result is an array
    if (Array.isArray(result)) {
      setAllProducts(result);
    } else {
      console.error('Expected array but received:', result);
    }
    console.log(result);
  };
  // DELETE FUNCTION.
  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:5000/product/${id}`, {
      method: "Delete"
    })
    result = await result.json();
    if (result) {
      alert("Record deleted successfully.!")
      getProducts();
    }

  }
  // 
  return (
    <div className='product-list'>
      <h3>Products list</h3>
      <ul>
        <li>S. No</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Company</li>
        <li>Actions</li>
      </ul>
      {AllProducts?.length > 0 ? (
        AllProducts.map((item, index) => (
          <ul key={index}>
            <li>{index + 1}</li>
            <li>{item.name}</li>
            <li>{item.price}</li>
            <li>{item.category}</li>
            <li>{item.company}</li>
            <li>
              <Link className="update-link" style={{ cursor: "pointer", fontSize: "10px", }}
                to={"/UpdateProduct/" + item._id}>Update</Link>&nbsp;

              <button className="update-link" style={{ cursor: "pointer", fontSize: "10px" }}
                onClick={() => deleteProduct(item._id)}>Delete</button>
            </li>
          </ul>
        ))
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
};

export default Products;
