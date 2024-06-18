// import LoginForm from '../fragments/LoginForm';

import React from 'react';
import { Link } from 'react-router-dom';

const AuthLayout = (props: { title: string; children: React.ReactNode; type: string }) => {
	const { title, children, type } = props;

	return (
		<div className='flex justify-center bg-gradient-to-r from-gray-50 via-blue-100 to-blue-50 min-h-screen items-center'>
			<div className='w-full max-w-xs sm:max-w-lg'>
				<h1 className='text-3xl font-bold mb-2 text-gray-900'>{title}</h1>
				<p className='font-medium text-slate-500 mb-12'>Welcome, Please Enter Your Details</p>
				{children}
				<p className='mt-6 font-regular text-center'>
					{/* Conditional Rendering */}
					{type === 'login' ? 'Don’t have an account?' : 'Already have an account?'}{' '}
					{type === 'login' && (
						<Link to='/register' className='font-bold hover:text-blue-600'>
							Register
						</Link>
					)}
					{type === 'register' && (
						<Link to='/login' className='font-bold hover:text-blue-600'>
							Login
						</Link>
					)}
				</p>
			</div>
		</div>
	);
};

export default AuthLayout;
