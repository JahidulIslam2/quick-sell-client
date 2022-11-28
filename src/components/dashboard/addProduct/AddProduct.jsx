import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { ContextProvider } from '../../authContext/AuthContext';

const AddProduct = () => {
    const {user}=useContext(ContextProvider)
const email=user.email;
    const navigate =useNavigate();


    const formHandler =(event) =>{
        event.preventDefault();
        const form =event.target;
        const productName = form.productName.value;
        const price = form.price.value;
        const selected = form.selected.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const purchaseYear = form.purchaseYear.value;
        const description = form.description.value;
        const imgUrl =form.imgUrl.value;


        console.log(productName,price,selected,phone,location,purchaseYear,description,imgUrl);

        const product ={
            productName,
            price,
            selected,
            phone,
            location,
            purchaseYear,
            description,
            imgUrl,
            email
           
        }

        fetch('https://quick-sell-server.vercel.app/myProduct',{
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            toast.success('Successfully Add Your Product');
            form.reset();
            navigate('/dashboard/myProduct')
            
        })
        
        
    }



    return (
        <div>
            <h1 className='text-3xl font-bold my-6'>Add Your Product </h1>
            <section className="p-6 text-gray-900 bg-gray-300 flex items-center justify-center border">
                <form onSubmit={formHandler} className='w-96 '>

                    <input name='productName' type="text" placeholder="Product Name" className="input input-bordered w-full  my-4" required />

                    <input name='price' type="text" placeholder="Product Price" className="input input-bordered w-full  my-4 border" required />

                    <select name='selected' className="select select-bordered w-full max-w-xs text-black">
                        <option disabled selected>Select Condition Type</option>
                        <option value='good'>Good</option>
                        <option value='fair'>Fair</option>
                         <option value='excellent'>Excellent</option>
                    </select>

                    <input name='phone' type="phone" placeholder="Phone Number" className="input input-bordered w-full  my-4" required />

                    <input name='location' type="text" placeholder="Your Location" className="input input-bordered w-full  my-4" required />

                    <input name='purchaseYear' type="text" placeholder="Year of purchase" className="input input-bordered w-full  my-4" />

                    <input name='email' type="email" defaultValue={email} readOnly placeholder="Your Email" className="input input-bordered w-full  my-4" />

                    <input name='imgUrl' type="text" placeholder="image url" className="input input-bordered w-full  my-4" required/>

                    <textarea name='description' className="textarea w-full my-4" placeholder="Description"></textarea>

                    <button className='btn bg-green-600 w-full'>Submit</button>
                </form>
            </section>
        </div>
    );
};

export default AddProduct;