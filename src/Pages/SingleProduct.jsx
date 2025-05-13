import React, { useEffect, useState } from 'react';
import '../assets/css/singleproduct.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function SingleProduct({ updateCartCount }) {

    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [qty, setQty] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:3000/product/${id}`)
        .then(res => res.json())
        .then(data => setItem(data))
        .catch(err => console.error('Error fetching product:', err));
    }, [id]);

    // Image Slider Logic

    useEffect(() => {
        if (!item) return;
    
        const imgBtns = Array.from(document.querySelectorAll('.img-select a'));
        let imgId = 1;
    
        const slideImage = () => {
            const displayImg = document.querySelector('.img-showcase img:first-child');
            if (displayImg) {
                const displayWidth = displayImg.clientWidth;
                const showcase = document.querySelector('.img-showcase');
                if (showcase) {
                    showcase.style.transform = `translateX(-${(imgId - 1) * displayWidth}px)`;
                }
            }
    
            // Highlight the active thumbnail
            imgBtns.forEach(btn => btn.parentElement.classList.remove('active'));
            const activeBtn = document.querySelector(`.img-select a[data-id="${imgId}"]`);
            if (activeBtn) {
                activeBtn.parentElement.classList.add('active');
            }
        };
    
        imgBtns.forEach((imgItem) => {
            imgItem.addEventListener('click', (event) => {
                event.preventDefault();
                imgId = parseInt(imgItem.dataset.id);
                slideImage();
            });
        });
    
        window.addEventListener('resize', slideImage);
        slideImage();
    
        return () => {
            window.removeEventListener('resize', slideImage);
        };
    }, [item]);
    

    if (!item) return <p>Loading...</p>;

    const addToCart = async (product) => {
        const userId = localStorage.getItem('userid');
    
        // Step 1: Get all cart items for current user
        const res = await axios.get(`http://localhost:3000/cart?userId=${userId}`);
    
        // Step 2: Check if this product already exists in their cart (by name)
        const existingProduct = res.data.find(item => item.id === product.id);
    
        // Step 3: Clone product and remove unwanted images
        const cleanProduct = { ...product };
        delete cleanProduct.image1;
        delete cleanProduct.image2;
        delete cleanProduct.image3;
        delete cleanProduct.image4; 
    
        if (!existingProduct) {
            await axios.post('http://localhost:3000/cart', { userId, ...cleanProduct, qty });
        } 
        else {
            await axios.put(`http://localhost:3000/cart/${existingProduct.id}`, { ...existingProduct, qty: existingProduct.qty + qty });
        }
    
        await updateCartCount();
        toast.success("Product added to cart!");
    };
    

  return (
    <>
        <div className="product-card-wrapper">
            <div className="product-card">
                {/* card left */}
                <div className="product-imgs">
                    <div className="img-display">
                        <div className="img-showcase">
                            <img src={item.image} alt={item.alt} />
                            <img src={item.image1} alt={item.alt} />
                            <img src={item.image2} alt={item.alt} />
                            <img src={item.image3} alt={item.alt} />
                        </div>
                    </div>
                    <div className="img-select">
                        <div className="img-item">
                            <a href="#" data-id={1}>
                                <img src={item.image} alt={item.alt} />
                            </a>
                        </div>
                        <div className="img-item">
                            <a href="#" data-id={2}>
                                <img src={item.image1} alt={item.alt} />
                            </a>
                        </div>
                        <div className="img-item">
                            <a href="#" data-id={3}>
                                <img src={item.image2} alt={item.alt} />
                            </a>
                        </div>
                        <div className="img-item">
                            <a href="#" data-id={4}>
                                <img src={item.image3} alt={item.alt} />
                            </a>
                        </div>
                    </div>
                </div>
                {/* card right */}
                <div className="product-content">
                    <h2 className="product-title">{item.name}</h2>
                    <div className = "product-rating">
                        <i className = "fas fa-star" style={{color: "#3b5d50"}}></i>
                        <i className = "fas fa-star" style={{color: "#3b5d50"}}></i>
                        <i className = "fas fa-star" style={{color: "#3b5d50"}}></i>
                        <i className = "fas fa-star" style={{color: "#3b5d50"}}></i>
                        <i className = "fas fa-star-half-alt" style={{color: "#3b5d50"}}></i>
                        <span> 4.7(21)</span>
                    </div>
                    <div className="product-price">
                        {/* <p className = "last-price">Old Price: <span>$257.00</span></p> */}
                        <p className="new-price">Price: ₹{item.price}</p>
                    </div>
                    <div className="product-detail">
                        <h2>Description: </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>
                        {/* <ul>
                        <li>Color: <span>Black</span></li>
                        <li>Available: <span>in stock</span></li>
                        <li>Category: <span>Shoes</span></li>
                        <li>Shipping Area: <span>All over the world</span></li>
                        <li>Shipping Fee: <span>Free</span></li>
                        </ul> */}
                    </div>
                    <div className="pro-qty-container">
                        <button className="pro-qty-btn" type="button" onClick={() => setQty(q => Math.max(1, q - 1))}>
                            <i className="fa fa-minus"></i>
                        </button>
                        <input type="number" name="qty" className="qty-input-box" value={qty} onChange={(e) => setQty(Math.max(1, parseInt(e.target.value) || 1))} disabled />
                        <button className="pro-qty-btn" type="button" onClick={() => setQty(q => q + 1)}>
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                    <div className="purchase-info">
                            <button type="button" className="btn" onClick={async () => { await addToCart(item); navigate('/cart');}}>
                                Add to Cart <i className="fas fa-shopping-cart ms-2" />
                            </button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SingleProduct