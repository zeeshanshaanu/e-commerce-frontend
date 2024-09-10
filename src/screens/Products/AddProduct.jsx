import React, { useState } from 'react'

const AddProduct = () => {
  const [name, setName] = useState('')
  const [price, setprice] = useState('')
  const [category, setcategory] = useState('')
  const [company, setcompany] = useState('')
  const [error, seterror] = useState('')

  const ProductAdd = async () => {

    if (!name || !price || !category || !company) {
      seterror(true)
      return false
    }
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    console.log(userId);


    let result = await fetch("http://localhost:5000/add-product", {
      method: "post",
      body: JSON.stringify({ name, price, category, company, userId }),
      headers: {
        "Content-Type": "application/json"
      },
    });
    result = await result.json()
    console.log(result);
  }

  return (
    <div>
      <center>
        <h4>Add Product</h4>

        <input className="inputBox" type="text" placeholder='Enter name' value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {error && !name && <span className='invalid'>Please enter valid name</span>
        }    <input className="inputBox" type="text" placeholder='Enter Price' value={price}
          onChange={(e) => setprice(e.target.value)}
        />
        {error && !price && <span className='invalid'>Please enter valid price</span>
        }     <input className="inputBox" type="text" placeholder='Enter category' value={category}
          onChange={(e) => setcategory(e.target.value)}
        />
        {error && !category && <span className='invalid'>Please enter valid category</span>
        }        <input className="inputBox" type="text" placeholder='Enter company' value={company}
          onChange={(e) => setcompany(e.target.value)}
        />
        {error && !company && <span className='invalid'>Please enter valid company</span>
        }       {/* <input className="inputBox" type="text" placeholder='Enter name' value={name}
          onChange={(e) => setName(e.target.value)}
        /> */}

        <button type='button' className='appButton' onClick={ProductAdd}>Add Product</button>
      </center>
    </div>
  )
}

export default AddProduct
