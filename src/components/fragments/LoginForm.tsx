import { ButtonProps } from "../elements/Button";
import InputForm from "../elements/Form";

const LoginForm = () => {
	return (
		<form action=''>
			<InputForm name='email' text='Email' type='email' placeholder='example123@mail.com' />
			<InputForm name='password' text='Password' type='password' placeholder='********' />
			<ButtonProps classname='w-full'>Login</ButtonProps>
		</form>
	);
};

export default LoginForm;
