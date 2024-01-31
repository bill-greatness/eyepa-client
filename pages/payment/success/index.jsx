import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import Image from 'next/image'
import Footer from '../../../components/Footer';
import { IoArrowBack } from "react-icons/io5";

export default function PaymentSuccess() {

    const router = useRouter();
    console.log(router.query);

    const [loading, setLoading] = useState(true)



    useEffect(() => {
        setLoading(true);

        if (router.query.session_id) {

            setLoading(false);
        } else {
            push('/feeds?payment_error=')
        }


    }, [router.query])


    // toast('🦄 Wow so easy!', {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //     transition: Bounce,
    //     });

    return (
        <div className='flex flex-col w-screen h-screen bg-gray-100 items-center justify-center'>
            
            <div className=' mx-5 md:mx-0 md:w-1/3 max-h-2/3  flex flex-col items-center bg-white space-y-5 p-10'>
                <Image
                    className="rounded-xl"
                    src="/assets/correct.png"
                    width={80}
                    height={100}
                    alt="logo"
                />
                <p className='text-lg font-medium'>Payment Success</p>
                <p className='text-sm font-light text-center'>The payment has been successfully sent, your order reciept will be sent to you in less than a minute. </p>
                <button  onClick={()=> router.push('/orders/4')} className='bg-yellow-400 w-full p-3 rounded-md font-medium text-sm'>
                    Track Order
                </button>
            </div>
            <div className='py-3 text-sm text-gray-500 flex items-start px-5 w-full  md:px-0 md:w-1/3 '>
                <button onClick={()=> router.push('/feeds')} className='flex items-center justify-center space-x-5 bg-white p-3 px-5 w-full rounded-md font-medium'>
                    <p>Back</p>
                </button>
            </div>

        </div>
    )
}
