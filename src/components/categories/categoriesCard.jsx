import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesCard = ({ item }) => {
    const { name, img, from,id } = item;

    return (
        <div className="card w-96 bg-regal-blue p-0 m-0  shadow-2xl image-full">
            <figure><img src={img} alt="bike" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl">{name}</h2>
                <p className='text-xl font-semibold'>From ${from}</p>
                <div className="card-actions justify-end">
                    <Link to={`/category/${id}`}>
                        <button className="btn btn-primary bg-green-600 border-none">See More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CategoriesCard;