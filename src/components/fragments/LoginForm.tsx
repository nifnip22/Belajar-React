import { ButtonProps } from '../elements/Button';
import InputForm from '../elements/Form';

const LoginForm = () => {
	// Contoh Event Handler di React
	const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const target = event.target as HTMLFormElement;
		localStorage.setItem('email', target.email.value);
		localStorage.setItem('password', target.password.value);
		window.location.href = '/products';
	};
	return (
		<form onSubmit={handleLogin}>
			<InputForm name='email' text='Email' type='email' placeholder='example123@mail.com' />
			<InputForm name='password' text='Password' type='password' placeholder='********' />
			<ButtonProps classname='w-full' type='submit'>
				Login
			</ButtonProps>
		</form>
	);
};

export default LoginForm;
