import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart] = useCart(products);
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    cart.map(product => <ReviewItem
                    key ={product.id}
                    product ={product}
                    ></ReviewItem> )
                }
            </div>
            <div className='cart-container'>

                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;