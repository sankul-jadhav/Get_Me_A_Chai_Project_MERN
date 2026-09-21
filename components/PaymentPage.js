"use client"
import React from 'react'
import Script from 'next/script'
import { fetchpayments, fetchuser, initiate } from '@/actions/useractions'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from 'react-toastify'
import { useRouter } from 'next/navigation'

const PaymentPage = ({ username }) => {
    const [paymentform, setPaymentform] = useState({ name: "", message: "", amount: "" })
    const [currentuser, setcurrentuser] = useState({})
    const [payments, setPayments] = useState([])
    const searchParams = useSearchParams()
    const router = useRouter()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        if (searchParams.get("paymentdone") == "true") {

            toast('🦄 Thanks for your Donation!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
        router.push(`/${username}`) 
    },[] 
    )

    const handleChange = (e) => {
        setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
        console.log(paymentform);

    }

    const getData = async (params) => {
        let u = await fetchuser(username)
        setcurrentuser(u)
        let dbpayments = await fetchpayments(username)
        setPayments(dbpayments)
        console.log(u, dbpayments);
    }



    const pay = async (amount) => {
        // Get the order Id
        let a = await initiate(amount, username, paymentform)
        let orderId = a.id

        // create Razorpay Checkout
        var options = {
            "key": currentuser.razorpayid, 
            "amount": amount, 
            "currency": "INR",
            "name": "Get Me A Chai", 
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, 
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`, 
            "prefill": { 
                "name": "Gaurav Kumar",
                "email": "gaurav.kumar@example.com",
                "contact": "+919876543210"  
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }
        var rzp1 = new Razorpay(options);
        rzp1.open()
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

            <div className='cover w-full bg-red-50 relative'>
                <img className='object-cover w-full h-40 md:h-[300]' src={currentuser.coverpic} alt="" />

                <div className='absolute -bottom-10 right-[36%] md:right-[46%] border-2 border-white rounded-full hover:border-3 hover:border-blue-950 '>
                    <img width={85} height={85} className='rounded-full' src={currentuser.profilepic} alt="" />
                </div>
            </div>

            <div className="info flex flex-col justify-center items-center gap-1  mt-10 mb-4">
                <div className='font-bold text-lg'>
                    @{username}
                </div>
                <div className='text-slate-400'>
                    Lets help {username} get a Chai!
                </div>
                <div className='text-slate-400'>
                    {payments.length} Payments .  ₹{payments.reduce((a, b) => a + b.amount, 0)} raised
                </div>

                <div className="payment flex gap-3 w-[80%] mt-4 flex-col md:flex-row">
                    <div className="supporters w-fullmd:w-1/2  bg-slate-900 text-white00 rounded-lg text-white px-4 ">
                        {/* show the list of all the supporters as a leaderboard */}
                        <h2 className=' text-xl  font-bold my-2'>Top 5 Supporters</h2>
                        <ul className='mx-4 text-base'>
                            {payments.length == 0 && <li>No payments yet</li>}
                            {payments.map((p, i) => {
                                return <li key={i} className='my-2 gap-2 flex items-center'>
                                    <img width={33} src="avatar.gif" alt="user avatar" />
                                    <span>
                                        {p.name} donated <span className='font-bold'>₹{p.amount} </span> with a message "{p.message}"
                                    </span>
                                </li>
                            })}
                        </ul>
                    </div>
                    
                    <div className="makePayment w-full md:w-1/2 0 bg-slate-900 rounded-lg text-white px-4">
                        <h2 className='text-xl font-bold my-2 '>Make a Payment</h2>
                        <div className="flex flex-col gap-2">
                            <input onChange={handleChange} value={paymentform.name} name='name' type="text" className='w-full p-2  rounded-lg bg-slate-800' placeholder='Enter Name' />
                            <input onChange={handleChange} value={paymentform.message} name='message' type="text" className='w-full p-2  rounded-lg bg-slate-800' placeholder='Enter Message' />
                            <input onChange={handleChange} value={paymentform.amount} name='amount' type="text" className='w-full p-2 rounded-lg bg-slate-800' placeholder='Enter Amount' />
                            <button onClick={() => pay(Number.parseInt(paymentform.amount) * 100)}
                                type="button" className="rounded-lg text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 disabled:bg-slate-600 disabled:from-slate-600 disabled:to-purple-100 " disabled={paymentform.name?.length < 3 || paymentform.message.length < 4 || !paymentform.amount}>Pay</button>
                        </div>
                        <div className="flex flex-col md:flex-row  gap-2 mt-3 ">
                            <button className='bg-slate-800 p-2 rounded-lg ' onClick={() => pay(1000)}>Pay ₹10</button>
                            <button className='bg-slate-800 p-2 rounded-lg ' onClick={() => pay(2000)}>Pay ₹20</button>
                            <button className='bg-slate-800 p-2 rounded-lg ' onClick={() => pay(3000)}>Pay ₹30</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentPage
