import React from 'react';
import { useContext } from 'react';
import { ContextProvider } from '../authContext/AuthContext';

const Bookingmodal = ({ data,setData }) => {
    const { user } = useContext(ContextProvider)
    const { name, resalePrice } = data;


    console.log(name, resalePrice)
    const handleForm = (event) => {
        event.preventDefault()
        const form = event.target;
        const userName = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;
       
        const booking = {
            userName,
            email,
            phone,
            location,
            name:name,
            resalePrice
        }

        console.log(booking)
        setData(null)

    }


    return (
        <div>

            <input type="checkbox" id="bookingModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    {/* close btn */}
                    <div className="modal-action">
                        <label htmlFor="bookingModal" className="btn btn-ghost" >close</label>
                    </div>
                    <form onSubmit={handleForm}>

                        <input name='name' type="text" defaultValue={user?.displayName} readOnly placeholder="Full Name" className="input input-bordered w-full  my-4" required />

                        <input name='email' type="email" defaultValue={user?.email} readOnly placeholder="Email" className="input input-bordered w-full  my-4 border" required />

                        <input type="text" defaultValue={name} readOnly placeholder="" className="input input-bordered w-full  my-4" />
                        <input type="text" defaultValue={resalePrice} readOnly placeholder="" className="input input-bordered w-full  my-4" />

                        <input name='location' type="text" placeholder="Your Location" className="input input-bordered w-full  my-4" required />

                        <input name='phone' type="phone" placeholder="Phone Number" className="input input-bordered w-full  my-4" required />


                        <button className='btn bg-green-600 w-full'>Submit</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Bookingmodal;