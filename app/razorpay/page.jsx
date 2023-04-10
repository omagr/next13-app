'use client'

import { useRef } from "react";
import axios from "axios";

export default function Home() {
	const amountIn = useRef();
	// checkOut
	async function checkOut() {
		const { data: { order: { id, amount }, key } } = await axios.post('http://localhost:4000/api/checkout', { amount: amountIn.current.value })
		const __razor__ = {
			"key": key,
			"amount": amount,
			"currency": "INR",
			"name": "Agarwal Corps",
			"description": "Agarwal Transaction",
			"image": '',
			"order_id": id,
			"callback_url": "http://localhost:4000/api/paymentVerfication",
			"prefill": {
				"name": "login user",
				"email": "login email",
				"contact": "login number"
			},
			"notes": {
				"address": "Agarwal Corporate Office"
			},
			"theme": {
				"color": "#ccc"
			}
		};
		var razor__object = new window.Razorpay(__razor__);
		razor__object.open();
		console.log(razor__object)
	}
	return <main>
		<button onClick={checkOut} className="text-2xl inline-flex items-center rounded-md bg-blue-800  px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">RAZORPAY</button>
		<input className="w-full mt-4 text-2xl inline-flex items-center rounded-md bg-slate-950  px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-stone-950-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" type="text" placeholder="Amount?" ref={amountIn} />
	</main>;
}
