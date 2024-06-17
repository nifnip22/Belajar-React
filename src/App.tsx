import React from 'react';

// Membuat Component menggunakan Class (Stateful Component)
class ButtonClass extends React.Component {
	render() {
		return <button className='bg-transparent hover:bg-blue-800 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Class</button>;
	}
}

// Membuat Component menggunakan Function (Stateless Component)
function ButtonFunction() {
	return (
		<button className='bg-transparent hover:bg-green-800 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded'>Function</button>
	)
}

// Membuat Component menggunakan Const
const ButtonConst = () => {
	return (
		<button className='bg-transparent hover:bg-gray-800 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded'>Const</button>
	)
}

// Contoh Penggunaan Props pada Button
const ButtonProps = (props) => {

	// Konsep distructuring (bisa digunakan untuk memberikan properti yang default)
	const { children, variant = 'bg-blue-700', hover = 'bg-blue-800' } = props

	return (
		<button className={`${variant} hover:${hover} text-white font-semibold py-2 px-4 rounded`}>{children}</button>
	)
}

function App() {
	return (
		<>
			<div className='flex flex-col space-y-4 justify-center bg-gradient-to-t from-sky-100 to-gray-50 min-h-screen items-center'>
				<h1 className='text-4xl font-bold text-gray-900'>Hello React!</h1>
				<div className='flex space-x-4'>
					<ButtonClass></ButtonClass>
					<ButtonFunction></ButtonFunction>
					<ButtonConst></ButtonConst>
				</div>
				<div className="flex space-x-4">
					<ButtonProps variant="bg-red-700" hover="bg-red-800">Remove</ButtonProps>
					<ButtonProps variant="bg-green-700" hover="bg-green-800">Submit</ButtonProps>
					<ButtonProps>Info</ButtonProps>
				</div>
			</div>
		</>
	);
}

export default App;
