import RegisterForm from '../components/fragments/RegisterForm';
import AuthLayout from '../components/layouts/AuthLayouts';

const RegisterPage = () => {
	return (
		<AuthLayout title='Register' type="register">
			<RegisterForm />
		</AuthLayout>
	);
};

export default RegisterPage;
