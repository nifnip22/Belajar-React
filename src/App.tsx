import { ButtonClass, ButtonFunction, ButtonConst, ButtonProps } from "./components/elements/Button";

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
