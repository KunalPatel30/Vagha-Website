import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function ProductCard({ limit, updateCartCount }) {

    const [alldata, setAlldata] = useState([]);
    
    const navigate = useNavigate();

    useEffect(() => {
        fetch();
    },[])

    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/product`);
        if(limit) {
            setAlldata(res.data.slice(0, limit));
        }
        else{
            setAlldata(res.data);
        }
    }

    const addToCart = async (product) => {
        const userId = localStorage.getItem('userid');
    
        // Step 1: Get all cart items for current user
        const res = await axios.get(`http://localhost:3000/cart?userId=${userId}`);
    
        // Step 2: Check if this product already exists in their cart (by name)
        const existingProduct = res.data.find(item => item.name === product.name);

        // Step 3: Clone product and remove unwanted images
        const cleanProduct = { ...product };
        delete cleanProduct.image1;
        delete cleanProduct.image2;
        delete cleanProduct.image3;
        delete cleanProduct.image4; 
    
        if (!existingProduct) {
            // Create new cart item with unique id
            await axios.post('http://localhost:3000/cart', { userId, ...cleanProduct, id: Date.now().toString() }); // ensure unique cart item ID
            
        } else {
            // Update qty if it already exists
            await axios.put(`http://localhost:3000/cart/${existingProduct.id}`, {
                ...existingProduct,
                qty: existingProduct.qty + 1
            });
        }
    
        await updateCartCount();
        toast.success("Product added to cart!");
    };

  return (
    <>
        {
            alldata.map((item) => {
                return (
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-5" key={item.id}>
                        <div className="product-item" >
                            <Link to={`/singleProduct/${item.id}`}>
                                <img src={item.image} className="img-fluid product-thumbnail" />
                            </Link>
                            <h3 className="product-title">{item.name}</h3>
                            <strong className="product-price">₹{item.price}</strong>
                            <span className="icon-cross">
                                <button onClick={async () => { await addToCart(item); navigate('/cart');}} style={{ background: 'transparent', border: 'none'}}>
                                    <img src="./src/assets/images/cross.svg" className="img-fluid" />
                                </button>
                            </span>
                        </div>
                    </div>  
                )
            })
        } 
    </>
  )
}

export default ProductCard