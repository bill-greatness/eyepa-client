import React, { useState } from 'react'
import { HiLocationMarker, HiShoppingCart, HiX } from 'react-icons/hi';
import { useCartContext } from '../context/Cart';
import getStripe from '../pages/utils/get-stripe';

export default function CartModal({ close }) {

    const { cart } = useCartContext()
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('/api/checkout_session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ cart }), 
            });

            const session = await response.json();

            if (response.ok) {
                const stripe = await getStripe();
                stripe.redirectToCheckout({ sessionId: session.id });
            } else {
                console.error(session.message); // Handle errors here
                setIsLoading(false);
            }
        } catch (error) {
            console.error(error.message);
            setIsLoading(false);
        }
    };

    return (
        <div className='absolute flex top-0 -left-10 right-0 bottom-0 z-10'>
            <div onClick={() => close()} className='container mx-auto flex-1 relative'>
                {/* cart modal */}
                <div onClick={(e) => { e.stopPropagation(); }} className='absolute flex flex-col w-svw md:w-2/6 bottom-0 md:bottom-auto md:min-h-64 bg-white border border-gray-100 rounded-md right-0 top-48 z-10 p-5'>
                    <button onClick={() => close()} className='bg-gray-100 p-2 w-fit rounded-full'>
                        <HiX size={18} />
                    </button>
                    {cart.length < 1 ?
                        <div className="flex flex-1 flex-col items-center justify-center space-y-1">
                            <HiShoppingCart size={60} color='gray' />
                            <p className='text-center w-2/3 text-sm text-gray-400 leading-relaxed'>Add items from a restaurant or store to start a new cart</p>
                        </div>
                        :
                        <div className="flex flex-col space-y-5 flex-1 pt-5 ">
                            <div className="bg-gray-100 p-5 rounded-md flex space-x-2 items-start cursor-pointer">
                                <HiLocationMarker size={30} color="gray" />
                                <div className="flex flex-col space-y-1">
                                    <p className="text-xs font-light">Devlivery Location</p>
                                    <p className="text-sm  font-medium">A Arhinful Ave, Sekondi - Takoradi , Ghana</p>
                                </div>
                            </div>
                            {cart.map((product, index) => (
                                <div className="flex items-center justify-between space-x-6" key={index}>
                                    <div className="flex flex-row items-center space-x-3">
                                        <select
                                            className="bg-gray-100 px-2 rounded py-1"
                                            value={product.quantity}
                                            onChange={(e) => {
                                                const newQuantity = parseInt(e.target.value);
                                                setCart(prev => {
                                                    return prev.map((item, idx) => {
                                                        if (idx === index) {
                                                            return { ...item, quantity: newQuantity, price: parseFloat(product.price) * newQuantity };
                                                        }
                                                        return item;
                                                    });
                                                });
                                            }}
                                        >
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                            <option value={6}>6</option>
                                        </select>
                                        <p className="text-sm font-medium">{product.name}</p>
                                    </div>
                                    <p className="text-sm font-light">${product.price}</p>
                                </div>
                            ))}
                            <div className="flex-1">

                            </div>
                            <div className="flex flex-row items-center justify-between border-b pb-3">
                                <p>Devlivery Fees :</p>
                                <p>$18.85</p>
                            </div>
                            <div className="flex flex-row items-center justify-between border-b pb-3">
                                <p>Service Fees :</p>
                                <p>$1.00</p>
                            </div>
                            <button disabled={isLoading} onClick={handleSubmit} className='bg-black p-3 rounded text-white font-medium'>
                                Checkout $200.00
                            </button>
                        </div>
                    }
                </div>

            </div>
        </div>
    )
}
