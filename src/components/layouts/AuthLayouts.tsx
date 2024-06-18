// import LoginForm from '../fragments/LoginForm';

import React from 'react';

const AuthLayout = (props: { title: string; children: React.ReactNode }) => {
	const { title, children } = props;

	return (
		<div className='flex justify-center bg-gradient-to-r from-gray-50 via-blue-100 to-blue-50 min-h-screen items-center'>
			<div className='w-full max-w-xs sm:max-w-lg'>
				<h1 className='text-3xl font-bold mb-2 text-gray-900'>{title}</h1>
				<p className='font-medium text-slate-500 mb-12'>Welcome, Please Enter Your Details</p>
				{children}
			</div>
		</div>
	);
};

export default AuthLayout;
