import React from 'react';

// Membuat Component menggunakan Class (Stateful Component)
export class ButtonClass extends React.Component {
	render() {
		return <button className='bg-transparent hover:bg-blue-800 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Class</button>;
	}
}

// Membuat Component menggunakan Function (Stateless Component)
export function ButtonFunction() {
	return (
		<button className='bg-transparent hover:bg-green-800 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded'>Function</button>
	)
}

// Membuat Component menggunakan Const
export const ButtonConst = () => {
	return (
		<button className='bg-transparent hover:bg-gray-800 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded'>Const</button>
	)
}

// Contoh Penggunaan Props pada Button
export const ButtonProps = ({ children, variant = 'bg-blue-700', hover = 'bg-blue-800' }: { children: React.ReactNode, variant?: string, hover?: string }) => {
    return (
		<button className={`${variant} hover:${hover} text-white font-semibold py-2 px-4 rounded`}>{children}</button>
	)
}
