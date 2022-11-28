import React from 'react';

const ReviewItem = (props) => {
    const {img, name, ratings, price, shipping} = props.product; 
    return (
        <div>
            <h1>this is review item{shipping}</h1>
        </div>
    );
};

export default ReviewItem;