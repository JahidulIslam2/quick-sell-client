import React from 'react';

const CategoryCard = ({ category }) => {
    const { name, img, location, postedTime, sellersName, conditionType, originalPrice, resalePrice, yearsOfUse } = category;
    return (
        <div>
            <div className="card w-96 shadow-xl border-2">
                <figure><img src={img} alt="bike" /></figure>
                <div className="card-body bg-zinc-300">
                    <h2 className="card-title font-bold text-3xl">{name}</h2>
                    <p className='text-lg font-semibold'>Condition : <span className='text-lg font-bold'>{conditionType}</span>
                    </p>
                    <p className='text-lg font-semibold'>Years Of Use: <span className='text-lg font-bold'>{yearsOfUse}</span>
                    </p>
                    <p className='text-lg font-semibold'>Price Original: <span className='text-lg font-bold'> ${originalPrice}</span>
                    </p>
                    <p className='text-lg font-semibold'>Resale Price : <span className='text-lg font-bold text-green-700'>${resalePrice}</span>
                    </p>
                    <p className='text-lg font-semibold'>location: <span className='text-lg font-bold'>{location}</span>
                    </p>
                    <p className='text-lg font-semibold'>posted Time: <span className='text-lg font-bold'>{postedTime}</span>
                    </p>
                    <p className='text-lg font-semibold'>Sellers Name: <span className='text-lg font-bold'>{sellersName}</span>
                    </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;