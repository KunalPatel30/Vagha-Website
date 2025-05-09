import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import PageHeader from '../Component/PageHeader';

function Cart({ updateCartCount }) {

    const[allData, setAllData]= useState([]);

    useEffect(() => {
        fetch();
    }, []);

    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/cart?userId=${localStorage.getItem("userid")}`);
        setAllData(res.data);
    }

    // delete
    const onDelete = async (id) => {
        const res = await axios.delete(`http://localhost:3000/cart/${id}`);
        if(res.status == 200) {
            toast.success('Product Remove Success');
            fetch();
            updateCartCount();
        }
    }

    // Increment
    const increaseQuantity = async (index) => {
        const updatedProduct = {
            ...allData[index],
            qty: allData[index].qty + 1
        };
        await axios.put(`http://localhost:3000/cart/${updatedProduct.id}`, updatedProduct);
        fetch();
        updateCartCount();
    }; 

    // Decrement
    const decreaseQuantity = async (index) => {
        if (allData[index].qty > 1) {
            const updatedProduct = {
                ...allData[index],
                qty: allData[index].qty - 1
            };
            await axios.put(`http://localhost:3000/cart/${updatedProduct.id}`, updatedProduct);
            fetch();
            updateCartCount();
        }
    };

    // Total Qty, Total Amount, Shipping Charge
    // const cartTotalQty = allData.reduce((acc, data) => acc + data.qty, 0);
    const cartTotalAmount = allData.reduce((acc, data) => acc + data.price * data.qty, 0);
    const shippingCharge = 45;


  return (
    <>
        {/* Start Hero Section */}
        <PageHeader heading="Cart" image="./src/assets/images/cart-bg.png" button2Text="Shop Now"
                    button2Link="/product" />
        {/* End Hero Section */}


        <div className="cart-section">
            <div className="container">
                { allData.length === 0 ? (
                    <div className="col-12 text-center">
                        <h2>Your cart is empty</h2>
                        <p>Looks like you haven’t added anything to your cart yet.</p>
                        <Link to='/product' className="btn btn-outline-black btn-sm btn-block">Continue Shopping</Link>
                    </div>
                    ) : (
                    <>
                        <div className="row mb-5">
                            <form className="col-md-12" method="post">
                                <div className="site-blocks-table">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="product-thumbnail">Image</th>
                                                <th className="product-name">Product</th>
                                                <th className="product-price">Price</th>
                                                <th className="product-quantity">Quantity</th>
                                                <th className="product-total">Total</th>
                                                <th className="product-remove">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            { allData.map((item, index) => {
                                                return (
                                                    <tr key={item.id}>
                                                        <td className="product-thumbnail">
                                                            <img src={item.image} alt="Image" className="img-fluid" />
                                                        </td>
                                                        <td className="product-name">
                                                            <h2 className="h5 text-black">{item.name}</h2>
                                                        </td>
                                                        <td>₹{item.price}</td>
                                                        <td>
                                                            <div className="pro-qty-container justify-content-center">
                                                                <button className="pro-qty-btn" type="button" onClick={() => decreaseQuantity(index)}>
                                                                    <i className="fa fa-minus"></i>
                                                                </button>
                                                                <input type="number" name="qty" className="qty-input-box" value={item.qty} disabled />
                                                                <button className="pro-qty-btn" type="button" onClick={() => increaseQuantity(index)}>
                                                                    <i className="fa fa-plus"></i>
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td>₹{(item.qty * item.price).toFixed(0)}</td>
                                                        <td><Link href="#" onClick={()=>onDelete(item.id)} className="btn btn-black btn-sm">X</Link></td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </form>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row mb-5">
                                    <div className="col-md-6">
                                        <Link to='/product' className="btn btn-outline-black btn-sm btn-block">Continue Shopping</Link>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <label className="text-black h4" htmlFor="coupon">Coupon</label>
                                        <p>Enter your coupon code if you have one.</p>
                                    </div>
                                    <div className="col-md-8 mb-3 mb-md-0">
                                        <input type="text" className="form-control py-3" id="coupon" placeholder="Coupon Code" />
                                    </div>
                                    <div className="col-md-4">
                                        <button className="btn btn-black">Apply Coupon</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 pl-5">
                                <div className="row justify-content-end">
                                    <div className="col-md-7">
                                        <div className="row">
                                            <div className="col-md-12 text-right border-bottom mb-5">
                                                <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-md-6">
                                                <span className="text-black">Subtotal</span>
                                            </div>
                                            <div className="col-md-6 text-right">
                                                <strong className="text-black">₹{cartTotalAmount}</strong>
                                            </div>
                                        </div>
                                        <div className="row mb-3 border-bottom">
                                            <div className="col-md-6">
                                                <span className="text-black">Shipping Charge</span>
                                            </div>
                                            <div className="col-md-6 text-right">
                                                <strong className="text-black">₹{shippingCharge}</strong>
                                            </div>
                                        </div>
                                        <div className="row mb-5">
                                            <div className="col-md-6">
                                                <span className="text-black">Total</span>
                                            </div>
                                            <div className="col-md-6 text-right">
                                                <strong className="text-black">₹{(cartTotalAmount + shippingCharge).toFixed(0)}</strong>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <button className="btn btn-black btn-lg py-3 btn-block">Checkout</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    </>
  )
}

export default Cart