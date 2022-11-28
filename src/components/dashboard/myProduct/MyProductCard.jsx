import React from 'react';


const MyProductCard = ({ product,handleDeleteProduct }) => {

    const { productName, price, selected, phone, location, purchaseYear, description, imgUrl,_id } = product;


    return (
        <div className="card w-96 shadow-xl border-2">
            <figure><img className='h-80 rounded-none' src={imgUrl} alt="bike" /></figure>
            <div className="card-body bg-zinc-300">
                <h2 className="card-title font-bold text-3xl">{productName}</h2>
                <p className='text-lg font-semibold'>Condition : <span className='text-lg font-bold'>{selected}</span>
                </p>
                <p className='text-lg font-semibold'>Years Of Use: <span className='text-lg font-bold'>{purchaseYear}</span>
                </p>
                <p className='text-lg font-semibold'>phone: <span className='text-lg font-bold'> {phone}</span>
                </p>
                <p className='text-lg font-semibold'>Price : <span className='text-lg font-bold text-green-700'>${price}</span>
                </p>
                <p className='text-lg font-semibold'>location: <span className='text-lg font-bold'>{location}</span>
                </p>

                <p className='text-lg font-semibold'>description: <span className='text-lg font-bold'>{description}</span>
                </p>
                <div className='flex justify-between'>
                    <div className="card-actions ">
                        <label className="btn btn-primary">
                            sold
                        </label>

                    </div>
                    <div className="card-actions ">
                        <label onClick={()=>handleDeleteProduct(_id)} className="btn bg-red-600 border-none">
                           Delete
                        </label>

                    </div>
                </div>


            </div>



        </div>
    );
};

export default MyProductCard;