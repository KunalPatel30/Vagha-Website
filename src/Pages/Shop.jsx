import React from 'react'
import PageHeader from '../Component/PageHeader'
import ProductCard from '../Component/ProductCard'

function Shop({ updateCartCount }) {
  return (
    <>
        {/* Start Hero Section */}
        <PageHeader heading="Shop" image="./src/assets/images/shop-bg.png"/>
        {/* End Hero Section */}

        {/* Start Product Section */}
        <div className="product-section before-footer-section">
            <div className="container">
                <div className="row">
                    <ProductCard updateCartCount={updateCartCount}/>
                </div>
            </div>
        </div>
        {/* End Product Section */}
    </>
  )
}

export default Shop