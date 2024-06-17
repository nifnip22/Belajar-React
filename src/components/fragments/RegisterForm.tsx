import { ButtonProps } from "../elements/Button";
import InputForm from "../elements/Form";

const RegisterForm = () => {
	return (
		<form action=''>
			<InputForm name='name' text='Name' type='text' placeholder='Insert your name here...' />
			<InputForm name='email' text='Email' type='email' placeholder='example123@mail.com' />
			<InputForm name='password' text='Password' type='password' placeholder='********' />
			<InputForm name='password' text='Confirm Password' type='password' placeholder='********' />
			<ButtonProps classname='w-full'>Register</ButtonProps>
		</form>
	);
};

export default RegisterForm;
