import React, { useState } from 'react'

const UpdateProduct = () => {
  const [name, setName] = useState('')
  const [price, setprice] = useState('')
  const [category, setcategory] = useState('')
  const [company, setcompany] = useState('')
  const [error, seterror] = useState('')

  const ProductUpdate = async () => {

    console.log("result");
  }

  return (
    <div>
      <center>
        <h4>Update Product</h4>

        <input className="inputBox" type="text" placeholder='Enter name' value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input className="inputBox" type="text" placeholder='Enter Price' value={price}
          onChange={(e) => setprice(e.target.value)}
        />
        <input className="inputBox" type="text" placeholder='Enter category' value={category}
          onChange={(e) => setcategory(e.target.value)}
        />
        <input className="inputBox" type="text" placeholder='Enter company' value={company}
          onChange={(e) => setcompany(e.target.value)}
        />
        <button type='button' className='appButton' onClick={ProductUpdate}>Update</button>
      </center>
    </div>
  )
}



export default UpdateProduct
